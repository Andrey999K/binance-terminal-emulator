import React from 'react';
import FormOrder from "./FormOrder";

const FormsOrder = ({data, create, available}) => {
    return (
        <div className='
            flex flex-row basis-1/2 justify-center items-center gap-3 md:gap-7
            bg-[#1E2026] px-10'>
            <FormOrder available={available.USDT} create={create} data={data} typeForm='buy'/>
            <FormOrder available={available.BTC} create={create} data={data} typeForm='sell'/>
        </div>
    );
};

export default FormsOrder;