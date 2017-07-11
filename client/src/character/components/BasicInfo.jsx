import React       from 'react';
import PropTypes   from 'prop-types';

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

BasicInfo.propTypes = {
  data: {
    name           : PropTypes.string
  , class          : PropTypes.string
  , level          : PropTypes.number
  , gender         : PropTypes.number
  , paragonLevel   : PropTypes.number
  }.isRequired
}

export default basicInfo;