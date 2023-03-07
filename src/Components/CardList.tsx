import { useState } from 'react';

function CardList(props: any) {
  return <ul>{props.selectedSets}</ul>;
}

export default CardList;
