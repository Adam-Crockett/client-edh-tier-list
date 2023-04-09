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
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/sets`
        );
        if (Array.isArray(data)) {
          data.sort((a: SetData, b: SetData) => {
            return a.releaseDate > b.releaseDate ? -1 : 1;
          });
          setResData(data);
        } else {
          setError('Error fetching data');
        }
      } catch (e) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { resData, loading, error };
}
