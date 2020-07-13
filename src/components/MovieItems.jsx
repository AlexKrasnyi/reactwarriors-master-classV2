import React from "react";

const MovieItems = props => {
  return (
    <div>
      <p>{props.movie.title}</p>
      <button onClick={props.delMovie.bind(null, props.movie)}>delete</button>
    </div>
  );
};
export default MovieItems;
