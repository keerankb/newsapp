import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country : 'in',
    category: 'general',
    pageSize: 6
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }

  constructor(props) {
    super(props);
    console.log("constructor from News Component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResult : 0
    }
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    console.log(url);
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log('parsedData: ', parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevPage = async() => {
  //   await this.setState({
  //     page: this.state.page - 1
  //   })
  //   this.updateNews();
  // }

  // handleNextPage = async() => {
  //   await this.setState({
  //     page: this.state.page + 1
  //   })
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a32c975b1af4b4ca8bc9bfbacb4d19c&page=${this.state.page}&pageSize=${this.props.pageSize}`
    console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log('parsedData: ', parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
      loading: false,
    });
    console.log(this.state.totalResult);
    console.log(this.state.articles.length);
  }

  render() {
      return (
        
      <div>
        <div className="container my-4">
          <h2 className="my-5 pt-5 text-center">NewsMonkey - Top {this.capitalize(this.props.category)} Headlines</h2>
          {/* {this.state.loading && <Spinner/>} */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResult}
            loader={<Spinner/>}
          >
            <div className="row">
                {this.state.articles.map((e, index)=>{
                  return <div className="col-md-4" key={index}>
                    <NewsItem title={e.title?e.title:""} description={e.description?e.description:""} imgUrl={e.urlToImage} readUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} newsBadgeColor={this.props.badgeColor}/>
                  </div>
                })}
            </div>
          </InfiniteScroll>
        {/* <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevPage} className="btn btn-dark"> &larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult/this.props.pageSize)} onClick={this.handleNextPage} className="btn btn-dark">Next &rarr; </button>
        </div> */}
        </div>
      </div>
    )
  }
}

export default News
