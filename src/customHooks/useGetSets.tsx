import { useState, useEffect } from 'react';
import axios from 'axios';
import { SetData } from '../interfaces';

export default function useGetSets() {
  const [data, setData] = useState<SetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.get(`${process.env.REACT_APP_API_URL}/sets`).then(({ data }) => {
          setData(
            data.sort((a: SetData, b: SetData) => {
              return a.releaseDate > b.releaseDate ? -1 : 1;
            })
          );
        });
      } catch (e) {
        setError('Error fetching data');
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  // console.log(data);
  return { data, loading, error };
}
