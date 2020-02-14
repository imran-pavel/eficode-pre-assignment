import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CircularProgress } from '@material-ui/core';

import {
  GET_ROUTE,
  BUS_NAMES,
  EFICODE_LAT_LON,
  AAKENRAITTI_LAT_LON
} from './../queries';
import Trip from './Trip';

const Trips = (props) => {
  const getRouteResult = useQuery(GET_ROUTE, {
    variables: {
      fromLat: EFICODE_LAT_LON.lat,
      fromLon: EFICODE_LAT_LON.lon,
      toLat: AAKENRAITTI_LAT_LON.lat,
      toLon: AAKENRAITTI_LAT_LON.lon
    }
  });
  const getBusNames = useQuery(BUS_NAMES);

  if(getRouteResult.loading || getBusNames.loading) return <CircularProgress style={{color: '#b2dfdb'}}/>
  console.log('Result', getRouteResult.data);
  console.log('Bus Names', getBusNames.data);
  let routes = getRouteResult.data.plan.itineraries;
  console.log(routes);
  if(routes) {
    return routes.map((route) => {
      console.log('route', route);
      return (
        <>
          <Trip legs={route.legs}/>
        </>
      );
    });
  }
  return null;
};

export default Trips;