import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import React from 'react';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      searchResults: [
        {
          name: 'name1', 
          artist: 'artist1', 
          album: 'album1', 
          id: 1
        },
        {
          name: 'name2', 
          artist: 'artist2', 
          album: 'album2', 
          id: 2
        }
      ],
      playlistName: 'playlist name',
      playlistTracks: [
        {
          name: 'name3', 
          artist: 'artist3', 
          album: 'album3', 
          id: 3
        }
      ]
    };
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
  };

  addTrack(track) {
    let tracks = this.state.playlistTracks
    if (tracks.find(savedTracks => savedTracks.id === track.id)) {
      return;
    } 

    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              {/* Add a SearchBar component */}
              {<SearchBar />}
              <div className="App-playlist">
                {/* Add a SearchResults component */}
                {<SearchResults 
                  searchResults={this.state.searchResults} 
                  onAdd={this.addTrack}
                  />}
                {/* Add a Playlist component */}
                {<Playlist 
                  playlistName={this.state.playlistName} 
                  playlistTracks={this.state.playlistTracks}
                  onRemove={this.removeTrack}
                  onNameChange={this.updatePlaylistName}
                  onSave={this.savePlaylist}
                  />}
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

