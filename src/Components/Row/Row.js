import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../../utils/axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);

  // run on a specific a condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  //console.log(movies);

  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://....
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} /* for react to optimise rendering */
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <YouTube videoId="wvfUhQA9M2g" opts={youtubeOpts} />
    </div>
  );
};

export default Row;
