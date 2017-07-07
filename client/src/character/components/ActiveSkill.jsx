import React from 'react';

function ActiveSkill(props) {
  let skill = props.data.skill;
  let rune  = props.data.rune;

  return (
    <div>
      {skill &&
        <div>
          <h2>{skill.name}</h2>
          <p>icon               : {skill.icon}</p>
          <p>gained at level    : {skill.level}</p>
          <p>category           : {skill.categorySlug}</p>
          <p>tooltipURL         : {skill.tooltipUrl}</p>
          <p>description        : {skill.description}</p>
          <p>simpleDescription  : {skill.simpleDescription}</p>
        </div>
      }
      {rune &&
        <div>
          <h1>Rune</h1>
          <h2>{rune.name}</h2>
          <p>name             : {rune.name}</p>
          <p>gained at level  : {rune.level}</p>
          <p>description      : {rune.description}</p>
          <p>tooltip params   : {rune.tooltipParams}</p>
        </div>
      }
    </div>
  );
}

export default ActiveSkill;