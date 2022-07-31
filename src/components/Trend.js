import React, { useState, useEffect } from "react";
import GifCard from "./gifCard";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Trend() {
  //redux
  const options = useSelector((state) => state.options.value);
  // states
  const [page, setPage] = useState(1);
  const [gif, setGif] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isTrend, setIsTrend] = useState(options);

  //hooks
  useEffect(() => {
    //updates ui
    setIsTrend(options);
  });

  useEffect(() => {
      if(gif.length == 0 )
      trendRequest()
  }, [gif]);


  async function getTrending() { // calls api
    const offset = page * limit - limit;
    return await axios
      .get("/trending", { params: { offset: offset } })
      .then((res) => {
        return res.data.data;
      });
  }

  async function getTrending(offset) { //calls api w/ offset for pagination
    return await axios
    .get("/trending", { params: { offset: offset } })
    .then((res) => {
      return res.data.data;
    });
  }

async function trendRequest() {
    const gifRequest = await getTrending();
    console.log(gifRequest)
    setGif(gifRequest);
  }

  async function handleTrend(event, value) {
    //when the page changes, the gif changes as wwell
    const pageValue = value;
    setPage(pageValue)
    let offset = pageValue * limit - limit;
    const gifRequest = await getTrending(offset);
    setGif(gifRequest);
  }

  //rendering
  if (isTrend === "trending") {
    return (
        <div>
          <p>page: {page}</p>
          <Pagination
            count={10}
            page={page}
            onChange={handleTrend}
          />
          <div className="gif-container">
            {gif.map((gif) => (
              <GifCard id={gif.id} url={gif.images.original.url} />
            ))}
          </div>
        </div>
      );
  } else {
    return <></>;
  }
}
