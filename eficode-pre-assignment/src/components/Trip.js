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
    let modeName;
    let duration = (leg.endTime - leg.startTime) / (60 * 1000);
    
    return (
      <TableRow key={uuid.v4()}>
        <StyledTableCell>
          <p>{ leg.mode }</p>
        </StyledTableCell>
        <StyledTableCell>
          <p>{ leg.from.name }</p>
        </StyledTableCell>
        <StyledTableCell>
          <p>{ leg.to.name }</p>
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