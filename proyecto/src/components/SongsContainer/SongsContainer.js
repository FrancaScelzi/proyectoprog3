import React, { Component } from 'react';
import Song from '../Song/Song';
import './SongsContainer.css'



export default class SongsContainer extends Component{
    constructor(props){
        super(props);
        this.state= {
            songs: [],
            // clase: 'hide',
            // message: 'Ver más'
        }
    }
    
    // LLamado a la API
    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks')
        .then (response => response.json())
        .then (data => {
            // console.log(data.data);
            this.setState({
                songs: data.data
            })
        })
        .catch(error => console.log(error))
    }

    // Función para remover una canción

    deleteSong(title){
        console.log(title);

        const filteredSongs = this.state.songs.filter(song => song.title !== title)

        this.setState({
            songs: filteredSongs
        })
    }
    
    render(){
        console.log(this.state.songs);
        return(
            <div className= 'songsContainer' >
                {this.state.songs == [] ?
                <h4>Cargando canciones...</h4> :
                
                this.state.songs.map((song, index) => {
                     return <Song key = {index}
                    id = {song.id}
                    title = {song.title}
                    artist = {song.artist.name}
                    image = {song.album.cover}
                    album = {song.album.title}
                    duration = {song.duration}
                    deleteSong= {(title) => this.deleteSong(title)}
                    
                    >
                    </Song>

                 })}
            </div>
        )
    }
}

