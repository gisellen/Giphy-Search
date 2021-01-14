import React, { Component } from "react";
import Search from './Search'
import SearchTwo from './SearchTwo'
import "../App.css";
import GifCard from "./GifCard";

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      gif: [],
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  }

  handleRandom() {
    fetch("http://api.giphy.com/v1/gifs/random?api_key=hNr7dizMwEhAZbcrICxMPPESXDlciYAl")
    .then((response) => {
        if(response.status !== 200){
            throw new Error("No result");
        }
        return response.json();
    })
    .then((result) => {
        console.log(result.data)
        this.setState({
            gif: [],
        })
        if(result.length !== 0){
            this.setState({
                gif: result.data,
            })
        }
    })
    .catch((error) => {
        // console.log(error);
        // this.setState({
        //     error: error,
        //     gif: [],
        // })
    })
  }
  
  handleTrend() {
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=hNr7dizMwEhAZbcrICxMPPESXDlciYAl")
    .then((response) => {
        if(response.status !== 200){
            throw new Error("No result");
        }
        return response.json();
    })
    .then((result) => {
        console.log(result.data)
        this.setState({
            gif: [],
        })
        if(result.length !== 0){
            this.setState({
                gif: result.data,
            })
        }
        console.log(this.state.gif)
    })
    .catch((error) => {
        // console.log(error);
        // this.setState({
        //     error: error,
        //     gif: [],
        // })
    })
  }

  render() {
    const {gif} = this.state.gif
    return (
      <div>
      <form>
        <br />
        <input
          type="text"
          name="search"
          placeholder="Gif Search"
          onChange={this.handleChange}
        />
      </form>
      {/* <button className="trend-button" onClick={() => console.log(this.state.search)}>Submit</button><br /> */}
      <button className="trend-button" onClick={this.handleTrend}>Trending</button>
      <button className="random-button" onClick={this.handleRandom}>Random</button>
      <Search gif={this.state.search} />
      </div>
    );
  }
}

export default SearchField;
