import React, { Component } from "react";
import './Search.css'

export default class Search extends Component {
    constructor (){
        super();
    }

    prevenirSubmit(evento){
        evento.preventDefault();
    }

    onChange(evento){
        this.props.searchSongs(evento.target.value )   
    }

    render(){
        return(
            <form onSubmit={(evento)=> this.prevenirSubmit(evento)}>
                <input className="inputSearch" onChange={(evento)=> this.onChange(evento) } placeholder= "Buscar canciones ..." type="text"/>
                {/* <a type= "submit" className="lupita">
                    <i class="fas fa-search" ></i>
                </a> */}
            </form>
        )
    }
}