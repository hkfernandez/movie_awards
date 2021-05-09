import React, { useState, useEffect } from "react";
import dbCall from '../../utils/dbCalls';

const ImdbMovie = ({ movieInfo, nominatedmovieids, updateNomineesList, clearMovieData }) => {

  const [statusMessage, setStatusMessage] = useState('');
  const [movieHasBeenNominated, setMovieHasBeenNominated] = useState(false);


  useEffect(() => {
    checkIfMovieHasBeenNominated(movieInfo.imdbID);
  }, [movieInfo])

  const handleNomination = function (event) {
    event.preventDefault();
    dbCall.addMovie(movieInfo)
      .then((movieAddedToDb) => {
        if (movieAddedToDb) {
          setStatusMessage(
            `You have nominated '${movieInfo.Title}' for the Shopify Ecommerce Movie Awards`
          );
          updateNomineesList();
          clearMovieData();
          return movieAddedToDb;
        } else {
          return;
        }
      })
      .catch(err => console.log(err))
  }

  const checkIfMovieHasBeenNominated = (imdbID) => {
    if (nominatedmovieids.indexOf(imdbID) === -1) {
      setMovieHasBeenNominated(false);
      return;
    } else {
      setMovieHasBeenNominated(true);
    }
  }


  if (movieInfo.Title) {
    return (
      <>
        {movieHasBeenNominated ?
          < h2 > Looks like this movie has already been nominated</h2>
          :
          <button
            onClick={handleNomination}
            imdbid={movieInfo.imdbID}
          >
            Nominate This Movie
        </button>
        }
        <h1>{movieInfo.Title}</h1>
        <h3>{movieInfo.Year}</h3>
        <div> With {movieInfo.Actors}</div>
        <div>{movieInfo.Plot}</div>
        <img src={movieInfo.Poster} alt="Movie Poster" />

      </>
    )
  } else if (nominatedmovieids.length < 4) {
    return (
      <>
        <h3>{statusMessage}</h3>
        <h4>You can nominate {5 - nominatedmovieids.length} more movies.</h4>
      </>
    )
  } else {
    return (
      <>
        <h3>{statusMessage}</h3>
        <h4>You can nominate {5 - nominatedmovieids.length} more movie.</h4>
      </>
    )
  }

};

export default ImdbMovie;