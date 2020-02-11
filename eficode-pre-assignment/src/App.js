import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  TextField,
  CircularProgress,
  Button,
  Paper,

  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

import InputBoxes from './components/InputBoxes';
import {
  EFICODE_LAT_LON,
  AAKENRAITTI_LAT_LON,
  GET_ROUTE
} from './queries';

const App = () => {
  const result = useQuery(GET_ROUTE, {
    variables: {
      fromLat: EFICODE_LAT_LON.lat,
      fromLon: EFICODE_LAT_LON.lon,
      toLat: AAKENRAITTI_LAT_LON.lat,
      toLon: AAKENRAITTI_LAT_LON.lon
    }
  });

  if(result.loading) return <CircularProgress style={{color: '#b2dfdb'}}/>;
  console.log(result.data);
  return (
    <div>
      Loaded
    </div>
  );
}



export default App;
