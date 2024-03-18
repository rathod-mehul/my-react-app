import React from "react";
import './style.css';
import Style from './style.module.css';

function StyleComponent(){
    
    return(
        <div>
        <h1 style={{color:"red", backgroundColor:"black"} }>red div</h1>
        <h2 className="classdiv">Class div style</h2>
        <h1 className={Style.name}>style with style module component</h1>
        </div>
    )
}

export default StyleComponent;