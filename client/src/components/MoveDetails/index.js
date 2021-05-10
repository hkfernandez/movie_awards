import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MovieDetails = props => {

  const handleDeleteMovie = (event) => {
    event.preventDefault();
    let movieId = { imdbID: event.target.dataset.movieid };
    props.db.deleteMovie(movieId)
      .then(props.updateNomineesList)
      .catch(err => console.log(err));
  }
  return (
    <>
      <Card className="max-width-200">
        <Card.Img
          variant="top"
          src={props.poster}
          className="max-width-200" />
        <Card.Body className="text-center">
          <h4>{props.title}</h4>
        </Card.Body>
        <Button
          data-movieid={props.id}
          onClick={handleDeleteMovie}
          variant="light"
        >
          Remove
         </Button>
      </Card>
    </>
  )
};

export default MovieDetails