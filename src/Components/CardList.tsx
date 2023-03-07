import { useState } from 'react';

function CardList(props: any) {
  return (
    <ul>
      {props.selectedSets}
      {/* {props.selectedSets.map((set: any) => {
        return <li>{set.value}</li>;
      })} */}
    </ul>
  );
}

export default CardList;
