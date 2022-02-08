import React, {useEffect} from 'react';
import './App.css';
import Scoreboard from './Component/Scoreboard/Scoreboard';
import Settings from './Component/Settings/Settings';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {incValueAC, resetCountAC} from "./redux/count-reducer";
import {decMaxValueAC, incMaxValueAC} from "./redux/max-reducer";
import {decStartValueAC, incStartValueAC, setStarCountAC} from "./redux/start-reducer";
import {changeStatusEditAC} from "./redux/editStatus-reducer";
import {setErrorAC} from "./redux/error-reducer";


function App() {
    const count = useSelector<AppStateType, number>(state => state.counter.value)
    const max = useSelector<AppStateType, number>(state => state.max.value)
    const start = useSelector<AppStateType, number>(state => state.start.value)
    const editStatus = useSelector<AppStateType, boolean>(state => state.editStatus.value)
    const error = useSelector<AppStateType, string>(state => state.error.value)

    const dispatch = useDispatch()


    if (!localStorage.getItem('valStart')) localStorage.setItem('valMax', '5')
    if (!localStorage.getItem('valMax')) localStorage.setItem('valStart', '0')
    // let startValue = JSON.parse(localStorage.getItem('valStart') || '0')
    // let maxValue = JSON.parse(localStorage.getItem('valMax') || '1')
    // const [count, setCount] = useState(startValue);
    // const [max, setMax] = useState(maxValue);
    //  const [start, setStart] = useState(startValue);
    // const [error, setError] = useState('');
    // const [editStatus, setEditStatus] = useState(false);
    useEffect(() => {
        if (start >= max || start < 0) {
            dispatch(setErrorAC('incorrect value'))
            // setError('incorrect value')
        } else  dispatch(setErrorAC(''))//setError('')
    }, [max, start])
    const maxUp = () => {
        dispatch(incMaxValueAC())
        // setMax(max + 1)
        // setEditStatus(true)
        dispatch(changeStatusEditAC(true))
        localStorage.setItem('valMax', JSON.stringify(max + 1))
    }
    const maxDown = () => {
        dispatch(decMaxValueAC())
        // setMax(max - 1)
        // setEditStatus(true)
        dispatch(changeStatusEditAC(true))
        localStorage.setItem('valMax', JSON.stringify(max - 1))
    }
    const startUp = () => {
        dispatch(incStartValueAC())
        // setStart(start + 1)
        // setEditStatus(true)
        dispatch(changeStatusEditAC(true))
        localStorage.setItem('valStart', JSON.stringify(start + 1))
    }

    const startDown = () => {
        dispatch(decStartValueAC())
        // setStart(start - 1)
        // setEditStatus(true)
        dispatch(changeStatusEditAC(true))
        localStorage.setItem('valStart', JSON.stringify(start - 1))
    }


    const incHandler = () => {
        dispatch(incValueAC())
        // setCount(count + 1)
    }
    const resetHandler = () => {
        dispatch(resetCountAC(start))
        //  setCount(start)
    }
    let statusCount: 'default' | 'maxLimit'
    if (count >= max) {
        statusCount = 'maxLimit'
    } else {
        statusCount = 'default'
    }
    const setHandler = () => {
        // setEditStatus(false)
        dispatch(changeStatusEditAC(false))
        dispatch(setStarCountAC(start))
        dispatch(resetCountAC(start))
        // setCount(start)
    }
    return (
        <div className="App">
            <Scoreboard
                count={count}
                inc={incHandler}
                reset={resetHandler}
                startCount={start}
                statusCount={statusCount}
                editStatus={editStatus}
                error={error}
            />
            <Settings
                max={max}
                start={start}
                maxUp={maxUp}
                startUp={startUp}
                maxDown={maxDown}
                startDown={startDown}
                error={error}
                set={setHandler}
            />
        </div>
    );
}

export default App;
