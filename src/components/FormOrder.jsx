import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {type} from "@testing-library/user-event/dist/type";

const FormOrder = ({typeForm, data, create, available}) => {

    const [price, setPrice] = useState(typeForm === 'buy' ? data.priceBuy : data.priceSell)
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');

    // ОКРУГЛЕНИЕ ЧИСЛА ДО ОПРЕДЕЛЁННОГО ЗНАКА В МЕНЬШУЮ СТОРОНУ
    const roundNumber = (value, count) => {
        console.log(value, count);
        return parseInt(value * Math.pow(10, count)) / Math.pow(10, count);
    }

    // ПРОВЕРКА КОРРЕКТНОСТИ ВВОДА (ПРОВЕРКА НА ВВОД НЕ ЧИСЛОВЫХ СИМВОЛОВ И ЛИШНЕЙ ТОЧКИ)
    const checkInputCorrect = (value) => {
        return !(value.match(/[^\d\.]/g) || (value.match(/\./g) && value.match(/\./g).length > 1) || (value.match(/\.\d{7}/g)));
    }

    const inputPrice = (value) => {
        if (checkInputCorrect(value)) {
            setPrice(value);
            if (value === '' || value === '0') {
                setTotal(value);
                return;
            }
            if (amount !== '') {
                let totalValue = roundNumber(parseFloat(value) * parseFloat(amount), 6);
                if (totalValue > available) {
                    const priceValue = roundNumber(available / amount, 2);
                    setPrice(String(priceValue));
                    totalValue = roundNumber(priceValue * parseFloat(amount), 6);
                }
                setTotal(String(totalValue));
            }
        }
    }

    const inputAmount = (value) => {
        if (checkInputCorrect(value)) {
            setAmount(value);
            if (value === '' || value === '0') {
                setTotal(value);
                return;
            }
            if (price !== '') {
                let totalValue = roundNumber(parseFloat(value) * parseFloat(price), 6);
                if (typeForm === 'buy') {
                    if (totalValue > available) {
                        const amountValue = roundNumber(available / price, 6);
                        setAmount(String(amountValue));
                        totalValue = roundNumber(amountValue * parseFloat(price), 6);
                    }
                    setTotal(String(totalValue));
                } else {
                    if (Number(value) > available) {
                        setAmount(available);
                        setTotal(String(roundNumber(available * price, 6)));
                    }
                }
            }
        }
    }

    const inputTotal = (value) => {
        if (checkInputCorrect(value)) {
            setTotal(value);
            if (value === '' || value === '0') {
                setAmount(value)
                return;
            }
            const amountValue = roundNumber(parseFloat(value) / parseFloat(price), 6);
            setAmount(String(amountValue));
            if (typeForm === 'buy') {
                if (parseFloat(value) > available) {
                    setTotal(available);
                    setAmount(String(roundNumber(available / parseFloat(price), 6)));
                }
            } else {
                if (amountValue > available) {
                    setAmount(String(available));
                    setTotal(String(roundNumber(available * price, 6)));
                }
            }
        }
    }

    const createOrder = (event, type) => {
        event.preventDefault();
        if (price === ('' || '0') || amount === ('' || '0') || total === ('' || '0')) {
            return;
        }
        const newOrder = {
            id: Date.now(),
            type: type,
            price: price,
            amount: amount,
            time: String((new Date()).getHours()) + ':' + String((new Date()).getMinutes()) + ':' + String((new Date()).getSeconds())
        }
        create(newOrder);
        setAmount('');
        setTotal('');
    }

    return (
        <form className='flex flex-col basis-1/2 gap-2'>
            <div className="text-[#848e9c] text-[12px]">
                Avbl <span className="text-white">{available} {typeForm === 'buy' ? 'USDT' : 'BTC'}</span>
            </div>
            <MyInput
                value={price} placeholder='Price'
                onChange={event => inputPrice(event.target.value)}
            />
            <MyInput
                value={amount}
                placeholder='Amount'
                onChange={event => inputAmount(event.target.value)}
            />
            <MyInput
                value={total}
                placeholder='Total'
                onChange={event => inputTotal(event.target.value)}
            />
            <MyButton
                className={
                'p-3 font-medium text-white rounded-md ' +
                (typeForm === 'buy' ? 'buy' : 'sell')}
                onClick={event => createOrder(event, typeForm)}
            >
                {typeForm === 'buy' ? 'Buy BTC' : 'Sell BTC'}
            </MyButton>
        </form>
    );
};

export default FormOrder;