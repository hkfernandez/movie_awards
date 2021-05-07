import { useEffect, useState } from 'react';
import db from '../../utils/dbCalls'
import SubmissionForm from '../SubmissionForm';

const Home = () => {

  const [nomineesList, setNomineesList] = useState([])

  useEffect(() => {
    //updateNomineesList();
    console.log('nominees list current state', nomineesList);
  }, [nomineesList])

  const updateNomineesList = () => {
    db.findAll()
      .then((nominatedMovies) => {
        if (!nominatedMovies) {
          return
        } else {
          setNomineesList(nominatedMovies);
        }
      })
  }

  return (
    <>
      <a href="/nominatedMovies">Click Here to See The Nominated Moves</a>
      <SubmissionForm />
    </>
  )
};

export default Home;