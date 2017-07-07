import React   from 'react';
import Item    from './Item';


function Items(props) {
  let items = props.data;
  return (
    <div>
      {items.neck        && <Item data={items.neck}         />}
      {items.rightFinger && <Item data={items.rightFinger}  />}
      {items.waist       && <Item data={items.waist}        />}
      {items.leftFinger  && <Item data={items.leftFinger}   />}
      {items.mainHand    && <Item data={items.mainHand}     />}
      {items.torso       && <Item data={items.torso}        />}
      {items.feet        && <Item data={items.feet}         />}
      {items.hands       && <Item data={items.hands}        />}
      {items.shoulders   && <Item data={items.shoulders}    />}
      {items.legs        && <Item data={items.legs}         />}
      {items.bracers     && <Item data={items.bracers}      />}
      {items.head        && <Item data={items.head}         />}
    </div>
  );
}

export default Items;