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
      <div>
        <SearchField />
      </div>
    )
  }
}
