import React, { useState, useEffect } from "react";
import dbCall from '../../utils/dbCalls';

const ImdbMovie = ({ movieInfo, nominatedmovieids }) => {
  //console.log('movie info in ImdbMovie component', movieInfo);

  const [statusMessage, setStatusMessage] = useState('');
  const [movieHasBeenNominated, setMovieHasBeenNominated] = useState(false);

  useEffect(() => {
    checkIfMovieHasBeenNominated(movieInfo.imdbID);
    //console.log('movieHasBeenNominated', movieHasBeenNominated);
  }, [movieInfo])

  const handleNomination = function (event) {
    event.preventDefault();
    dbCall.addMovie(movieInfo)
      .then((movieAddedToDb) => {
        if (movieAddedToDb) {
          setStatusMessage(`You have nominated ${movieInfo.Title} for the Shopify Ecommerce Movie Awards`);
        } else {
          return;
        }
      })
      .catch(err => console.log(err))
  }

  const checkIfMovieHasBeenNominated = (imdbID) => {
    console.log('CHECKING IF MOVIE HAS BEEN NOMINATED');
    if (nominatedmovieids.indexOf(imdbID) === -1) {
      //console.log('current movie imdbID', imdbID);
      //console.log('index of current over in array of nominated moive ids', nominatedmovieids.indexOf(imdbID));
      setMovieHasBeenNominated(false);
      return;
    } else {
      //console.log('movieHasBeenNominated', movieHasBeenNominated);
      setMovieHasBeenNominated(true);

    }
  }

  //const checkIfMovieHasBeenNominated = (movieId) => {
  //  console.log('id of movie to check for in db', movieId);
  //  dbCall.findOne(movieInfo)
  //    .then(nominatedMovie => {
  //      if (nominatedMovie) {
  //        console.log('nominated movie found in db', nominatedMovie);
  //        setMovieHasBeenNominated(true);
  //      } else {
  //        setMovieHasBeenNominated(false);
  //        return;
  //      }
  //    })
  //}

  //checkIfMovieHasBeenNominated(movieInfo.imdbID);

  if (movieInfo.Title) {
    return (
      <>
        {movieHasBeenNominated ?
          //console.log('movieHasBeenNaminated', movieHasBeenNominated)
          < h2 > Looks like this movie has already been nominated</h2>
          :
          <button
            onClick={handleNomination}
            imdbid={movieInfo.imdbID}
          >
            Nominate This Movie
        </button>
        }
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