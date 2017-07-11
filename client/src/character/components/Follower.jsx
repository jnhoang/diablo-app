import React       from 'react';
import PropTypes   from 'prop-types';

function Follower(props) {
  let follower = props.data;

  return (
    <div>
      <p>PlaceHolder for image</p>
      <p>name   : {follower.slug}</p>
      <p>level  : {follower.level}</p>
    </div>
  );
} 

Follower.propTypes = {
  data: {
    slug    : PropTypes.string
  , level   : PropTypes.number
  }
}

export default Follower;