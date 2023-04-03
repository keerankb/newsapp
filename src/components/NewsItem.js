import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, readUrl} = this.props;
    return (
      <div className="mb-3 pt-3">
        <div className="card">
          <img src={!imgUrl?"https://static.toiimg.com/photo/msid-98618608/98618608.jpg?pl=37494":imgUrl} className="card-img-top" alt="..." style={{maxWidth: "100%", maxHeight: "190px", objectFit: "cover"}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={readUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
