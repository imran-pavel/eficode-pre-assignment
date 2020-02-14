import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

import { useStyles } from './../styles';




const Trip = ( { legs } ) => {

  let classes = useStyles();

  let tableBody = legs.map((leg) => {
    let modeName;
    let duration = (leg.endTime - leg.startTime) / (60 * 1000);
    
    return (
      <TableRow key={uuid.v4()}>
        <TableCell>
            <div>
              <p>{ leg.mode }</p>
            </div>
          </TableCell>
          <TableCell>
            <div>
              <p>{ leg.from.name }</p>
            </div>
          </TableCell>
          <TableCell>
            <div>
              <p>{ leg.to.name }</p>
            </div>
          </TableCell>
      </TableRow>
    );
  });


  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Mode</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableBody
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Trip;