import './App.scss';
import './assets/scss/reset.scss'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {useMemo, useState} from "react";
import Context from "./components/Context/Context";

const guessMessage = {
    win: 'Правильно!',
    few: 'Мало!',
    much: 'Много!',
    start: 'Начни угадывать!',
    enter: 'Введите число!',
    lose: 'Вы проиграли...'
}


function App() {
    const [stateScore, setStateScore] = useState(20)
    const [highStateScore, setHighStateScore] = useState(0)
    const [secretNumber, setSecretNumber] = useState(Number(Math.floor(Math.random() * 20) + 1))
    const [stateInput, setStateInput] = useState('')
    const [checkInput, setCheckInput] = useState(-1)
    const getGameMessage = () => {
        if (checkInput === -1 ) {
            return guessMessage.start
        }else if(!checkInput) {
            return guessMessage.enter
        }else if (secretNumber === checkInput) {
           return  guessMessage.win
        } else if (secretNumber !== checkInput && stateScore < 2) {
            return guessMessage.lose
        }else if (secretNumber !== checkInput) {
            return secretNumber < checkInput ? guessMessage.much : guessMessage.few
        }
    }
    const isGameFinished = useMemo(() => {
        return  checkInput === secretNumber

    },[checkInput, secretNumber])


    const onChangeStateInput = (e) => {
        setStateInput(e.target.value)
    }
    return (
        <Context.Provider value={{
            stateScore,
            setStateScore,
            highStateScore,
            setHighStateScore,
            secretNumber,
            setSecretNumber,
            stateInput,
            setStateInput,
            onChangeStateInput,
            guessMessage,
            setCheckInput,
            isGameFinished,
            getGameMessage
        }}>
            <div className={isGameFinished ? "App App_green" : "App"}>
                <Header/>
                <Main/>
            </div>
        </Context.Provider>

    );
}

export default App;
