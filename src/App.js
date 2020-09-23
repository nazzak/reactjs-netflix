import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./constants/requests";

function App() {
  return (
    <div className="app">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
