import React from 'react'
import Count from '../Count/Count';
import Button from '../Button/Button';
import s from './Scoreboard.module.css'

export type ScoreboardPropsType = {
    count:number
    inc:()=>void
    reset:()=>void
    statusCount:"default"|"maxLimit"
    startCount:number
    editStatus: boolean
    error: string
}

const Scoreboard = (props: ScoreboardPropsType) => {
    const incrementCount = () => {
        props.inc()
    }
    const resetCount = () => {
       props.reset()
    }
    return (

         <div className={props.statusCount === 'default' ? s.def : s.lim}>
             {props.editStatus
                ? props.error ?
                     <div className={s.message}>
                         <h3>{props.error}</h3>
                     </div>
                    : <div className={s.message}>
                        <h3>Enter value and press set</h3>
                     </div> :
                <Count
                    value={props.count}
                    status={props.statusCount}
                />
             }
            <div>
                <Button
                    name={"inc"}
                    callback={incrementCount}
                    disabled={props.editStatus || props.statusCount != 'default'}

                />
                <Button
                    name={"reset"}
                     callback={resetCount}
                    disabled={props.editStatus || props.count === props.startCount}

                />
            </div>
        </div>)
}
export default Scoreboard