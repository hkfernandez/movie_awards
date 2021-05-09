import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MovieDetails = props => {

  const handleDeleteMovie = (event) => {
    event.preventDefault();
    //console.log('handle deleteMovie event', event);
    let movieId = { imdbID: event.target.dataset.movieid };
    props.db.deleteMovie(movieId)
      .then(props.updateNomineesList)
      .catch(err => console.log(err));
  }
  console.log('props passed to MovieDetails component', props);
  return (
    <>
      <Card className="max-width-200">
        <Card.Img
          variant="top"
          src={props.poster}
          className="max-width-200" />
        <Card.Body className="text-center">
          <h2>{props.title}</h2>
          {/*<Card.Text className="font-sm">{props.actors}</Card.Text>*/}
          <Button
            data-movieid={props.id}
            onClick={handleDeleteMovie}
            variant="light"
          >
            Remove
      </Button>
        </Card.Body>
      </Card>
    </>
  )
};

export default MovieDetails