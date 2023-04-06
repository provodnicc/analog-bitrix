import React from "react";

interface DropDownProps{
    onDropDownClickHandler: (e: any) =>void
}


export const DropDown: React.FC<DropDownProps> = ({
    onDropDownClickHandler
}) => {


    return <div className="DropDown">
    <div onClick={(e)=>onDropDownClickHandler(e)}>kakak</div>
    <div onClick={(e)=>onDropDownClickHandler(e)}>kakak</div>
    <div onClick={(e)=>onDropDownClickHandler(e)}>kakak</div>
    <div onClick={(e)=>onDropDownClickHandler(e)}>kakak</div>
</div>
}