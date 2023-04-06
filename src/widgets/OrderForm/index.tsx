import React, { useState } from "react";
import { Button } from "../../share/ui/Button";

import { IRowInfo, OrderFromRow } from "./OrderFormRow";
import {API} from '../../share/api/axios.config'


import './index.scss'
interface OrderFormProps{
    title?: string
    onClick: (tableData: any)=>void
}


export const OrderForm: React.FC<OrderFormProps> = ({
    title,
    onClick
}) => {
    let [countRows, setCountRows] = useState(0)
    
    let [rowsDataComponent, setRowsDataComponent ] = useState<Array<any>>([
        <OrderFromRow key={0} index={0} onChangeRow={(value)=>onChangeRowHandler(value, 0)}/>,
    ])
    const [tableData, setTableData] = useState<Array<IRowInfo>>([{id: 0}])

    const createNewRow = ( index: number) => {
        rowsDataComponent.push(<OrderFromRow key={countRows} index={index} onChangeRow={(value)=>onChangeRowHandler(value, index)}/>)
        console.log(countRows)
        setRowsDataComponent(rowsDataComponent)
    }

    const onClickHandler = ()=> {
        console.log(tableData)
        onClick(tableData)
    }

    const checkClearRows = (tableData: Array<IRowInfo>)=>{
        const row = tableData.filter((el)=>{
            console.log(el)
            return !el.code && !el.count && !el.name && !el.price && !el.stock_price
        })[0]
        console.log(row)
        if(row){
            return true
        }
        return false

    }
    
    const onChangeRowHandler = (rowInfo: IRowInfo, index: number) => {
        tableData.splice(index, 1, rowInfo)
        setTableData(tableData)

        console.log(tableData)
        if(rowInfo.code?.length === 1 && !checkClearRows(tableData) ){

            console.log('pilic', rowInfo.code)
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
                })}
            </tbody>
        </table>
        <Button onClick={onClickHandler}>Продать</Button>

    </div>
}