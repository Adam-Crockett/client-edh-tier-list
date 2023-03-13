import { useState } from 'react';
import { CardData } from '../interfaces';

function CardList({ currentCards }: any) {
  console.log(currentCards);
  return <ul>{currentCards}</ul>;
}

export default CardList;
