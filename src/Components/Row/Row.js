import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../../utils/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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
      // https://www.youtube.com/watch?v=wvfUhQA9M2g
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // i.e. https://www.youtube.com/watch?v=wvfUhQA9M2g
          // We want to get: wvfUhQA9M2g
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} /* for react to optimise rendering */
            onClick={() => handleClick(movie)}
            className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
};

export default Row;
