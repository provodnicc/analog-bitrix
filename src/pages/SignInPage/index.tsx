import React from "react";
import { Header } from "../../widgets/Header";
import { SignForm } from "../../widgets/SignForm";

export const SignInPage = () =>{
    const onEventHelper = ()=>{

    }
    return <div>
        <Header/>

        <SignForm name="Вход" buttonName="Войти" onEvent={onEventHelper}/>
    </div>
}