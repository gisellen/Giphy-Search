const express = require("express");
const cors = require('cors')
const app = express();
const axios = require('axios');
require('dotenv').config()
app.use(cors())

app.get("/random", async (req, res) => {
   let response = await axios.get(`http://api.giphy.com/v1/gifs/random`, {
       params: {
           api_key: process.env.API_KEY
       }
   })
   if (response.status !== 200) {
    throw new Error("No Result");
   }
   res.json(response.data)
})

app.get("/trending", async (req, res) => {
    const param = req.query.offset
    let response = await axios.get(`http://api.giphy.com/v1/gifs/trending`, {
    params: {
        api_key: process.env.API_KEY,
        limit: 10,
        offset: param,
    }})
    res.json(response.data)
 })

 app.get("/search", async (req, res) => {
     const searchQuery = req.query.search
     const offset = req.query.offset

     let response = await axios.get("http://api.giphy.com/v1/gifs/search", {
         params: {
             api_key: process.env.API_KEY,
             q: searchQuery,
             limit: 10,
             offset: offset
         }
     })
     console.log(response.data)
     res.json(response.data)
 })

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server listening on: ${PORT}`)
})