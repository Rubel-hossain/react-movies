import React, { Component } from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
         <div className="rmdb-header">
             <div className="rmdb-header-content">
               <Link to="/">
                  <img src="./images/reactMovie_logo.png" alt="rmdb logo" className="rmdb-logo"/>
                </Link>
                <img src="./images/tmdb_logo.png" alt="rmdb logo" className="rmdb-tmbd-logo"/>
             </div>
         </div>
      </div>
    )
  }
}
