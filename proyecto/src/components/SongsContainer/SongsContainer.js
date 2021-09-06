import React, { Component } from 'react';
import Song from '../Song/Song';


export default class SongsContainer extends Component{
    constructor(props){
        super(props);
        this.state= {
            songs: []
        }
    }
    
    // LLamado a la API
    componentDidMount(){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
        .then (response => response.json())
        .then (data => {
            // console.log(data.data);
            this.setState({
                songs: data.data
            })
        })
        .catch(error => console.log(error))
    }
    
    render(){
        console.log(this.state.songs);
        return(
            <div>
                {this.state.songs.map((song, index) => {
                     return <Song key = {index}
                    id = {song.id}
                    title = {song.title}
                    artist = {song.artist.name}
                    image = {song.album.cover}
                    album = {song.album.title}
                    duration = {song.duration}
                    >
                    </Song>

                 })}
            </div>
        )
    }
}

