// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import axios from "../../utils/axios";
// eslint-disable-next-line no-unused-vars
import requests from "../../utils/requests";

import "./Banner.css";
function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        // Fetch the movie
        const request = await axios.get(requests.fetchNetflixOriginals);
        // Pick a random movie and set it to state
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );

        // console.log(request);
      } catch (error) {
        // Catch errors if any are thrown
        console.log(error);
      }
    })();
  }, []);

  // eslint-disable-next-line no-unused-vars
  function truncateText(text, maxLength) {
    return text?.length > maxLength
      ? text.substr(0, maxLength - 1) + "..."
      : text;
  }

  // console.log(movie);
  return (
    <>
      {/* Banner section image */}
      <div
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <h1 className="banner__description">
            {truncateText(movie?.overview, 150)}
          </h1>

          <div className="banner__buttons">
            <button className="banner__button play mb-2">
              
              Play
            </button>
            <button className="banner__button info ">
              My List
            </button>
          </div>
        </div>
        <div className="banner__fadeBottom" />
      </div>
    </>
  );
}

export default Banner;
