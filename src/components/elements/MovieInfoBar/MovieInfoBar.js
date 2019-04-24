import React, { Component } from 'react';
import {calcTime, convertMoney} from "../../../helpers";
import "./MovieInfoBar.css";
import Fontawesome from "react-fontawesome";

export default class MovieInfoBar extends Component {
  render() {
    return (
      <div className="rmdb-movieinfobar">
        <div className="rmdb-movieinfobar-content">
          <div className="rmdb-movieinfobar-content-col">
            <Fontawesome className="fa-time" name="clock-o" size="2x"/>
            <div className="rmdb-movieinfobar-info">Running Time : </div>
          </div>
          <div className="rmdb-movieinfobar-content-col">
             <Fontawesome className="fa-budget" name="money" size="2x"/>
             <span className="rmdb-movieinfobar-info">Budget : </span>
          </div>
          <div className="rmdb-movieinfobar-content-col">
          
             <Fontawesome className="fa-revenue" name="ticket" size="2x"/>
             <span className="rmdb-movieinfobar-info"> Revenue : hh</span>
          </div>
        </div>
      </div>
    )
  }
}
