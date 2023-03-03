import React, {useState} from 'react';
import './App.scss';
import FormsOrder from "./components/FormsOrder";
import TableOrder from "./components/TableOrder";

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

  const correctNumber = (value) => {
      return Number(value.toFixed(6))
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
      localStorage.setItem('orders', JSON.stringify([...orders, order]));
  }

  return (
    <div className="App bg-[#161A1E]">
        <div className="
            container font-sans mx-auto h-screen flex flex-col justify-between md:flex-row">
            <FormsOrder available={available} create={createOrder} data={dataCurrency}/>
            <TableOrder orders={orders}/>
        </div>
    </div>
  );
}

export default App;
