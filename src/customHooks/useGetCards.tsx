import { useState, useEffect } from 'react';
import axios from 'axios';
import { SelectedSets, CardData } from '../interfaces';

// Check to send to client
export default function useGetCards({ selectedCodes }: SelectedSets) {
  const [currentCards, setCurrentCards] = useState<CardData[]>([]);
  const [loadingCards, setLoading] = useState(true);
  const [cardError, setCardError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // console.log(selectedCodes);
      try {
        axios
          .get(`${process.env.REACT_APP_API_URL}/cards`, {
            params: { setCodes: selectedCodes }
          })
          .then((fetchedData: any) => {
            setCurrentCards(fetchedData);
            console.log(currentCards);
          });
      } catch (e) {
        setCardError('Error fetching data');
      }
      setLoading(false);
    };
    fetchData();
  }, [selectedCodes]);
  return { currentCards, loadingCards, cardError };
}
