import React, { Component } from 'react';
import "./HeroImage.css";

export default class HeroImage extends Component {

    constructor(props){
        super(props);
    }
  render() {
      const {posterImage, title, overview} = this.props;
    return (
      <div className="rmdb-heroimage"
         style={{
           background:`linear-gradient(to bottom, rgba(0,0,0,0) 39%,rgba(0,0,0,0) 41%,rgba(0,0,0,.65) 100%),
            url(${posterImage}), #1c1c1c`
         }}>
        <div className="rmdb-heroimage-content ">
            <div className="rmdb-heroimage-text">
              <h1>{title}</h1>
              <p>{overview}</p>
            </div>
        </div>
      </div>
    )
  }
}
