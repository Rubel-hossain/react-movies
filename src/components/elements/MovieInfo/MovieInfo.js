import React, { Component } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from "../../../config";
import FontAwesome from "react-fontawesome";
import "./MovieInfo.css";

export default class MovieInfo extends Component {
  render() {
    const {backdrop_image, poster_image, title, overview, tagline, vote_average, directors} = this.props;
    return (
      <div className="rmdb-movieinfo"
        style={{
          backgroundImage:`url(${backdrop_image})`,
          backgroundColor: "#000"
        }}
      >
        <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <img src={poster_image}/>
        </div>
        <div className="rmdb-movieinfo-text">
          <h1>{title}</h1>
          <h2>{tagline}</h2>
          <p>{overview}</p>
          <h3>IMDB RATTING IS {vote_average*10}%</h3>
          <meter min="0" max="100" low="40" height="70" value={vote_average*10} optimum="100"/>
          <h3>{directors.length >1 ? "Directors" : "Darector"}</h3>
          {directors.map((director,i)=> {
              
               return <p key={i} className="rmdb-director">{director.name}</p>
          })}
        </div>
        <FontAwesome className="fa-film" name="film" size="5x"/>
        </div>
        
      </div>
    )
  }
}
