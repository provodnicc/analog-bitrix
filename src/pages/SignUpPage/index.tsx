import React from "react";
import { Header } from "../../widgets/Header";
import { SignForm } from "../../widgets/SignForm";

export const SignUpPage = ()=>{
    const onEventHelper = ()=>{

    }

    return <div>
        <Header/>

        <SignForm name="Регистрация" buttonName="Зарегистрироваться" onEvent={onEventHelper}/>

    </div>
}