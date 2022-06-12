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
      playlistName: [{name: 'playlist name'}],
      playlistTracks: [{name: 'playlist tracks'}]
    };
  };

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
                {<SearchResults searchResults={this.state.searchResults}/>}
                {/* Add a Playlist component */}
                {<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>}
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

