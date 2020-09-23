import React, { useState, useEffect } from "react";
import axios from "../utils/axios";

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

  console.log(movies);

  return (
    <div className="">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Row;
