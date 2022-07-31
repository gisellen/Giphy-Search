import React, { Component } from 'react'
import Main from './Main';
import Trend from './Trend';
import Random from './Random'
import Search from './Search'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
    }
  }
  render() {
    return (
      
    <div className="App">
  <div className="container"></div>

  <h1> Giphy Search </h1>
        <Main />
        <Trend />
        <Random />
        <Search />
      </div>
    )
  }
}
