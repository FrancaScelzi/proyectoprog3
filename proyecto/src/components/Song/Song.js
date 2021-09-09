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
                <button onClick={()=> this.props.deleteSong(this.props.title)}> <i class="fas fa-times"></i></button>
                <h3>{this.props.title}</h3>
                <img src={this.props.image}/>
                <h4>{this.props.artist}</h4>
                {/* <p>Álbum: {this.props.album}</p> */}
                {/* <p>Duración: {this.props.duration} segundos</p> */}
                <p className= 'more' onClick= {()=> this.handleShow()}>{this.state.message}</p>
                <p className= {this.state.clase}>Álbum: {this.props.album}</p>
                <p className= {this.state.clase}>Duración: {this.props.duration} segundos</p>
            </div>
        )
    }
}
