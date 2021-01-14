import React, { Component } from 'react'
import SearchField from './SearchField';

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

  <img src="giphy.gif" width= "300px" height= "350px"/>

  <h1> Giphy Search </h1>
        <SearchField />
      </div>
    )
  }
}
