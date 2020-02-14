import React from 'react';
import moment from 'moment';
import uuid from 'uuid';
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow
} from '@material-ui/core';

import { useStyles } from './../styles';
import {
  StyledTableCell,
  StyledTableRow
} from './../styles';




const Trip = ( { legs } ) => {

  let classes = useStyles();

  let tableBody = legs.map((leg) => {
    let startMoment = moment.unix(leg.startTime/1000);
    let endMoment = moment.unix(leg.endTime/1000);
    
    
    return (
      <TableRow key={uuid.v4()}>
        <StyledTableCell>
          <p style={{fontWeight: 'bold'}}>{ leg.mode }</p>
          <p>{ startMoment.hour() < 10 ? '0' + startMoment.hour() : startMoment.hour() }:{ startMoment.minute() < 10 ? '0' + startMoment.minute() : startMoment.minute()} - { endMoment.hour() < 10 ? '0' + endMoment.hour() : endMoment.hour() }:{ endMoment.minute() < 10 ? '0' + endMoment.minute() : endMoment.minute()}</p>
        </StyledTableCell>
        <StyledTableCell>
          <p style={{fontWeight: 'bold'}}>{ leg.from.name }</p>
        </StyledTableCell>
        <StyledTableCell>
          <p style={{fontWeight: 'bold'}}>{ leg.to.name }</p>
        </StyledTableCell>
      </TableRow>
    );
  });


  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table}>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>
              <p>Mode</p>
            </StyledTableCell>
            <StyledTableCell>
              <p>From</p>
            </StyledTableCell>
            <StyledTableCell>
              <p>To</p>
            </StyledTableCell>
          </StyledTableRow>
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