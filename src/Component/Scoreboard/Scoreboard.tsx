import React from 'react'
import Count from '../Count/Count';
import Button from '../Button/Button';
import s from './Scoreboard.module.css'

export type ScoreboardPropsType = {
    count: number
    inc: () => void
    reset: () => void
    statusCount: 'default' | 'maxLimit'
    startCount: number
    editStatus: boolean
    error: string
}

const Scoreboard = (
    {
        count,
        inc,
        reset,
        statusCount,
        startCount,
        editStatus,
        error
    }: ScoreboardPropsType
) => {
    const incrementCount = () => {
        inc()
    }
    const resetCount = () => {
        reset()
    }
    const countValue = () => {
        return editStatus ?
            error ?
                <div className={s.message}>
                    <h3>{error}</h3>
                </div>
                : <div className={s.message}>
                    <h3>Enter value and press set</h3>
                </div>
            : <Count
                value={count}
                status={statusCount}
            />
    }
    return (
        <div className={statusCount === 'default' ? s.def : s.lim}>
            {countValue()}
            <div>
                <Button
                    name={'inc'}
                    callback={incrementCount}
                    disabled={editStatus || statusCount !== 'default'}
                />
                <Button
                    name={'reset'}
                    callback={resetCount}
                    disabled={editStatus || count === startCount}
                />
            </div>
        </div>)
}
export default Scoreboard