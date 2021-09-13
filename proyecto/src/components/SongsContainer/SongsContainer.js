import React, { Component } from 'react';
import Song from '../Song/Song';
import './SongsContainer.css'
import Search from './Search/Search';



export default class SongsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            songs: [],
            filteredSongs: [],
            index: 10
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

    // Función para agregar canciones

    addSongs(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&index=${this.state.index}&limit=10`)
        .then (response => response.json())
        .then (data => {
            let arrayPrevio = this.state.songs;
            let arrayActualizado = arrayPrevio.concat(data.data);
            let indexActualizado = this.state.index + 10;
            console.log(indexActualizado);

            this.setState({
                songs: arrayActualizado,
                filteredSongs: arrayActualizado,
                index: indexActualizado
            })

    })
}

    // Funcion para filtrar las canciones

    searchSongs(artist) {
        const filteredSongs = this.state.songs.filter(
            song => song.artist.name.toUpperCase().includes(artist.toUpperCase())
        );

        if (artist === ""){
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
                    <button onClick={()=> this.addSongs()}>Agregar canciones</button>
            
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
