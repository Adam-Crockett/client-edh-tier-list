import { useState, useEffect } from 'react';
import axios from 'axios';

type SetData = {
  _id: string;
  createdAt: string;
  sets: any;
};

export default function useGetSets() {
  const [sets, updateSets] = useState<SetData | null>(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sets`).then(({ data }) => {
      updateSets(data);
      console.log(data);
    });
  }, []);
  return sets;
}
