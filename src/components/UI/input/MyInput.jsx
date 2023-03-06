import React from 'react';

const MyInput = ({placeholderLabel, currency, ...props}) => {
    return (
        <div className='form-input'>
            <label className='form-input__label'>
                <span className='form-input__placeholder'>{placeholderLabel}</span>
                <input className='form-input__input' {...props}/>
                <span className='form-input__currency'>{currency}</span>
            </label>
        </div>
    );
};

export default MyInput;