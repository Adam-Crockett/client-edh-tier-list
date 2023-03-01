import { useState, useEffect } from 'react';
import axios from 'axios';

type SetData = {
  _id: string;
  createdAt: string;
  sets: any;
};

function SetList() {
  const [sets, updateSets] = useState<SetData | null>(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/sets`).then(({ data }) => {
      updateSets(data);
    });
  }, []);
  console.log(sets?.sets[0]);
  return (
    <div>
      {sets === null ? (
        <p>Loading Data...</p>
      ) : (
        <div>
          {
            /* typescript-eslint-disable no-implicit-any */
            sets.sets.map((set: any) => (
              <p> {set.code} </p>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default SetList;
