import React from 'react';
import './Input.scss'
const Input = ({onChange, value}) => {
    return (
        <input className='input' type='number' onChange={onChange} value={value}/>
    );
};

export default Input;