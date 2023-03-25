import React from "react";

import './index.scss'

import { Button } from "../../share/ui/Button";
import { TextInput } from "../../share/ui/TextInput";


interface SignFormProps {
    name: string
    buttonName: string
    onEvent: ()=>void
}

export const SignForm: React.FC<SignFormProps> = ({
    name,
    buttonName,
    onEvent
}) => {

    // const 
    return <div className="SignForm">
        <div className="SignForm__title">{name}</div>
        <TextInput placeholder="Электронная почта"/>
        <TextInput placeholder="Пароль"/>
        <Button onClick={onEvent}>{buttonName}</Button>
    </div>
}