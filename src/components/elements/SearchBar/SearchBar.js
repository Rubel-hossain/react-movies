import React, { Component } from 'react';
import Fontawesome from "react-fontawesome";
import "./SearchBar.css";
export default class SearchBar extends Component {

  state = {
    value: ""
  }

  timeout = null;

  doSearch = (e)=>{
    this.setState({
      value: e.target.value
    });

    clearTimeout(this.timeout);

    this.timeout = setTimeout(()=>{

      this.props.searchItems(this.state.value);
      
    },500);
    
    
  }

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <Fontawesome className="rmdb-fa-search" name="search" size="2x"/>
          <input className="rmdb-searchbar-input" type="text" placeholder="search here" 
            value={this.state.value}
            onChange={this.doSearch}
          />
        </div>
      </div>
    )
  }
}
