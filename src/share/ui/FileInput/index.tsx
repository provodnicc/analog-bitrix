import React, { useState } from "react";
import './index.scss'


interface FileInputProps{
    children?: React.ReactNode
    onChange: (e: any)=>void
}
/**
 * @param children IS Injectable HTMLNode 
 * @method onChange IS Injectable method
 */
export const FileInput : React.FC<FileInputProps> =({onChange, children})=>{
    const [fileName, setFileName] = useState()
    
    const onChangeHandler = (e: any)=>{
        onChange(e)
        setFileName(e.target.files[0].name)
        console.log(e.target.files[0].name)
    }

    return <div className="MyInput">
        <div className="MyInputLabel">
            <label htmlFor="FileInput" >{children ||  'Выберите файл'} </label>
        </div>

        <input id="FileInput" type="file" onChange={onChangeHandler}/>
        <span className="FileName">
            { fileName }
        </span>
    </div>
}