import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import ResultList from './ResultList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orderList: []
    };
  }

  render() {
    return (
      <div>
        <Search orderList={this.state.orderList} />
        <ResultList />
      </div>
    );
  }
}

export default App;
