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
                <input placeholder="Search"onChange={(evento)=> this.onChange(evento) } type="text"/>
                <a type= "submit" className="search-btn"> <i class="fas fa-search"></i></a>
                
            </form>
        )
    }
}