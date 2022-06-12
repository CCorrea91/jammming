import React from "react";
import './Track.css';

export class Track extends React.Component {  

  renderAction(isRemoval) { 
    return ( isRemoval ? 'Remove' :  'Add')
  }

  render() {     
    return (
      <div className="Track" >
          <div className="Track-information">
            <h3>{this.props.track.name}  </h3>
            <p>{this.props.track.artist} / {this.props.track.album} / {this.props.track.id}</p>
          </div>
          <button className="Track-action">{this.renderAction()}</button>
      </div>
    )
  }
}