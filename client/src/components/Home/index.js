import { useEffect, useState } from 'react';
import db from '../../utils/dbCalls'
import SubmissionForm from '../SubmissionForm';

const Home = () => {

  //const [nomineesList, setNomineesList] = useState([]);
  const [nominatedMovieIds, setNominatedMovieIds] = useState([]);

  useEffect(() => {
    updateNomineesList();
    console.log('ids of nominated movies', nominatedMovieIds);
  }, [])

  const updateNomineesList = () => {
    db.findAll()
      .then((nominatedMovies) => {
        if (!nominatedMovies) {
          return
        } else {
          console.log('nominated movies', nominatedMovies);
          buildArrOfMovieIdsInDb(nominatedMovies.data);
          console.log('array of movie ids should be built');
          //setNomineesList(nominatedMovies);
        }
      })
  }


  const buildArrOfMovieIdsInDb = (movies) => {
    let movieIdsArr = [];
    movies.map(movie => {
      console.log('building movie id array with ', movie.imdbID);
      return movieIdsArr.push(movie.imdbID);
    })
    setNominatedMovieIds(movieIdsArr);
  }

  return (
    <>
      <a href="/nominatedMovies">Click Here to See The Nominated Moves</a>
      <SubmissionForm
        nominatedmovieids={nominatedMovieIds} />
    </>
  )
};

export default Home;