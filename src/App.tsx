import React, {useEffect} from 'react';
import './App.css';
import Scoreboard from './Component/Scoreboard/Scoreboard';
import Settings from './Component/Settings/Settings';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/store';
import {incValueAC, resetCountAC} from './redux/count-reducer';
import {decMaxValueAC, incMaxValueAC} from './redux/max-reducer';
import {
    decStartValueAC,
    incStartValueAC,
    setStarCountAC
} from './redux/start-reducer';
import {changeStatusEditAC} from './redux/editStatus-reducer';
import {setErrorAC} from './redux/error-reducer';


function App() {
    const count = useSelector<AppStateType, number>((state: AppStateType) => state.counter.value)
    const max = useSelector<AppStateType, number>((state: AppStateType) => state.max.value)
    const start = useSelector<AppStateType, number>((state: AppStateType) => state.start.value)
    const editStatus = useSelector<AppStateType, boolean>((state: AppStateType) => state.editStatus.value)
    const error = useSelector<AppStateType, string>((state: AppStateType) => state.error.value)

    const dispatch = useDispatch()
  
    useEffect(() => {
        (start >= max || start < 0) ?
            dispatch(setErrorAC('incorrect value'))
            : dispatch(setErrorAC(''))
    }, [max, start])

    const changeValue = (isStart: boolean, isUp: boolean) => {

        const changeMax = (isUp: boolean) => {
            isUp ? dispatch(incMaxValueAC()) : dispatch(decMaxValueAC())
            dispatch(changeStatusEditAC(true))
        }
        const changeStart = (isUp: boolean) => {
            isUp ? dispatch(incStartValueAC()) : dispatch(decStartValueAC())
            dispatch(changeStatusEditAC(true))
        }
        isStart ? changeStart(isUp):changeMax(isUp)
    }  //change value start and max

    const maxUp = () => {
        changeValue(false, true)
    }
    const maxDown = () => {
        changeValue(false, false)
    }
    const startUp = () => {
        changeValue(true, true)
    }
    const startDown = () => {
        changeValue(true, false)
    }

    const incHandler = () => {
        dispatch(incValueAC())
    }
    const resetHandler = () => {
        dispatch(resetCountAC(start))
    }
    let statusCount: 'default' | 'maxLimit'= (count >= max) ? 'maxLimit' : 'default'

    const setHandler = () => {
        dispatch(changeStatusEditAC(false))
        dispatch(setStarCountAC(start))
        dispatch(resetCountAC(start))
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
