import React, { Component } from "react";
import SearchField from "./SearchField";
import GifCard from "./gifCard";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: this.props.gif,
    };
  }

  render() {
    if (this.props.gif.length > 1) {
      return (
        <div className="gif-container">
          {this.props.gif.map((gif) => (
            <GifCard url={gif.images.original.url} />
          ))}
        </div>
      );
    } else if (this.props.gif.length != "") {
      return <div> <GifCard url={this.props.gif.images.original.url} /></div>;
    } else {
      return <div> no results </div>;
    }
  }
}
export default Search;
