import React from 'react';
import s from './Settings.module.css'
import Button from '../Button/Button';
import InputNumber from '../InputNumber/InputNumber';
type propsType={
    max:number
    start:number
    maxUp:()=>void
    startUp:()=>void
    maxDown:()=>void
    startDown:()=>void
    set:()=>void
    error:string
}
const Settings = (props:propsType) => {

    const onClickDownHandlerMax = () => {
        props.maxDown()
    }
    const onClickUpHandlerMax = () => {
        props.maxUp()
    }
    const onClickDownHandlerStart = () => {
        props.startDown()
    }
    const onClickUpHandlerStart = () => {
        props.startUp()
}

    return (
        <div className={s.set}>
            <InputNumber
                error={props.error}
                value={props.max}
                onClickUp={onClickUpHandlerMax}
                onClickDown={onClickDownHandlerMax}
            />
            <InputNumber
                error={props.error}
                value={props.start}
                onClickUp={onClickUpHandlerStart}
                onClickDown={onClickDownHandlerStart}
            />
            <Button
                name={"Set"}
                disabled={!!(props.error)}
                callback={props.set}
            />
        </div>
    );
};

export default Settings;