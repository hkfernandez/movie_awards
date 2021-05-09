import React, { useState, useEffect } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import apiCall from '../../utils/apiCalls';
import ImdbMovie from '../ImdbMovie'

const SubmissionForm = (props) => {

  const [returnedMovieInfo, setReturnedMovieInfo] = useState({});
  const [userSearchString, setUserSearchString] = useState('');

  useEffect(() => {
    //console.log(returnedMovieInfo);
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
        <form action="/imdb/findMovie" method="POST">
          <Row classname="center-horz">
            <Form>
              <Form.Group controlId="movieName">
                {/*<Form.Label>Movie Title</Form.Label>*/}
                <Form.Control
                  className="text-center"
                  type="text"
                  name="movieName"
                  value={userSearchString}
                  onChange={handleInputChange}
                  placeholder='Search For a Movie Title...'
                  required>
                </Form.Control>
                <Form.Text classname="text-muted"></Form.Text>
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
        </form>
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