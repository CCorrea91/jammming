import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import React from 'react';
import Spotify from '../util/Spotify';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: [],
    };
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
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
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => 
      {
        this.setState({
            playlistName: 'New Playlist',
            playlistTracks: [],
        })
      }
    )
  }

  search(term) {
    Spotify.search(term).then(term => {
      this.setState({searchResults: term})
    })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              {/* Add a SearchBar component */}
              {<SearchBar 
                onSearch={this.search}
              />}
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

