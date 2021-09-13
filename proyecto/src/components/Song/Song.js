import React, { Component } from 'react';
import './song.css'
// import { render } from 'react-dom';

export default class Song extends Component{
    constructor(props){
        super(props);
        this.state = {
            clase: 'hide',
            message: 'Ver más'
        }
    }
    
    handleShow(){
        if (this.state.clase === 'hide'){
            this.setState({
                clase: 'show',
                message: 'Ver menos'
            })
        } else {
            this.setState({
                clase: 'hide',
                message: 'Ver más'
            })
        }
    }

    render(){
        return(
            <div className='song' >
                <button className= "deleteButton" onClick={()=> this.props.deleteSong(this.props.title)}> <i class="fas fa-times"></i></button>
                <img src={this.props.image}/>
                <h4><b>{this.props.title}</b></h4>        
                <p className= 'more' onClick= {()=> this.handleShow()}>{this.state.message}</p>
                <p className= {this.state.clase}><b> Artista: </b> {this.props.artist}</p>
                <p className= {this.state.clase}> <b> Álbum:</b> {this.props.album} </p>
                <p className= {this.state.clase}><b> Duración: </b> {this.props.duration} segundos</p>
            </div>
        )
    }
}
