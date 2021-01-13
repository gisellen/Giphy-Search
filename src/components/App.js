import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      gif: [],
    };
  }

  //   componentDidUpdate(prevProps, prevState){
  //     if (prevProps.gif !== this.props.gif) {
  //         this.componentDidMount();
  //       }
  // }

  componentDidMount() {
    this.setState({
      isLoaded: false,
    });

    fetch("http://api.giphy.com/v1/gifs/search?q=CAR&api_key=hNr7dizMwEhAZbcrICxMPPESXDlciYAl")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("No Result");
        }
        return response.json();
      })
      .then((result) => {
        this.setState({
          isLoaded: true,
          gif: [],
        });
        if (result.length !== 0) {
          this.setState({
            isLoaded: true,
            gif: result.data,
          });
          // console.log(this.state.gif)
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error,
          gif: [],
          isLoaded: true,
        });
      });
  }

  render() {
    const { error, isLoaded, gif } = this.state;

    return (
      <div>
            {gif.map((gif)=>(
              <img src={gif.images.original.url} />
            ))}
      </div>
    );
  }
}

export default App;
