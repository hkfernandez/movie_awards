import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

import apiCall from '../../utils/apiCalls';
import ImdbMovie from '../ImdbMovie'

const SubmissionForm = (props) => {

  const [returnedMovieInfo, setReturnedMovieInfo] = useState({});
  const [userSearchString, setUserSearchString] = useState('');

  useEffect(() => {
  }, [returnedMovieInfo])

  const handleInputChange = inputChange => {
    setUserSearchString(inputChange.target.value);
  }

  const handleMovieSearch = async function (event) {
    event.preventDefault();
    apiCall.imdbMovieSearch({ movieName: userSearchString })
      .then((imdbMovieData) => {
        setReturnedMovieInfo(imdbMovieData.data);
        setUserSearchString('');
        return imdbMovieData.data;
      })
      .catch(err => console.log(err));
  }

  const clearMovieData = () => {
    setReturnedMovieInfo({});
    setUserSearchString('');
    return;
  }

  return (
    <>
      <Container className="container text-center">
        <Row className="center-horz">
          <Form action="/imdb/findMovie" method="POST">
            <Form.Group controlId="movieName">
              <Form.Control
                className="text-center"
                type="text"
                name="movieName"
                value={userSearchString}
                onChange={handleInputChange}
                placeholder='Search For a Movie Title...'
                required>
              </Form.Control>
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Form>
        </Row>
        <Button
          width="auto"
          type="submit"
          value="Submit"
          onClick={handleMovieSearch}
          variant='dark'
          className="font-weight-bold">
          Find Movie
            </Button>
      </Container>
      <ImdbMovie
        movieInfo={returnedMovieInfo}
        nominatedmovieids={props.nominatedmovieids}
        updateNomineesList={props.updateNomineesList}
        clearMovieData={clearMovieData}
      />
    </>
  )
}

export default SubmissionForm;