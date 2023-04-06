import React, { useEffect, useState } from "react"
import { API } from "../../../share/api/axios.config"
import { Button } from "../../../share/ui/Button"
import { TextInput } from "../../../share/ui/TextInput"
import './index.scss'
interface OrderFromRowProps{
    index: number
    onChangeRow: (e: any) => void
}

export interface IRowInfo{
    id: number
    code?: string
    name?: string
    stock_price?: number
    price?: number
    count?: number
}


export const OrderFromRow: React.FC<OrderFromRowProps> = ({
    index,
    onChangeRow
}) => {
    const [rowInfo, setRowInfo] = useState<IRowInfo>({id: index})
    const [showCreateBtn, setShowCreateBtn] = useState(false)
    const [newProductState, setNewProductState] = useState(false)
    useEffect(()=>{
        onChangeRow(rowInfo)
    },[rowInfo])
    const onChangeCodeHandler = async (e: any) => {
        const code = {
            code: e.target.value
        }
        setRowInfo({...rowInfo, ...code})
        const product = await findProductByCode(code.code)
        console.log(product)
        if(!product){
            setShowCreateBtn(true)
        }else{
            setShowCreateBtn(false)
            setRowInfo(product)
        }
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

    const findProductByCode = async (code: number)=>{
        try{
            const res = await API.get('/product?code='+code)
            if(res.status==400){
                return null
            }
            return res.data
        }catch(e){
            return null
        }
        
    }

    const createProduct = async () => {
        if(rowInfo.name && rowInfo.code && rowInfo.price && rowInfo.stock_price){
            console.log(rowInfo)
            const res = await API.post('/product', rowInfo)
            if(!res.data){
                alert('что-то не так' )
            }
            setShowCreateBtn(false)
            setNewProductState(true)
            return res.data
        }
        return null
    }


    return <tr>
        <td>
            <TextInput value={rowInfo.name} className="table__productName" onChange={onChangeNameHandler}/>
        </td>
        <td>
            <TextInput value={rowInfo.code} className="table__productCode" placeholder="Отсканируйте штрихкод" onChange={onChangeCodeHandler}/>
        </td>
        <td>
            <TextInput value={String(rowInfo.stock_price)} className="number" type="number" placeholder="0.00" onChange={onChangeStockPriceHandler}/>
        </td>
        <td>
            <TextInput value={String(rowInfo.price)} className="number" type="number" placeholder="0.00" onChange={onChangePriceHandler}/>
        </td>
        <td>
            <TextInput value={String(rowInfo.count)} className="number" type="number" placeholder="0" onChange={onChangeCountHandler}/>
        </td>
        <td>{ 
            showCreateBtn ?
                <Button onClick={createProduct}>создать</Button>: 
                newProductState? 
                    <span>Новое!</span>:
                    null
        }</td>
    </tr>
}