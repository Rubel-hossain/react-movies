import React, { Component } from 'react';
import {API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE} from "../../config";
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Spinner from "../elements/Spinner/Spinner";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import "./Home.css";

export default class Home extends Component {

    state = {
        movies: [],
        heroImage: "",
        loading: false,
        currentPage: 0,
        total_pages: "",
        searchTerm: "",
        title: "",
        overview: ""
    }


    async getMovies(){

        let endPoint = `${API_URL}movie/popular?api_key=${API_KEY}`;
        let movieResponse = await fetch(endPoint);
        let movieJson = await movieResponse.json();
        let title = movieJson.results[0].title;
        let overview = movieJson.results[0].overview;
        let page = movieJson.page;
        let total_pages =  movieJson.total_pages;

     await  this.setState({
           movies: [...movieJson.results],
           heroImage: `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movieJson.results[0].backdrop_path}`,
           loading: false,
           currentPage: page,
           total_pages: total_pages,
           title: title,
           overview: overview,
           searchItems: ""
       });
    }

    componentDidMount(){

       this.getMovies();

    }

    fetchItems = (endPoint)=>{
      fetch(endPoint)
      .then(response=> response.json())
      .then(result=>{
         
          let movies = result.results;
          let heroImage = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${result.results[0].backdrop_path}`;
          let currentPage = movies.page;
          let total_pages = movies.total_pages;
          let title = movies[0].title;
          let overview = movies[0].overview;
         
          this.setState({
            movies,
            heroImage,
            loading: true,
            total_pages,
            title,
            overview
          });
          
      });
    }

    loadMoreItems = ()=>{

      let endPoint = "";
      this.setState({
        loading: true
      });

      if(this.state.searchTerm === ""){
         endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${this.state.currentPage + 1}`;
      }else {
         endPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
      }

      this.fetchItems(endPoint);

      
    }

     timeout = null;

    searchItems  = (searchTerm)=>{
     let  endPoint = "";
      this.setState({
        movies: [],
        loading: true,
        searchTerm: searchTerm
      });
        
        
         if(searchTerm ===""){
             
          endPoint = `${API_URL}movie/popular?api_key=${API_KEY}`;
          
         }else {

          endPoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}`;
         }
        
         this.fetchItems(endPoint);
        
    }

  
  render() {
    return (
      <div className="rmdb-home">
         <HeroImage 
           posterImage={this.state.heroImage}
           title = {this.state.title}
           overview = {this.state.overview}
         />
         <SearchBar searchItems={this.searchItems}/>
         <div className="rmdb-home-grid">
           <FourColGrid 
             header = {this.state.searchTerm ? "search Results" : "Popular Videos"}
             movies={this.state.movies}
           />
         </div>
          
          {(this.state.currentPage <= this.state.total_pages) ? <LoadMoreBtn onClick={this.loadMoreItems}/> : null}
      </div>
    )
  }
}
