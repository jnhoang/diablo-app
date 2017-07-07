import React from 'react';

function PassiveSkills(props) {
  let skill = props.data.skill;
  console.log(skill);
  return (
    <div>
      <h2>{skill.name}</h2>
      <p>icon             : {skill.icon}</p>
      <p>gained at level  : {skill.level}</p>
      <p>tooltipURL       : {skill.tooltipUrl}</p>
      <p>description      : {skill.description}</p>
      <p>flavor           : {skill.flavor}</p>
    </div>
  );
}

export default PassiveSkills;