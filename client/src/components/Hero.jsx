import React from 'react';
import {Link} from 'react-router-dom';

function Hero(props) {
  return (
    <div>
      <p>id: {props.hero.id}</p>
      <Link to={ "/character/" + props.hero.id}>{props.hero.name}</Link>
      <p>class: {props.hero.class}</p>
      <p>gender: {props.hero.gender === 0 ? "male" : "female"}</p>
      <p>paragon level: {props.hero.paragonLevel}</p>
    </div>
  );
}

export default Hero;