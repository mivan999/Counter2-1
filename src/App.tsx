import React, {useEffect, useState} from 'react';
import './App.css';
import Scoreboard from './Component/Scoreboard/Scoreboard';
import Settings from './Component/Settings/Settings';



function App() {
    if (!localStorage.getItem('valStart')) localStorage.setItem('valMax', '5')
    if (!localStorage.getItem('valMax')) localStorage.setItem('valStart', '0')
    let startValue = JSON.parse(localStorage.getItem('valStart') || '0')
    let maxValue = JSON.parse(localStorage.getItem('valMax') || '1')
    const [count, setCount] = useState(startValue);
    const [max, setMax] = useState(maxValue);
    const [start, setStart] = useState(startValue);
    const [error, setError] = useState('');
    const [editStatus, setEditStatus] = useState(false);
    useEffect(() => {
        if (start >= max||start<0) {
            setError('incorrect value')
        } else setError('')
    }, [max, start])
    const maxUp = () => {
        setMax(max + 1)
        setEditStatus(true)
        localStorage.setItem('valMax', JSON.stringify(max + 1))
    }
    const maxDown = () => {
        setMax(max - 1)
        setEditStatus(true)
        localStorage.setItem('valMax', JSON.stringify(max - 1))
    }
    const startUp = () => {
        setStart(start + 1)
        setEditStatus(true)
        localStorage.setItem('valStart', JSON.stringify(start + 1))
    }

    const startDown = () => {
        setStart(start - 1)
        setEditStatus(true)
        localStorage.setItem('valStart', JSON.stringify(start - 1))
    }
    const incHandler = () => {
        setCount(count + 1)
    }
    const resetHandler = () => {
        setCount(start)
    }
    let statusCount: 'default' | 'maxLimit'
    if (count >= max) {
        statusCount = 'maxLimit'
    } else {
        statusCount = 'default'
    }
    const setHandler = () => {
        setEditStatus(false)
        setCount(start)
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
