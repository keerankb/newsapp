import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, readUrl, author, date, source, newsBadgeColor} = this.props;
    return (
      <div className="mb-3 pt-3">
        <div className="card">
          <img src={!imgUrl?"https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg":imgUrl} className="card-img-top" alt="..." style={{maxWidth: "100%", maxHeight: "190px", objectFit: "cover"}} />
          <div className="card-body">
            <span className={`badge bg-${newsBadgeColor}`}>{source}</span>
            <h5 className="card-title mt-2">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author}, on {new Date(date).toGMTString()}</small></p>
            <a href={readUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
