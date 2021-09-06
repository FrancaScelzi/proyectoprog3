import React, { Component } from 'react';
// import { render } from 'react-dom';

export default class Song extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    render(){
        return(
            <div>
               <h3>{this.props.title}</h3>
               <img src={this.props.image}/>
               <h4>Artista: {this.props.artist}</h4>
               <p>Álbum: {this.props.album}</p>
               <p>Duración: {this.props.duration} segundos</p>
            </div>
        )
    }
}
