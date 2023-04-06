import React from "react";
import { API } from "../../share/api/axios.config";
import { Header } from "../../widgets/Header";
import { OrderForm } from "../../widgets/OrderForm";
import './index.scss'

export const CreateInvoicePage = ()=>{

    const onSendDataHandler = (data: any)=>{
        API.post('/invoice', data).then(res=>console.log(res.data))
    }


    return <div className="CreateInvoicePage">
        <Header/>
        <OrderForm title="Создание Прихода" onClick={onSendDataHandler}/>
    </div>
}