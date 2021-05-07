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
          console.log('movies returned from db', nominatedMovies);
          setNomineesList(nominatedMovies);
        }
      })
      .then(() => console.log('nomineesList updated with', nomineesList))
  }

  return (
    <>
      {console.log('nomineesList in return statemet', nomineesList)}
      {nomineesList ?
        nomineesList.data.map(movie => {
          return <MovieDetails
            title={movie.Title}
            id={movie._id}
            key={movie.id} />
        }
        )
        :
        <>
          <h2>{`No movies have been nominated yet :(`}</h2>
          <a href='/'>
            Click Here to Find and Nominate Your Favorite Movie!
          </a>
        </>
      }
    </>
  )
}

export default NominatedMoviesList;