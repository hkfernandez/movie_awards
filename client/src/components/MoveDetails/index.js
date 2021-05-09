const MovieDetails = props => {

  const handleDeleteMovie = (event) => {
    event.preventDefault();
    //console.log('handle deleteMovie event', event);
    let movieId = { imdbID: event.target.dataset.movieid };
    props.db.deleteMovie(movieId)
      .then(props.updateNomineesList)
      .catch(err => console.log(err));
  }
  //console.log('props passed to MovieDetails component', props);
  return (
    <>
      <h2>{props.title}</h2>
      <button
        data-movieid={props.id}
        onClick={handleDeleteMovie}
      >
        Remove
      </button>
    </>
  )
};

export default MovieDetails