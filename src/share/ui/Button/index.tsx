import React from "react";
import './index.scss'
interface ButtonProps{
    onClick: ()=>void
    children: React.ReactNode
}

/**
 * @param children IS HTMLNode 
 * @method onClick IS Injectable method
 */

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children
})=>{

    return <div className="Button">
        <div onClick={onClick}>
            {children}
        </div>
    </div>
}