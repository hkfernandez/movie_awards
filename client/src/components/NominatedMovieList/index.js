import React, { useState, useEffect } from "react";
import dbCalls from '../../utils/dbCalls';
import MovieDetails from '../MoveDetails'

const NominatedMoviesList = () => {
  const [nomineesList, setNomineesList] = useState()

  useEffect(() => {
    updateNomineesList();
  }, [])

  const updateNomineesList = () => {
    dbCalls.findAll()
      .then((nominatedMovies) => {
        if (!nominatedMovies) {
          return
        } else {
          //console.log('movies returned from db', nominatedMovies);
          setNomineesList(nominatedMovies);
        }
      })
      .then(() => console.log('nomineesList updated with', nomineesList))
  }

  return (
    <>
      <div><a href='/'>Back to Nomination Page</a></div>
      {/*{console.log('nomineesList in return statemet', nomineesList)}*/}
      {nomineesList ?
        nomineesList.data.map(movie => {
          return <MovieDetails
            title={movie.Title}
            id={movie.imdbID}
            key={movie.imdbID}
            db={dbCalls}
            updateNomineesList={updateNomineesList} />
        }
        )
        :
        <>
          <h2>{`No movies have been nominated :(`}</h2>
          <a href='/'>
            Click Here to Find and Nominate Your Favorite Movie!
          </a>
        </>
      }
    </>
  )
}

export default NominatedMoviesList;