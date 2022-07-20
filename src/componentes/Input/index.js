import React from "react";
import'./style.css';

const Input = ({value, origen, conversion}) => {
    const handleChange = (event) => {
        conversion(event.target.value);
    }
    
    var titulo = origen ? "Euros" : "Pesetas"

    return (
        <div id="inputContainer">
            <div id="euros">{titulo}</div>
            <input type="text" id="input"  onChange={handleChange} value={value}></input>
        </div>
    )

}

export default Input;