import { gql } from 'apollo-boost';

export const GET_ALL_STOPS = gql`{
  stops {
    gtfsId
    name
    lat
    lon
    zoneId
  }
}`;

export const EFFICODE_LAT_LON = {
  "name" : "Eficode HQ",
  "lat" : 60.169415,
  "lon" : 24.925846
};