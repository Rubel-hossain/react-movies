import React, { Component } from 'react';
import { API_URL, IMAGE_BASE_URL, POSTER_SIZE } from '../../../config';
import {Link} from "react-router-dom";
import "./FourColGrid.css";

export default class FourColGrid extends Component {
  render() {
    const {header,movies} = this.props;
    
    return (
      
      <div className="rmdb-grid">
          <h2 className="text-warning text-capitalize">{header}</h2>
          <div className="rmdb-grid-content">
            {movies.map((movie,i)=>{
              const poster_image = `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`;
               return (
                 <div key={i} className="rmdb-grid-element">
                   <div className="rmdb-movie-thumb">
                   <Link to={{pathname:`${movie.id}`, movieName:`${movie.title}`}}>
                     <img  className="img-fluid" src={poster_image} alt={movie.title}/>
                   </Link>
                   </div>
                 </div>           
               );
            })}
          </div>
      
      </div>
    )
  }
}
