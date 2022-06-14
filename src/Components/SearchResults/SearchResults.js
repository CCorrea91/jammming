import React from "react"
import { TrackList } from '../TrackList/TrackList';
import './SearchResults.css'

export class SearchResults extends React.Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList 
          isRemoval={false}
          onRemove={this.props.onRemove} 
          onAdd={this.props.onAdd} 
          tracks={this.props.searchResults}/>
      </div>
    )
  }
}