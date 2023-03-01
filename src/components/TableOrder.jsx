import React from 'react';

const TableOrder = ({orders}) => {
    return (
        <div className='basis-1/2'>
            <div className='table-order'>
                <div className='table-order__row table-order__head'>
                    <div>Price(USDT)</div>
                    <div>Amount(BTC)</div>
                    <div>Time</div>
                </div>
                {orders.map((order) =>
                    <div key={order.id} className="table-order__row">
                        <div className={order.type}>{order.price}</div>
                        <div>{order.amount}</div>
                        <div>{order.time}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TableOrder;