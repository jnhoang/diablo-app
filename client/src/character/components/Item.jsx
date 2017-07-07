import React from 'react';

function Item(props) {
  let item = props.data;
  
  return (
    <div>
      <p>id               : {item.id}</p>
      <p>name             : {item.name}</p>
      <p>icon             : {item.icon}</p>
      <p>displayColor     : {item.displayColor}</p>
      <p>tooltip params   : {item.tooltipParams}</p>
    </div>
  );
}

export default Item;