import React from 'react';

function Follower(props) {
  let follower = props.data;
  console.log(follower);

  return (
    <div>
      <p>PlaceHolder for image</p>
      <p>name: {follower.slug}</p>
      <p>level: {follower.level}</p>
    </div>

  );
} 

export default Follower;