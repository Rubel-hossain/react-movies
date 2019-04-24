import React, { Component } from 'react';
import "./LoadMoreBtn.css";

export default class LoadMoreBtn extends Component {
  render() {
    return (
      <div className="rmdb-loadmorebtn" onClick={this.props.onClick}>
        <p>Load More Btn</p>
      </div>
    )
  }
}
