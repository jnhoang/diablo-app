import React from 'react';

function ActiveSkill(props) {
  let skill = props.data.skill;
  console.log(skill)
  return (
    <div>
      <h1>Skill</h1>
      <h2>{skill.name}</h2>
      <p>icon               : {skill.icon}</p>
      <p>gained at level    : {skill.level}</p>
      <p>category           : {skill.categorySlug}</p>
      <p>tooltipURL         : {skill.tooltipUrl}</p>
      <p>description        : {skill.description}</p>
      <p>simpleDescription  : {skill.simpleDescription}</p>

      <h1>Rune</h1>
    </div>
  );
}

export default ActiveSkill;