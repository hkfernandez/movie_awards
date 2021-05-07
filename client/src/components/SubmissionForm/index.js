import React, { useState, useEffect } from "react";
import apiCall from '../../utils/apiCalls';
import ImdbMovie from '../ImdbMovie'

const SubmissionForm = () => {

  const [returnedMovieInfo, setReturnedMovieInfo] = useState({});
  const [userSearchString, setUserSearchString] = useState('');

  useEffect(() => {
    console.log(returnedMovieInfo);
  }, [returnedMovieInfo])

  const handleInputChange = inputChange => {
    setUserSearchString(inputChange.target.value);
  }

  const handleMovieSearch = async function (event) {
    event.preventDefault();
    //console.log('------------------userSearchString', userSearchString);
    apiCall.imdbMovieSearch({ movieName: userSearchString })
      .then((imdbMovieData) => {
        //console.log('data returned to React component ', imdbMovieData);
        setReturnedMovieInfo(imdbMovieData.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <h1>Submission Form</h1>
      <form action="/imdb/findMovie" method="POST">
        <div>
          <label>Movie Title:</label>
          <input type="text" name="movieName" value={userSearchString} onChange={handleInputChange} required />
        </div>
        <div>
          <button type="submit" value="Submit" onClick={handleMovieSearch}>Find Your Movie</button>
        </div>
      </form>
      <ImdbMovie
        movieInfo={returnedMovieInfo} />
    </>
  )
}

export default SubmissionForm;