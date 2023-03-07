import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';

function SetList(props: any) {
  const [selectedSet, setSelectedSet] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof selectedSet>) => {
    const {
      target: { value }
    } = event;

    setSelectedSet(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    props.onSelect(typeof value === 'string' ? value.split(',') : value);
  };

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
              <FormControl sx={{ m: 1, width: 1000 }}>
                <InputLabel id="multiple-chip-label">Sets</InputLabel>
                <Select
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        width: '80%',
                        '& .MuiMenu-list': {
                          display: 'flex',
                          flexFlow: 'wrap'
                        }
                      }
                    }
                  }}
                  labelId="multiple-chip-label"
                  id="multiple-chip"
                  multiple
                  value={selectedSet}
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => {
                    return (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {
                          /* typescript-eslint-disable no-implicit-any */
                          selected.map((value: string) => (
                            <Chip key={value} label={value} />
                          ))
                        }
                      </Box>
                    );
                  }}
                >
                  {
                    /* typescript-eslint-disable no-implicit-any */
                    props.sets.sets.map((set: any) => (
                      <MenuItem key={set.id} value={set.name}>
                        <img
                          width="50"
                          height="50"
                          id={set.id}
                          title={set.name}
                          src={set.icon_svg_uri}
                          alt={set.code}
                        />
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default SetList;
