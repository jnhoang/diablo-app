import React from 'react';

function basicInfo(props) {
  let char = props.data;
  return (
    <div>
      <h1>Basic Info</h1>
      <p>{char.name}</p>
      <p>{char.class}</p>
      <p>{char.level}</p>
      <p>{char.gender === 0 ? "Male" : "Female"}</p>
      <p>{char.paragonLevel}</p>
    </div>
  );
}

export default basicInfo;