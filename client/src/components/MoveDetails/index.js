const MovieDetails = props => {
  console.log('props passed to MovieDetails component', props);
  return (
    <>
      <h2>{props.title}</h2>
      <button>Remove</button>
    </>
  )
};

export default MovieDetails