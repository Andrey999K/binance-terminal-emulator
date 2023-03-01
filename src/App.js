import React, {useState} from 'react';
import './App.scss';
import FormsOrder from "./components/FormsOrder";
import TableOrder from "./components/TableOrder";

function App() {

  const [dataCurrency, setDataCurrency] = useState(
      {id: 1, priceBuy: '23135.71', priceSell: '23135.79'}
  )

  const [orders, setOrders] = useState(
      [
          {id: 1, type: 'sell', price: '23,157.36', amount: '0.00009', time: '02:41:22'},
          {id: 2, type: 'buy', price: '23,156.36', amount: '0.00010', time: '02:45:22'}
      ]
  )

  const createOrder = (order) => {
      setOrders([...orders, order]);
  }

  return (
    <div className="App">
        <div className="
            container font-sans mx-auto h-screen flex justify-between
             bg-[#161A1E]">
            <FormsOrder create={createOrder} data={dataCurrency}/>
            <TableOrder orders={orders}/>
        </div>
    </div>
  );
}

export default App;
