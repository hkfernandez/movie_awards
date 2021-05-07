import React, { useState, useEffect } from "react";
import dbCall from '../../utils/dbCalls';

const ImdbMovie = ({ movieInfo }) => {
  console.log('movie info in ImdbMovie component', movieInfo);

  const [statusMessage, setStatusMessage] = useState('')

  const handleNomination = function (event) {
    event.preventDefault();
    dbCall.addMovie(movieInfo)
    //.then((movieAddedToDb) => {
    //  if (movieAddedToDb) {
    //    setStatusMessage(`You have nominated ${movieInfo.Title} for the Shopify Ecommerce Movie Awards`)
    //  } else {
    //    return;
    //  }
    //})
    //.catch(err => console.log(err))

  }

  if (movieInfo.Title) {
    return (
      <>
        <button
          onClick={handleNomination}
          imdbid={movieInfo.imdbID}
        >
          Nominate This Movie
            </button>
        <h3>{statusMessage}</h3>
        <h1>{movieInfo.Title}</h1>
        <h3>{movieInfo.Year}</h3>
        <div> With {movieInfo.Actors}</div>
        <div>{movieInfo.Plot}</div>
        <img src={movieInfo.Poster} alt="Movie Poster" />

      </>
    )
  } else {
    return (
      <>
      </>
    )
  }

};

export default ImdbMovie;