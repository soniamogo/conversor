import React from "react";
import'./style.css';

const Visor = ({origen, result}) => {

    var titulo = origen ? "Pesetas" : "Euros"

    return (
        <div id="visorContainer">
            <div id="pesetas">{titulo}</div>
            <div id="visor">{result}</div>
        </div>
    )

}

export default Visor;