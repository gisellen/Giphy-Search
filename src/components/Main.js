import Search from "./Search";
import "../App.css";
import GifCard from "./gifCard";
import axios from "axios";

// class SearchField extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       search: "",
//       gif: [],
//       error: null,
//       rand: false,
//       page:1
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     // this.handleTrend = this.handleTrend.bind(this)
//     this.handleRandom = this.handleRandom.bind(this)
//   }

//   handleChange(event) {
//     const value = event.target.value;
//     this.setState({
//       search: value,
//     });
//   }

//   handleRandom() {
//     fetch("/random")
//     .then((response) => {
//         if(response.status !== 200){
//             throw new Error("No result");
//         }
//         return response.json();
//     })
//     .then((result) => {
//         console.log(result)
//         this.setState({
//             gif: [],
//             rand: true,
//         })
//         if(result.length !== 0){
//             this.setState({
//                 gif: result.data,
//             })
//         }
//     })
//     .catch((error) => {
//         // console.log(error);
//         // this.setState({
//         //     error: error,
//         //     gif: [],
//         // })
//     })
//   }

// //  async  handleTrend() { //get trending gifs
// //   console.log(this.state.page)
// //      const test = await axios.get("/trending", {params: {offset: 1}}).then(res => {return res.data.data})
// //      console.log(test)
// //      if (test.length !== 0) {
// //       this.setState({
// //         gif: test,
// //         rand: false,
// //       });

// //     }
// //   }

//   onSubmit(){
//     fetch("http://api.giphy.com/v1/gifs/search?q=" + `${this.state.search}` + "&api_key=hNr7dizMwEhAZbcrICxMPPESXDlciYAl")
//     .then((response) => {
//       if (response.status !== 200) {
//         throw new Error("No Result");
//       }
//       return response.json();
//     })
//     .then((result) => {
//       this.setState({
//         gif: [],
//         rand: false,
//       });
//       if (result.length !== 0) {
//         this.setState({
//           gif: result.data,
//           rand: false,
//         });
//         console.log(this.state.gif)
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       this.setState({
//         error,
//         gif: [],
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="buttons">
// <form>
//   <input
//     type="text"
//     name="search"
//     placeholder="Gif Search"
//     onChange={this.handleChange}
//   />
// </form>
//       <button className="trend-button" onClick={this.onSubmit}>Submit</button><br />
//       <button className="random-button" onClick={this.handleRandom}>Random</button>
//       <Search gif={this.state.gif} error={this.state.error} rand={this.state.rand} />
//       </div>
//     );
//   }
// }

// export default SearchField;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trending, search, random } from "../redux/options";

export default function Main() {
  //redux
  const options = useSelector((state) => state.options.value);
  const dispatch = useDispatch();
  //states
  const [test, setTest] = useState(options);


  //render
  return (
    <div className="center">
      <button className="button" onClick={() => dispatch(search())}>
        Search
      </button>
      <button className="button" onClick={() => dispatch(trending())}>
        Trending
      </button>
      <button className="button" onClick={() => dispatch(random())}>
        Random
      </button>
      <br />
    </div>
  );
}
