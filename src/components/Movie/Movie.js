import React, { Component } from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from "../../config";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Actor from "../elements/Actor/Actor";
import "./Movie.css";

export default class Movie extends Component {

 state = {
   movies: null,
   actors: null,
   directors: [],
   loading: false,
   title: "",
   backdrop_image: "",
   poster_image: "",
   tagline: "",
   vote_average: ""
 }

 componentDidMount(){

    const movieId = this.props.match.params.movieId;
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    const endpoint_2 = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    
    this.fetchItems(endpoint);
    this.fetchItems_2(endpoint_2);
 }

 fetchItems = (endpoint)=>{
     fetch(endpoint)
     .then(response=>response.json())
     .then(results=>{
        const title = results.title;
        const backdrop_path = results.backdrop_path;
        const poster_path = results.poster_path;
        const overview = results.overview;
        const backdrop_image = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`;
        const poster_image = `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`;
        const tagline = results.tagline;
        const vote_average = results.vote_average;
      
        this.setState({
           movies: "",
           title,
           backdrop_image,
           poster_image,
           overview,
           tagline,
           vote_average
        });

     });
 }
 fetchItems_2 = (endpoint_2)=>{
     fetch(endpoint_2)
     .then(response=>response.json())
     .then((results)=>{

      console.log(results);
      
          const directors = results.crew.filter(item=> item.job =="Director");
          const actors = results.cast;
        
          this.setState({
            directors,
            actors
          });
     });
 }
  render() {
    return (
      <div className="rmdb-movie">
        <Navigation title={this.state.title}/>
        <MovieInfo 
          backdrop_image={this.state.backdrop_image} 
          poster_image={this.state.poster_image} 
          title={this.state.title}
          overview={this.state.overview}
          tagline={this.state.tagline}
          vote_average={this.state.vote_average}
          directors={this.state.directors}
        />
        <MovieInfoBar/>
        {this.state.actors ? 

<div className="rmdb-movie">
  <h2 className="text-warning text-capitalize">Movies Actorss</h2>
  <div className="rmdb-movie-grid-wrapper">
     
       {this.state.actors.map(actor=>{
          const name = actor.name;
          const character = actor.character;
          const profile_path = actor.profile_path;
          const actor_image = `${IMAGE_BASE_URL}${POSTER_SIZE}/${profile_path}`;
         return(
          <div className="rmdb-actor-element  my-2">
            <div className="rmdb-actor-thumb">
              <h2>Name : {name}</h2>
              <h4>Character : {character}</h4>
              <img className="img-fluid" src={actor_image} alt={name}/>
            </div>
          </div>
         );

       })}
     
  </div>
</div>
        : null }
      </div>
      
    )
  }
}
