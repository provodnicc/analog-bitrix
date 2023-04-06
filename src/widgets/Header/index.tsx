import React from "react";
import { Link } from "react-router-dom";
import { Routes, RoutesName } from "../../pages/routes";

import './index.scss'

export const Header = ()=>{
    return <div className="Header">
        {Object.values(Routes).map((route)=>{
            
            return <Link className="Header__link" to={route}>{RoutesName[route]}</Link>
        })}
        
    </div>
}