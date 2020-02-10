import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, CircularProgress } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import {
  GET_ALL_STOPS
} from './../queries';

import {
  useStyles
} from './../styles';



const InputBoxes = () => {
  const classes = useStyles();
  const { loading, data } = useQuery(GET_ALL_STOPS);

  if(loading) return <CircularProgress style={{color: '#b2dfdb'}}/>
  console.log('data', data);

  

  return (
    <div className={classes.inputBoxes}>
      <Autocomplete
          id="from-combo"
          options={data.stops.sort((a, b) => a.name.localeCompare(b.name))}
          getOptionLabel={option => option.name}
          className={classes.inputBox}
          groupBy={option => option.name.charAt(0)}
          renderInput={params => (
            <TextField {...params} label="From" variant="outlined" fullWidth />
          )}
        />
        <Autocomplete
          id="to-combo"
          options={data.stops.sort((a, b) => a.name.localeCompare(b.name))}
          getOptionLabel={option => option.name}
          className={classes.inputBox}
          groupBy={option => option.name.charAt(0)}
          renderInput={params => (
            <TextField {...params} label="To" variant="outlined" fullWidth />
          )}
        />
    </div>

  );
};

export default InputBoxes;