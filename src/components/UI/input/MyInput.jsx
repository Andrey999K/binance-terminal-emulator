import React from 'react';

const MyInput = (props) => {
    return (
        <input className='p-2 bg-[#292D33] w-full border-[1px] border-transparent text-white rounded-md hover:border-[#F0B90B]' {...props}/>
    );
};

export default MyInput;