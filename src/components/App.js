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

  <img src="113Ja712zxL.png" width= "100px" height= "150px"/>

  <h1> Giphy Search </h1>
        <SearchField />
      </div>
    )
  }
}
