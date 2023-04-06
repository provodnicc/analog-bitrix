import React from "react";
import { API } from "../../share/api/axios.config";
import { Header } from "../../widgets/Header";
import { OrderForm } from "../../widgets/OrderForm";

export const SaleProductPage = ()=>{
    const onSendDataHandler = (data: any) => {
        const order = API.post('/order', data).then(res => console.log(res.data))
    }
    return <div>
        <Header/>
        <OrderForm onClick={()=>{}}/>
    </div>
}