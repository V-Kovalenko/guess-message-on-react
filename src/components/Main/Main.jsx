import React, {useContext, useEffect, useState} from 'react';
import Input from "../Input/Input";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import './Main.scss'
import Context from "../Context/Context";


const Main = () => {
    const {onChangeStateInput} = useContext(Context)
    const {guessMessage} = useContext(Context)
    const {stateScore} = useContext(Context)
    const {highStateScore} = useContext(Context)
    const {stateInput} = useContext(Context)
    const {getGameMessage} = useContext(Context)
    return (
        <div>

            <div className="main">
                <section className="main__left">
                    <Input onChange={onChangeStateInput} value={stateInput}/>
                    <ButtonCheck/>
                </section>
                <section className="main__right">
                    <p className="main__guess-message">{getGameMessage()}</p>
                    <p className="main__label-score">Очки: <span className="score">{stateScore}</span></p>
                    <p className="main__label-highScore">
                        Лучший результат: <span className="main__highScore">{highStateScore}</span>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Main;