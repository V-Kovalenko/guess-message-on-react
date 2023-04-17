import React, {useContext, useState} from 'react';
import ButtonAgain from "../ButtonAgain/ButtonAgain";
import './Header.scss'
import Context from "../Context/Context";

const Header = () => {
    const {secretNumber} = useContext(Context)
    const {isGameFinished} = useContext(Context)
    const headerText = isGameFinished ? secretNumber : '???'
    return (
        <div className='header'>
            <ButtonAgain/>
            <h1 className="header__h1">Угадай число!</h1>
            <p className="header__between">( Между 1 и 20 )</p>
            <div className={!isGameFinished? "header__question" : 'header__question header__question_size' }>{headerText}</div>
        </div>
    );
};
export default Header;