import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <Container>

          {movieHasBeenNominated ?
            <Row className="text-center">
              <h4 className="text-green">Great choice! This movie has already been nominated.</h4>
              <p className="text-secondary">- try another search -</p>
            </Row>
            :
            <></>
          }
          <Row>
            <Col className='text-end'>
              {movieHasBeenNominated ?
                <></>
                :
                <Row >
                  <Button
                    onClick={handleNomination}
                    imdbid={movieInfo.imdbID}
                    className="bg-green"
                  >
                    Nominate This Movie
              </Button>
                </Row>
              }
              <Row className="text-end">
                <h3>{movieInfo.Title}<span className="text-secondary"> - {movieInfo.Year}</span> </h3>
              </Row>
              <Row className="text-end display-block">
                With {movieInfo.Actors}
              </Row>
              <Row className="text-end text-secondary">
                {movieInfo.Plot}
              </Row>
            </Col>
            <Col className="max-width-400">
              <img src={movieInfo.Poster} alt="Movie Poster" />
            </Col>

          </Row>
        </Container>

      </>
    )
  } else if (nominatedmovieids.length < 4) {
    return (
      <>
        <Container className="text-center">
          <h3>{statusMessage}</h3>
        You can nominate {5 - nominatedmovieids.length} more movies.
        </Container>
      </>
    )
  } else {
    return (
      <>
        <Container className="text-center">
          <h3>{statusMessage}</h3>
        You can nominate {5 - nominatedmovieids.length} more movie.
        </Container>
      </>
    )
  }

};

export default ImdbMovie;