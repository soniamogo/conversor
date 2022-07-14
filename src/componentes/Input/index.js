import React from "react";
import'./style.css';

const Input = ({conversion}) => {
    const handleChange = (event) => {
        conversion(event.target.value);
    }
    
    

    return (
        <div id="inputContainer">
            <div id="euros">Euros</div>
            <input type="text" id="input"  onChange={handleChange}></input>
        </div>
    )

}

export default Input;