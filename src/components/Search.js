import GifCard from "./gifCard";
import { trending, search, random } from "../redux/options";

/*
 *
 *
 *
 *
 * I AM GOING TO DELETE THIS FILE
 *
 *
 *
 *
 */

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gif: this.props.gif,
//       page: 1,
//       limit: 10,
//       isTrend: false
//     };
//     this.handleTrend = this.handleTrend.bind(this)
//   }

//     async handleTrend(event, value) { //get trending gifs
//       console.log(this.state.gif)
//     this.setState({
//       page: value
//     })
//     const offset = (this.state.page*this.state.limit) - this.state.limit;
//     console.log(offset)
//        const test = await axios.get("/trending", {params: {offset: offset}}).then(res => {return res.data.data})
//        if (test.length !== 0) {
//         this.setState({
//           gif: test,
//         });

//       }
//     }
//   render() {
//     if (this.state.isTrend === false){
//       return (
//         <button className="trend-button" onClick={this.handleTrend}>Trending</button>
//       )
//     }
//     else if (this.state.gif.length != 0) {
//       return (
//         <div className="gif-container">
//           {this.state.gif.map((gif) => (
//             <GifCard url={gif.images.original.url} />
//           ))}
//           <p>page: {this.state.page}</p>
//           <Pagination count={10} page={this.state.page} onChange={this.handleTrend}/>
//         </div>
//       );
//     } else {
//       return <div> no results </div>;
//     }
//   }
// }
// export default Search;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";

export default function Search() {
  //redux
  const options = useSelector((state) => state.options.value);
  //states
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [gif, setGif] = useState([]);
  const [isSearch, setIsSearch] = useState(options);

  useEffect(() => {
    setIsSearch(options);
  });

  //functions
  function handleChange(event) {
    const value = event.target.value;
    setSearch(value);
  }

  async function getSearch() {
    const offset = page * limit - limit;
    return await axios
      .get("/search", {
        params: {
          search: search,
          offset: offset,
        },
      })
      .then((res) => {
        return res.data.data;
      });
  }

  async function getSearch(offset) {
    return await axios
      .get("/search", {
        params: {
          search: search,
          offset: offset,
        },
      })
      .then((res) => {
        return res.data.data;
      });
  }

  async function handlePage(event, value) {
    //when the page changes, the gif changes as wwell
    const pageValue = value;
    setPage(pageValue);
    let offset = pageValue * limit - limit;
    const gifRequest = await getSearch(offset);
    setGif(gifRequest);
  }

  async function onSubmit() {
    const gifRequest = await getSearch();
    setGif(gifRequest);
  }

  if (isSearch === "search") {
    return (
      <div>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Gif Search"
            onChange={handleChange}
          />
        </form>
        <button className="button" onClick={onSubmit}>
          Submit
        </button>
        {gif.length > 0 ? (
          <div>
            <p>page: {page}</p>
            <Pagination count={10} page={page} onChange={handlePage} />
          </div>
        ) : null}
        {gif.map((gif) => (
          <GifCard id={gif.id} url={gif.images.original.url} />
        ))}
      </div>
    );
  } else return <></>;
}
