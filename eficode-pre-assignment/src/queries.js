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

export const GET_TRANSPORT_NAME = gql`
  query ($patternId: String!){
    pattern(id: $patternId) {
      name
    }
  }
`;

export const EFICODE_LAT_LON = {
  "name" : "Eficode HQ",
  "lat" : 60.169415,
  "lon" : 24.925846
};

export const AAKENRAITTI_LAT_LON = {
  "name" : "Aakenraitti",
  "lat" : 60.169458,
  "lon" : 25.037778
};

export const GET_ROUTE = gql`
  query ($fromLat:Float!, $fromLon:Float!, $toLat:Float!, $toLon:Float!) {
    plan(
      from: {lat: $fromLat, lon: $fromLon},
      to: {lat: $toLat, lon: $toLon},
    ) {
      itineraries {
        walkDistance
        duration
        legs {
          mode
          startTime
          endTime
          from {
            lat
            lon
            name
            stop {
              code
              name
              gtfsId
              stoptimesForPatterns(omitNonPickups: true, timeRange: 1800) {
                pattern {
                  code
                }
                stoptimes {
                  scheduledDeparture
                }
              }
            }
          }
          to {
            lat
            lon
            name
            stop {
              patterns {
                code
              }
            }
          }
          trip {
            gtfsId
            pattern {
              code
            }
            tripHeadsign
          }
        }
      }
    }
}`;

export const BUS_NAMES = gql`
query {

  "HSL:31M2:0:01": pattern(id: "HSL:31M2:0:01") {
    name
  }

  "HSL:31M1:0:01": pattern(id: "HSL:31M1:0:01") {
    name
  }

  "HSL:1088B:0:01": pattern(id: "HSL:1088B:0:01") {
    name
  }

  "HSL:1088:0:01": pattern(id: "HSL:1088:0:01") {
    name
  }

  "HSL:31M2:0:01": pattern(id: "HSL:31M2:0:01") {
    name
  }

  "HSL:31M1:0:01": pattern(id: "HSL:31M1:0:01") {
    name
  }

  "HSL:1084:0:01": pattern(id: "HSL:1084:0:01") {
    name
  }

  "HSL:31M2:0:01": pattern(id: "HSL:31M2:0:01") {
    name
  }

  "HSL:31M1:0:01": pattern(id: "HSL:31M1:0:01") {
    name
  }

  "HSL:1085:0:01": pattern(id: "HSL:1085:0:01") {
    name
  }

  "HSL:1086:0:01": pattern(id: "HSL:1086:0:01") {
    name
  }

}
`;