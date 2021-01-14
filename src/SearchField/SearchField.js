import React, { Component } from "react";
import Search from './Search'
import "../App.css";

class SearchField extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  }

  render() {
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
      <Search gif={this.state.search} />
      </div>
    );
  }
}

export default SearchField;
