import React from "react";
import { SignForm } from "../../widgets/SignForm";

export const SignUpPage = ()=>{
    const onEventHelper = ()=>{

    }

    return <div>
        <SignForm name="Регистрация" buttonName="Зарегистрироваться" onEvent={onEventHelper}/>

    </div>
}