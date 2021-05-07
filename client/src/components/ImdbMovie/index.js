import React from "react";

const ImdbMovie = ({ movieInfo }) => {
  console.log('movie info in ImdbMovie component', movieInfo);

  return (
    <>

      <h1>{movieInfo.Title}</h1>

    </>
  )

};

export default ImdbMovie;