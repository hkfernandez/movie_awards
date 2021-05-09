import React, { useState, useEffect } from "react";
import dbCalls from '../../utils/dbCalls';
import MovieDetails from '../MoveDetails'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';



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
      <Container>
        <Row className='text-center padding-t-b'>
          <a href='/'>
            <Button variant="light">
              Back to Nomination Page
        </Button></a>
        </Row>
        <Row className="text-center">
          <h2 className="text-green">Current Nominations</h2>
        </Row>
        <CardDeck className="text-center mx-auto d-flex justify-content-center">
          {nomineesList ?
            nomineesList.data.map(movie => {
              return <MovieDetails
                title={movie.Title}
                id={movie.imdbID}
                poster={movie.Poster}
                actors={movie.Actors}
                key={movie.imdbID}
                db={dbCalls}
                updateNomineesList={updateNomineesList}
              />

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
        </CardDeck>
      </Container>
    </>
  )
}

export default NominatedMoviesList;