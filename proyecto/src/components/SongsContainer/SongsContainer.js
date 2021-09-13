import React, { Component } from 'react';
import Song from '../Song/Song';
import './SongsContainer.css'
import Search from './Search/Search';



export default class SongsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            filteredSongs: []
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
                songs: data.data,
                filteredSongs: data.data
            })
        })
        .catch(error => console.log(error))
    }

    // Función para remover una canción

    deleteSong(title){
        const filteredSongs = this.state.songs.filter(song => song.title !== title)

        this.setState({
            songs: filteredSongs,
            filteredSongs: filteredSongs // Se actualiza filteredSongs porque son las canciones a mostrar
        })
    }

    // Funcion para filtrar las canciones

    searchSongs(title) {
        const filteredSongs = this.state.songs.filter(
            song => song.title.toUpperCase().includes(title.toUpperCase())
        );

        if (title === ""){
            this.setState({
                filteredSongs: this.state.songs
            })
        } else {
            this.setState({
                filteredSongs: filteredSongs
            })
        } 
    }
    
    render(){
        console.log(this.state.songs);
        return(
            <div>
                <div>
                    <Search searchSongs = {(title) => this.searchSongs(title)}/>
                </div>
            
                <div className= 'songsContainer' >
            
                    {this.state.songs.length == 0 ?
                    <h4>Cargando canciones...</h4> :
                    
                        <>

                            {
                            this.state.filteredSongs.length == 0 ?
                            <h4>No hay datos que coincidan con su búsqueda</h4> : 
                            this.state.filteredSongs.map((song, index) => {
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
                    
                        </>   }
                </div>

            </div>           
        )
    }
}
