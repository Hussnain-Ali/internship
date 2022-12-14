import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  const { title, director, releaseDate, openingText } = props;
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h2>{director}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
