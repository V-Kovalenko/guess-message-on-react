import React, {useContext, useState} from 'react';
import '../../assets/scss/reset.scss'
import './Button.scss'
import Context from "../Context/Context";
import context from "../Context/Context";
const ButtonAgain = () => {
    const {setStateInput} = useContext(context)
    const {setStateScore} = useContext(Context)
    const {setSecretNumber} = useContext(Context)
    const {setCheckInput} = useContext(Context)

    const onClick = () => {
            setStateInput('')
            setSecretNumber(Number(Math.floor(Math.random() * 20) + 1))
            setStateScore(20)
            setCheckInput(-1)

    }

    return (
        <div>
            <button className='btn' onClick={onClick}>Сначала!</button>
        </div>


    );
};

export default ButtonAgain;