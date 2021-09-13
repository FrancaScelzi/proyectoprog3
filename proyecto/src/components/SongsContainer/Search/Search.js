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
            <form className="searchContainer" onSubmit={(evento)=> this.prevenirSubmit(evento)}>
                <input onChange={(evento)=> this.onChange(evento) } type="text"/>
                <input type= "submit"/>
            </form>
        )
    }
}