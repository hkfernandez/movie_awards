import { useEffect, useState } from 'react';
import db from '../../utils/dbCalls'
import SubmissionForm from '../SubmissionForm';

const Home = () => {

  //const [nomineesList, setNomineesList] = useState([]);
  const [moviesInDb, setMoviesInDb] = useState([]);
  const [nominatedMovieIds, setNominatedMovieIds] = useState([]);
  const [fiveMoviesNominated, setFiveMoviesNominated] = useState(false);

  useEffect(() => {
    updateNomineesList();
    //buildArrOfMovieIdsInDb(moviesInDb);
    //checkIfFiveMoviesHaveBeenNominated();
    //console.log('ids of nominated movies', nominatedMovieIds);
  }, [])

  useEffect(() => {
    checkIfFiveMoviesHaveBeenNominated()
  }, [nominatedMovieIds])

  const updateNomineesList = () => {
    db.findAll()
      .then((nominatedMovies) => {
        console.log('nominated movies', nominatedMovies);
        if (!nominatedMovies) {
          return;
        } else {
          //console.log('nominated movies', nominatedMovies);
          setMoviesInDb(nominatedMovies.data);
          return nominatedMovies;
          //buildArrOfMovieIdsInDb(nominatedMovies.data);
          //console.log('array of movie ids should be built');
          //setNomineesList(nominatedMovies);
        }
      })
      .then((nominatedMovies) => {
        buildArrOfMovieIdsInDb(nominatedMovies.data);
      })
  }

  const buildArrOfMovieIdsInDb = (movies) => {
    console.log('building array of movies in db with', movies);
    let movieIdsArr = [];
    movies.map(movie => {
      //console.log('building movie id array with ', movie.imdbID);
      return movieIdsArr.push(movie.imdbID);
    })
    setNominatedMovieIds(movieIdsArr);
    return movieIdsArr;
  }

  const checkIfFiveMoviesHaveBeenNominated = () => {
    console.log('checking if five movies have been nominated', nominatedMovieIds.length);
    console.log('five movies have been nominated?', fiveMoviesNominated);
    if (nominatedMovieIds.length > 4) {
      setFiveMoviesNominated(true);
      return true;
    } else {
      setFiveMoviesNominated(false);
      return false;
    }
  }

  return (
    <>
      <a href="/nominatedMovies">Click Here to See The Nominated Moves</a>
      {fiveMoviesNominated ?
        <>
          <h3>Congratulations! You have naominated 5 of your favorite films for the Shopify Ecommerce Movie Awards!</h3>
          <h4>You can see which movies you have nominated using the link above and remove any unwanted choices.</h4>
          <h4>Thanks for helping us choose the film of the year!</h4>
        </>
        :
        <SubmissionForm
          nominatedmovieids={nominatedMovieIds}
          updateNomineesList={updateNomineesList}
        />
      }
    </>
  )
};

export default Home;