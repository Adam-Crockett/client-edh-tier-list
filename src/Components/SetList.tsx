import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import MultiselectSets from './MultiselectSets';
import Typography from '@mui/material/Typography';

function SetList(props: any) {
  const [selectedSet, setSelectedSet] = useState<string[]>([]);

  return (
    <div>
      {props.sets === null ? (
        <p>Loading Data...</p>
      ) : (
        <div>
          <Accordion>
            <AccordionSummary>
              <Typography>Set List</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MultiselectSets></MultiselectSets>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default SetList;
