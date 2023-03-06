import React, {useEffect, useState} from 'react';
import './App.scss';
import FormsOrder from "./components/FormsOrder";
import TableOrders from "./components/TableOrders";
import {getRandomArbitrary, getTime, roundNumber} from "./functions";

function App() {

  const [available, setAvailable] = useState(
      localStorage.getItem('available') ?
          JSON.parse(localStorage.getItem('available')) :
          {
      USDT: 500,
      BTC: 0.025
  })

  const [dataCurrency, setDataCurrency] = useState(
      {id: 1, priceBuy: '23135.71', priceSell: '23135.79'}
  )

  const [orders, setOrders] = useState(
      localStorage.getItem('orders') ?
          JSON.parse(localStorage.getItem('orders')) :
      [
          {id: 1, type: 'sell', price: '23,157.36', amount: '0.00009', time: '02:41:22'},
          {id: 2, type: 'buy', price: '23,156.36', amount: '0.00010', time: '02:45:22'}
      ]
  )

  const createRandomOrder = () => {
      return {
          id: Date.now(),
          type: ["buy", "sell"][Math.round(Math.random())],
          price: roundNumber(getRandomArbitrary(23100, 23200), 2),
          amount: roundNumber(getRandomArbitrary(0.00001, 0.001), 6),
          time: getTime()
      };
  }

  const addRandomOrder = () => {
      setOrders(prev => [...prev, createRandomOrder() ])
  }

  useEffect(() => {
    if (orders.length > 30) {
        let newMassOrders = orders;
        newMassOrders.shift();
        setOrders(newMassOrders);
    }
    saveLocalStorage('orders', orders);
  }, [orders])

  useEffect(() => {
      const interval = setInterval(() => {
          addRandomOrder();
      }, 1000);
      return () => clearInterval(interval);
  }, []);


  const correctNumber = (value) => {
      return Number(value.toFixed(6))
  }

  const saveLocalStorage = (field, value) => {
      localStorage.setItem(field, JSON.stringify(value));
  }

  const createOrder = (order) => {
      if (order.type === 'buy') {
          const dataCurrency = {
              USDT: correctNumber(available.USDT - parseFloat(order.price) * parseFloat(order.amount)),
              BTC: correctNumber(available.BTC + parseFloat(order.amount))
          };
          setAvailable(dataCurrency);
          localStorage.setItem('available', JSON.stringify(dataCurrency));
      } else {
          const dataCurrency = {
              USDT: correctNumber(available.USDT + parseFloat(order.price) * parseFloat(order.amount)),
              BTC: correctNumber(available.BTC - parseFloat(order.amount))
          }
          setAvailable(dataCurrency);
          localStorage.setItem('available', JSON.stringify(dataCurrency));
      }
      setOrders([...orders, order]);
      saveLocalStorage('orders', [...orders, order]);
  }

  return (
    <div className="App bg-[#161A1E]">
        <div className="
            container font-sans mx-auto h-screen flex flex-col justify-between md:flex-row">
            <FormsOrder available={available} create={createOrder} data={dataCurrency}/>
            <TableOrders orders={orders}/>
        </div>
    </div>
  );
}

export default App;
