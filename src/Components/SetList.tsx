import { useState } from 'react';
// import useGetSets from '../customHooks/useGetSets';
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
  // const sets = useGetSets();
  const [setName, setSetName] = useState<string[]>([]);
  const handleChange = (event: any) => {
    console.log(event);
    const {
      target: { value }
    } = event;
    // if (Array.isArray(value)) {
    //   value.map((id) => {
    //     props.setSelectedSets(
    //       props.selectedSets.has(id)
    //         ? props.selectedSets.delete(id)
    //         : props.selectedSets.add(id)
    //     );
    //   });
    //   console.log(props.selectedSets);
    // }
    setSetName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  // const handleSetID = (event: any) => {
  //   console.log(event);
  //   setSetID([]);
  // };

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
                  value={setName}
                  onChange={handleChange}
                  name="id"
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => {
                    return (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {
                          /* typescript-eslint-disable no-implicit-any */
                          selected.map((value: any) => (
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
                      <MenuItem key={set.id} value={set.id}>
                        <img
                          width="50"
                          height="50"
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
