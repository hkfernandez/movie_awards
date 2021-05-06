//import react from 'react';

const SubmissionForm = () => {
  return (
    <>
      <h1>Submission Form</h1>
      <form action="/imdb/findMovie" method="POST">
        <div>
          <label>Movie Title:</label>
          <input type="text" name="movieName" required />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  )
}

export default SubmissionForm;