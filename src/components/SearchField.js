import React, { Component } from "react";
import Search from './Search'
import "../App.css";
import GifCard from "./gifCard";

class SearchField extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      gif: [],
      error: null,
      rand: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleTrend = this.handleTrend.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
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
        console.log(result)
        this.setState({
            gif: [],
            rand: true,
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
        this.setState({
            gif: [],
            rand: false,
        })
        if(result.length !== 0){
            this.setState({
                gif: result.data,
                rand: false,
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

  onSubmit(){
    fetch("http://api.giphy.com/v1/gifs/search?q=" + `${this.state.search}` + "&api_key=hNr7dizMwEhAZbcrICxMPPESXDlciYAl")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("No Result");
      }
      return response.json();
    })
    .then((result) => {
      this.setState({
        gif: [],
        rand: false,
      });
      if (result.length !== 0) {
        this.setState({
          gif: result.data,
          rand: false,
        });
        console.log(this.state.gif)
      }
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        error,
        gif: [],
      });
    });
  }

  render() {
    return (
      <div className="buttons">
      <form>
        <input
          type="text"
          name="search"
          placeholder="Gif Search"
          onChange={this.handleChange}
        />
      </form>
      <button className="trend-button" onClick={this.onSubmit}>Submit</button><br />
      <button className="trend-button" onClick={this.handleTrend}>Trending</button>
      <button className="random-button" onClick={this.handleRandom}>Random</button>
      <Search gif={this.state.gif} error={this.state.error} rand={this.state.rand} />
      </div>
    );
  }
}

export default SearchField;