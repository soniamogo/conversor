import React, { Component } from "react"
import './style.css'
import Input from "../Input"
import Visor from "../Visor"
import intercambiar from "../../img/intercambiar.png"

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
        if(!isNaN(Number(newValue))){
        if(this.state.origen){
            var result = newValue * 166.386;
        this.setState({value:newValue, result:result.toFixed(2)});
        }else{
            var result = newValue / 166.386;
        this.setState({value:newValue, result:result.toFixed(2)});
        }}
    }

    handleClick = () =>{
        this.setState({result:'', origen:!this.state.origen})
      }

    
    render() {
        return (
            <div id="conversor">
                <div id="titulo"><h1>Conversor tó guapo</h1></div>
                <div id="datos">
                    <Input value={this.state.value} conversion={this.conversion} origen={this.state.origen}/>
                    <button onClick={this.handleClick}>
                    <img src={intercambiar} id="icono"/>
                    <div id="textoButton">{this.state.origen ? 'Pesetas a Euros' : 'Euros a Pesetas'}</div>
                    </button>
                    <Visor result={this.state.result} origen={this.state.origen}/>
                </div>

            </div>
        )
    }
}
