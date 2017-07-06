import React from 'react';
import {Link} from 'react-router-dom';

function Hero(props) {
  let hero = props.hero;
  let battleTag = props.acct.replace('#', '-');
  return (
    <div>
      <Link to={`/character/${battleTag}/${hero.id}`}>{hero.name}</Link>
      <p>class: {hero.class}</p>
      <p>gender: {hero.gender === 0 ? "male" : "female"}</p>
      <p>paragon level: {hero.paragonLevel}</p>
    </div>
  );
}

export default Hero;