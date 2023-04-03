import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    console.log("constructor from News Component");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0a32c975b1af4b4ca8bc9bfbacb4d19c"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log('parsedData: ', parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
      return (
      <div>
        <div className="container my-4">
          <h4 className="my-3">NewsMonkey - Top Headlines</h4>
          <div className="row">
              {this.state.articles.map((e)=>{
                return <div className="col-md-4" key={e.url}>
                  <NewsItem title={e.title?e.title:""} description={e.description?e.description:""} imgUrl={e.urlToImage} readUrl={e.url}/>
                </div>
              })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
