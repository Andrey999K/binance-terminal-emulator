import React from 'react';
import FormOrder from "./FormOrder";

const FormsOrder = ({data, create}) => {
    return (
        <div className='
            flex flex-row basis-1/2 justify-center items-center gap-7
            bg-[#1E2026] px-10'>
            <FormOrder create={create} data={data} typeForm='buy'/>
            <FormOrder create={create} data={data} typeForm='sell'/>
        </div>
    );
};

export default FormsOrder;