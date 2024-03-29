import React, { Component } from "react";
import './news.css';

export class newsItem extends Component {
  render() {
    let {title, description, imgUrl} = this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
          <div className="img-container">
          <img src={imgUrl} className="card-img-top img-responsive" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default newsItem;
