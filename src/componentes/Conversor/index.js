import React, { Component } from "react"
import './style.css'
import Input from "../Input"
import Visor from "../Visor"


export default class Conversor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            result:'',
            origen: true
        }
    }

    conversion = (newValue) =>{
        if(this.state.origen){
            var result = newValue * 166.386;
        this.setstate({value:newValue, result:result});
        }else{
            var result = newValue / 166.386;
        this.setstate({value:newValue, result:result});
        }
        
    }

    
    render() {
        return (
            <div id="conversor">
                <div id="titulo"><h1>Conversor tó guapo</h1></div>
                <div id="datos">
                    <Input value={this.state.value} conversion={this.conversion}/>
                    <div id="separador" />
                    <Visor result={this.state.result} />
                </div>

            </div>
        )
    }
}
