import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import db from '../../utils/dbCalls';
import SubmissionForm from '../SubmissionForm';

import '../../utils/styles/style.css'

const Home = () => {

  //const [moviesInDb, setMoviesInDb] = useState([]);
  const [nominatedMovieIds, setNominatedMovieIds] = useState([]);
  const [fiveMoviesNominated, setFiveMoviesNominated] = useState(false);
  const [aMovieHasBeenNominated, setAMovieHasBeenNominated] = useState();

  useEffect(() => {
    updateNomineesList();
  }, [])

  useEffect(() => {
    checkIfFiveMoviesHaveBeenNominated()
  }, [nominatedMovieIds])

  const updateNomineesList = () => {
    db.findAll()
      .then((nominatedMovies) => {
        //console.log('nominated movies', nominatedMovies);
        if (!nominatedMovies) {
          return;
        } else {
          //setMoviesInDb(nominatedMovies.data);
          buildArrOfMovieIdsInDb(nominatedMovies.data);
          return nominatedMovies;
        }
      })
      .then(() => { checkIfAMovieHasBeenNominated(); })
  }

  const checkIfAMovieHasBeenNominated = () => {
    console.log('checking if movie has been nominated');
    if (nominatedMovieIds.length === 0) {
      setAMovieHasBeenNominated(false);
      return false;
    } else {
      setAMovieHasBeenNominated(true);
      return true;
    }
  }

  const buildArrOfMovieIdsInDb = (movies) => {
    //console.log('building array of movies in db with', movies);
    let movieIdsArr = [];
    movies.map(movie => {
      //console.log('building movie id array with ', movie.imdbID);
      return movieIdsArr.push(movie.imdbID);
    })
    setNominatedMovieIds(movieIdsArr);
    return movieIdsArr;
  }

  const checkIfFiveMoviesHaveBeenNominated = () => {
    //console.log('checking if five movies have been nominated', nominatedMovieIds.length);
    //console.log('five movies have been nominated?', fiveMoviesNominated);
    if (nominatedMovieIds.length > 4) {
      setFiveMoviesNominated(true);
    } else {
      setFiveMoviesNominated(false);
    }
    checkIfAMovieHasBeenNominated();
  }

  return (
    <>
      <Container>
        {aMovieHasBeenNominated ?
          <Row className='text-center'>
            <a href="/nominatedMovies">
              <Button variant="light">
                {`See The Nominated Movies (${nominatedMovieIds.length})`}
              </Button>
            </a>
          </Row>
          :
          <Row className='text-center'>
            <h4>Search for a movie you would like to nominate for the Shopify Ecommerce Movie Awards.</h4>
          </Row>
        }
      </Container>
      {fiveMoviesNominated ?
        <>
          <Container>
            <h3>Congratulations! You have nominated 5 of your favorite films for the Shopify Ecommerce Movie Awards!</h3>
            <h4>You can see which movies you have nominated using the link above and remove any unwanted choices.</h4>
            <h4>Thanks for helping us choose the film of the year!</h4>
          </Container>
        </>
        :
        <Container>
          <SubmissionForm
            nominatedmovieids={nominatedMovieIds}
            updateNomineesList={updateNomineesList}
            nominatedMovieIds={nominatedMovieIds}
          />
        </Container>
      }
    </>
  )
};

export default Home;