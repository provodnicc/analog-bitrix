import React from "react";
import './index.scss'

interface TextInputProps{
    className?: string
    type?: string
    onChange?: (event: any)=>void
    placeholder?: string
    value?: string
    children?: React.ReactNode
}


export const TextInput: React.FC<TextInputProps> = ({
    className,
    type,
    onChange,
    placeholder,
    value,
    children
})=>{

    return <div className="Box">
        <input type={type} value={value} className={'TextInput '+ className} placeholder={placeholder} onChange={onChange}/>
        {children}
    </div>
}