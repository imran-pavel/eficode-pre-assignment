import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CircularProgress } from '@material-ui/core';

import {
  GET_ROUTE,
  TRANSPORT_OPTIONS,
  EFICODE_LAT_LON,
  AAKENRAITTI_LAT_LON
} from './../queries';
import Trip from './Trip';
import uuid from 'uuid';

const Trips = (props) => {
  const getRouteResult = useQuery(GET_ROUTE, {
    variables: {
      fromLat: EFICODE_LAT_LON.lat,
      fromLon: EFICODE_LAT_LON.lon,
      toLat: AAKENRAITTI_LAT_LON.lat,
      toLon: AAKENRAITTI_LAT_LON.lon
    }
  });
  const transPortNumbers = useQuery(TRANSPORT_OPTIONS);

  if(getRouteResult.loading || transPortNumbers.loading) return <CircularProgress style={{color: '#b2dfdb'}}/>
  let routes = getRouteResult.data.plan.itineraries;
  if(routes) {
    return routes.map((route) => {
      return (
        <Trip key={uuid.v4()} legs={route.legs} transPortNumbers={transPortNumbers.data}/>
      );
    });
  }
  return null;
};

export default Trips;