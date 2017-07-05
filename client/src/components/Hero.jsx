import React from 'react';

function Hero (props) {
  return (
    <div>
      <p>id: {props.hero.id}</p>
      <p>name: {props.hero.name}</p>
      <p>class: {props.hero.class}</p>
      <p>gender: {props.hero.gender === 0 ? "male" : "female"}</p>
      <p>paragon level: {props.hero.paragonLevel}</p>
    </div>
  );
}

export default Hero;