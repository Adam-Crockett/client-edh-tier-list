import { useState, useEffect } from 'react';
import axios from 'axios';
import { SetData } from '../interfaces';

export default function useGetSets() {
  const [resData, setResData] = useState<SetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/sets`).then(({ data }) => {
          setResData(() => {
            if (Array.isArray(data)) {
              data.sort((a: SetData, b: SetData) => {
                return a.releaseDate > b.releaseDate ? -1 : 1;
              });
              setLoading(false);
              return data;
              console.log('sorted data', data);
            } else {
              console.log('data is not an array', data);
              return data;
            }
          });
        });
      } catch (e) {
        setError('Error fetching data');
      }
    };
    fetchData();
  }, []);
  return { resData, loading, error };
}
