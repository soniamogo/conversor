import React from "react";
import'./style.css';

const Visor = ({result}) => {

    return (
        <div id="visorContainer">
            <div id="pesetas">Pesetas</div>
            <div id="visor">{result}</div>
        </div>
    )

}

export default Visor;