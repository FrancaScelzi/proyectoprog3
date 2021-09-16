import React, { Component } from "react";
import './footer.css'

export default class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className= 'footer'>
                <p className='info'>Florencia Villaverde | Franca Scelzi | Valentina Iglesias Vinyolas</p>
                <p className= 'info'>Copyright Kessey 2021. Todos los derechos reservados ©</p>
            </div>
        )
    }
}