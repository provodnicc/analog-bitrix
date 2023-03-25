import React from "react";
import { Button } from "../../share/ui/Button";
import { TextInput } from "../../share/ui/TextInput";

import './index.scss'

export const OrderForm = () => {
    const onChangeHandler = (e: any) => {

    }

    const onClickHandler = ()=> {

    }

    return <div className="OrderForm">
        <div className="OrderForm__title">
            Создание Реализации
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>
                        Название
                    </th>
                    <th>
                        Штрих код
                    </th>
                    <th>
                        Закупочная цена
                    </th>
                    <th>
                        Розничная цена
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <TextInput/>
                    </td>
                    <td>
                        <TextInput placeholder="Отсканируйте штрихкод" onChange={onChangeHandler}/>
                    </td>
                    <td>
                        <TextInput className="number" placeholder="0.00" onChange={onChangeHandler}/>
                    </td>
                    <td>
                        <TextInput className="number" placeholder="0.00" onChange={onChangeHandler}/>
                    </td>

                </tr>

            </tbody>
        </table>
        <Button onClick={onClickHandler}>Продать</Button>

    </div>
}