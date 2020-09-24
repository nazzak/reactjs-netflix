import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import requests from "../constants/requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      // take a random movie
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);
      return request;
    }

    fetchData();
  }, []);

  //console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>

      <h1 class="banner__description">{movie?.overview}</h1>
    </header>
  );
};

export default Banner;
