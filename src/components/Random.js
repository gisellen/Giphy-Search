import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GifCard from "./gifCard";

export default function Random() {
  //redux
  const options = useSelector((state) => state.options.value);
  //states
  const [isRandom, setIsRandom] = useState(options);
  const [gif, setGif] = useState([]);

  //hooks
  useEffect(() => {
    setIsRandom(options);
  });

  useEffect(() => {
    if (gif.length == 0) {
      handleRandom();
    }
  }, [gif]); //have put authenticate in the dependencies of the use effect since thats what you need to monitor

  //functions
  async function getRandom() {
    return await axios.get("/random").then((res) => {
      return res.data.data;
    });
  }

  async function handleRandom() {
    const gifRequest = await getRandom();
    setGif(gifRequest);
    console.log(gifRequest);
  }

  //rendering
  if (isRandom === "random") {
    return (
      <div className="center">
        <button className="button" onClick={handleRandom}>
          New Random Gif
        </button>
          <GifCard id={gif.id} url={gif.images.original.url} />
      </div>
    );
  } else {
    return <></>;
  }
}
