import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
        <div>
          <Router>
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} key="general" country="in" pageSize={this.pageSize} category="general" badgeColor="primary" />} />
            <Route exact path='/sports' element={<News apiKey={this.apiKey} key="sports" country="in" pageSize={this.pageSize} category="sports" badgeColor="danger"/>} />
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} key="entertainment" country="in" pageSize={this.pageSize} category="entertainment" badgeColor="secondary"/>} />
            <Route exact path='/business' element={<News apiKey={this.apiKey} key="business" country="in" pageSize={this.pageSize} category="business" badgeColor="warning"/>} />
            <Route exact path='/technology' element={<News apiKey={this.apiKey} key="technology" country="in" pageSize={this.pageSize} category="technology" badgeColor="success"/>} />
            <Route exact path='/science' element={<News apiKey={this.apiKey} key="science" country="in" pageSize={this.pageSize} category="science" badgeColor="dark"/>} />
            <Route exact path='/health' element={<News apiKey={this.apiKey} key="health" country="in" pageSize={this.pageSize} category="health" badgeColor="info"/>} />
          </Routes>
          <Footer/>
          </Router>
        </div>
    )
  }
}
