import React, { useEffect, useState } from "react"
import { TextInput } from "../../../share/ui/TextInput"

interface OrderFromRowProps{
    index: number
    onChangeRow: (e: any) => void
}

export interface IRowInfo{
    id: number
    code?: string
    name?: string
    sock_price?: number
    price?: number
    count?: number
}


export const OrderFromRow: React.FC<OrderFromRowProps> = ({
    index,
    onChangeRow
}) => {
    const [rowInfo, setRowInfo] = useState<IRowInfo>({id: index})
    useEffect(()=>{
        onChangeRow(rowInfo)
    },[rowInfo])
    const onChangeCodeHandler = (e: any) => {
        const code = {
            code: e.target.value
        }
        setRowInfo({...rowInfo, ...code})
    }

    const onChangeNameHandler = (e: any) => {
        const name = {
            name: e.target.value
        }
        setRowInfo({...rowInfo, ...name})
    }

    const onChangeStockPriceHandler = (e: any) => {
        const stock_price = {
            stock_price: e.target.value
        }
        setRowInfo({...rowInfo, ...stock_price})
    }

    const onChangePriceHandler = (e: any) => {
        const price = {
            price: e.target.value
        }
        setRowInfo({...rowInfo, ...price})
    }

    const onChangeCountHandler = (e: any) => {
        const count = {
            count: e.target.value
        }
        setRowInfo({...rowInfo, ...count})
    }

    return <tr>
    <td>
        <TextInput onChange={onChangeNameHandler}/>
    </td>
    <td>
        <TextInput placeholder="Отсканируйте штрихкод" onChange={onChangeCodeHandler}/>
    </td>
    <td>
        <TextInput className="number" placeholder="0.00" onChange={onChangeStockPriceHandler}/>
    </td>
    <td>
        <TextInput className="number" placeholder="0.00" onChange={onChangePriceHandler}/>
    </td>
    <td>
        <TextInput className="number" placeholder="0" onChange={onChangeCountHandler}/>
    </td>
</tr>
}