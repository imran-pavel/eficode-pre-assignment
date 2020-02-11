import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TextField, CircularProgress, Button } from '@material-ui/core';

import {
  GET_ROUTE,
  GET_TRANSPORT_NAME
} from './../queries';

const Trips = ({ fromStop, toStop }) => {
  console.log('fromStop', fromStop);
  const getRouteResult = useQuery(GET_ROUTE, {
    variables: {
      fromLat: fromStop.lat,
      fromLon: fromStop.lon,
      toLat: toStop.lat,
      toLon: toStop.lon
    }
  });

  if(getRouteResult.loading) return <CircularProgress style={{color: '#b2dfdb'}}/>
  console.log('Result', getRouteResult.data);
  return <CircularProgress style={{color: '#b2dfdb'}}/>;
};

export default Trips;