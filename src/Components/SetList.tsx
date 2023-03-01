import { useState, useEffect } from 'react';
import axios from 'axios';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Typography from '@mui/material/Typography';

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
          <Accordion>
            <AccordionSummary>
              <Typography>Set List</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                /* typescript-eslint-disable no-implicit-any */
                sets.sets.map((set: any) => (
                  <img
                    src={set.icon_svg_uri}
                    alt={set.code}
                    // width="150"
                    height="50"
                    width="50"
                  />
                ))
              }
            </AccordionDetails>
          </Accordion>
        </div>
        // <div>
        //   {
        //     /* typescript-eslint-disable no-implicit-any */
        //     sets.sets.map((set: any) => (
        //       <img
        //         src={set.icon_svg_uri}
        //         alt={set.code}
        //         // width="150"
        //         height="50"
        //         width="50"
        //       />
        //     ))
        //   }
        // </div>
      )}
    </div>
  );
}

export default SetList;
