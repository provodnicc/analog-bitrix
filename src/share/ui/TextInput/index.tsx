import React from "react";
import './index.scss'

interface TextInputProps{
    className?: string
    onChange?: (event: any)=>void
    placeholder?: string
}


export const TextInput: React.FC<TextInputProps> = ({
    className,
    onChange,
    placeholder
})=>{

    return <div className="Box">
        
        <input className={'TextInput '+ className} placeholder={placeholder} onChange={onChange} type="text"/>
    </div>
}