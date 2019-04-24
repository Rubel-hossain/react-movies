import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    const {title} = this.props;
    return (
      <div className="rmdb-navigation">
        <div className="rmdb-navigation-content">
          <Link to="/">
            <p> Home</p>
          </Link>
          {title ? <p>/</p> : ""}
          
          <p>{title}</p>
        </div>
      </div>
    )
  }
}
