import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { CardData } from '../interfaces';
import getRemovedCodes from '../helpers/getRemovedCodes';

export default function useGetCards(selectedCodes: string[]) {
  const [currentCards, setCurrentCards] = useState<CardData[]>([]);
  const [loadingCards, setLoading] = useState(true);
  const [cardError, setCardError] = useState('');
  const [previousCodes, setPreviousCodes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/cards`, {
            params: { setCodes: selectedCodes }
          })
          .then((fetchedData: AxiosResponse) => {
            setCurrentCards(fetchedData.data);
          });
      } catch (e) {
        setCardError('Error fetching data');
      }
    };
    if (previousCodes.length > selectedCodes.length) {
      const removedCodes = getRemovedCodes(previousCodes, selectedCodes);
      setCurrentCards((currentCards) => {
        return currentCards.filter((card) => {
          return !removedCodes.includes(card.set);
        });
      });
    } else {
      fetchData();
      setLoading(false);
    }
    setPreviousCodes(selectedCodes);
  }, [selectedCodes, previousCodes]);

  return { currentCards, loadingCards, cardError };
}
