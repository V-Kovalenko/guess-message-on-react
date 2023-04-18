import React, {useContext} from 'react';
import Context from "../Context/Context";
import './ButtonCheck.scss'

const ButtonCheck = () => {
    const {stateScore} = useContext(Context)
    const {setStateScore} = useContext(Context)
    const {highStateScore} = useContext(Context)
    const {setHighStateScore} = useContext(Context)
    const {secretNumber} = useContext(Context)
    const {stateInput} = useContext(Context)
    const {setStateInput} = useContext(Context)
    const {setCheckInput} = useContext(Context)
    const {isGameFinished} = useContext(Context)


    const onClick = () => {
        setCheckInput(parseInt(stateInput))
        if (!stateInput){
        }  else if (secretNumber === +stateInput) {
            if (stateScore > highStateScore) {
                setHighStateScore(stateScore)
            }
        } else if (secretNumber !== +stateInput) {
            if (stateScore < 2) {
                setStateScore(0)
            } else {
                setStateScore(stateScore - 1)
                setStateInput('')
            }
        }
    }
    return (
        <div>
            {!isGameFinished? <button className='btn' onClick={onClick}>Проверить!</button>
            :<button className='button-disabled' >Проверить!</button>}

        </div>

    );
};

export default ButtonCheck;