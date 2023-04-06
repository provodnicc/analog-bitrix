import React from "react";
import './index.scss'
interface ButtonProps{
    onClick: ()=>void
    children: React.ReactNode
    className?: string
}

/**
 * @param children IS HTMLNode 
 * @method onClick IS Injectable method
 */

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    className
})=>{

    return <div className={"Button "+ className}>
        <div onClick={onClick}>
            {children}
        </div>
    </div>
}