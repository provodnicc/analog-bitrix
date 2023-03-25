import React from "react";
import { SignForm } from "../../widgets/SignForm";

export const SignInPage = () =>{
    const onEventHelper = ()=>{

    }
    return <div>
        <SignForm name="Вход" buttonName="Войти" onEvent={onEventHelper}/>
    </div>
}