import React  from 'react';
import {Link} from 'react-router-dom';

function Hero(props) {
  let hero            = props.hero;
  let battleTag       = props.acct.replace('#', '-');
  let gender          = hero.gender === 0 ? "male" : "female";
  let backgroundLink  = `url('${process.env.PUBLIC_URL}/static/img/class-head/${hero.class}_${gender}.png')`
  
  return (
    <div>
      <div 
        className="class-portrait"
        style={{ backgroundImage: backgroundLink }}>
      </div>
      <Link to={`/character/${ battleTag }/${ hero.id }`}>{hero.name}</Link>
      <p>class          : {hero.class}</p>
      <p>level          : {hero.level}</p>
      <p>paragon level  : {hero.paragonLevel}</p>
    </div>
  );
}

export default Hero;