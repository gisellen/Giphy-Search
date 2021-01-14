import React, { Component } from "react";
import SearchField from "./SearchField";
import gifCard from "./gifCard";

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
<<<<<<< HEAD
              {gif.map((gif)=>(
                  <gifCard url={gif.images.original.url}/>
              ))}
=======
          {this.props.gif.map((gif) => (
            <GifCard url={gif.images.original.url} />
          ))}
>>>>>>> c8f3b69dfed1c0f8a4d5faf2c52e315f220aca70
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
