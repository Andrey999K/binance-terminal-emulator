import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {type} from "@testing-library/user-event/dist/type";

const FormOrder = ({typeForm, data, create}) => {

    const [price, setPrice] = useState(typeForm === 'buy' ? data.priceBuy : data.priceSell)
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');

    const inputPrice = (value) => {
        setPrice(value);
        if (value === '') {
            setTotal('');
            return;
        }
        if (amount !== '') {
            setTotal(String(parseFloat(value) * parseFloat(amount)));
        }
    }

    const inputAmount = (value) => {
        setAmount(value);
        if (value === '') {
            setTotal('');
            return;
        }
        if (price !== '') {
            setTotal(String(parseFloat(value) * parseFloat(price)));
        }
    }

    const inputTotal = (value) => {
        setTotal(value);
        if (value === '') {
            setAmount('')
            return;
        }
        setAmount(String(parseFloat(value) / parseFloat(price)));
    }

    const createOrder = (event, type) => {
        event.preventDefault();
        const newOrder = {
            id: Date.now(),
            type: type,
            price: price,
            amount: amount,
            time: String((new Date()).getHours()) + ':' + String((new Date()).getMinutes()) + ':' + String((new Date()).getSeconds())
        }

        create(newOrder);
    }

    return (
        <form className='flex flex-col basis-1/2 gap-2'>
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