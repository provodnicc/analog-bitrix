import React, { useState } from "react";
import { Button } from "../../share/ui/Button";
import { TextInput } from "../../share/ui/TextInput";

import './index.scss'
import { IRowInfo, OrderFromRow } from "./OrderFormRow";

interface OrderFormProps{
    title?: string
}


export const OrderForm: React.FC<OrderFormProps> = ({
    title
}) => {
    let [countRows, setCountRows] = useState(0)
    let [editedIndex, setEditedIndex] = useState(0)
    
    let [rowsDataComponent, setRowsDataComponent ] = useState<Array<any>>([
        <OrderFromRow key={countRows} index={countRows} onChangeRow={(value)=>onChangeRowHandler(value, countRows)}/>
    ])
    const [tableData, setTableData] = useState<Array<IRowInfo>>(new Array<IRowInfo>())

    const onChangeHandler = (e: any) => {

    }
    const createNewRow = ( index: number) => {
        rowsDataComponent.push(<OrderFromRow key={countRows} index={index} onChangeRow={(value)=>onChangeRowHandler(value, index)}/>)
        console.log(countRows)
        setRowsDataComponent(rowsDataComponent)
    }

    const onClickHandler = ()=> {
        console.log(tableData)
    }
    
    const onChangeRowHandler = (rowInfo: IRowInfo, index: number) => {
        tableData.forEach((el, id)=>{
            console.log(el)
            if(el.id===index && index===id){
                el=rowInfo
            }
        })
        setTableData(tableData)
        console.log(tableData)
        if(rowInfo?.code && rowInfo.id==index){

            console.log(rowInfo)
            setCountRows(++countRows)
            createNewRow(countRows)
        }

    }
    
    
    return <div className="OrderForm">
        <div className="OrderForm__title">
            {title || 'Создание Реализации'}
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
                    <th>
                        Количество
                    </th>
                </tr>
            </thead>
            <tbody>
                { rowsDataComponent.map((el)=>{
                    return el
                }) }
            </tbody>
        </table>
        <Button onClick={onClickHandler}>Продать</Button>

    </div>
}