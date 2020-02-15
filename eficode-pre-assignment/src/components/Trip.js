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
import {
  AAKENRAITTI_LAT_LON,
  EFICODE_LAT_LON,
} from './../queries';


const replaceMentRegex = /([\w\d]+)(:)/g;

const Trip = ( { legs, transPortNumbers } ) => {

  let classes = useStyles();

  let tableBody = legs.map((leg) => {
    let startMoment = moment.unix(leg.startTime/1000);
    let endMoment = moment.unix(leg.endTime/1000);
    let options = [];
    let from, to;

    if(leg.from.name === 'Origin') from = EFICODE_LAT_LON.name;
    else from = leg.from.name;
    if(leg.to.name === 'Destination') to = AAKENRAITTI_LAT_LON.name;
    else to = leg.to.name;

    if(leg.mode !== 'WALK' && leg.from.stop && leg.from.stop.stoptimesForPatterns && leg.from.stop.stoptimesForPatterns.length > 0){
      leg.from.stop.stoptimesForPatterns.forEach((option) => {
        let optionKey = option.pattern.code.replace(replaceMentRegex, '$1_');
        if(transPortNumbers[optionKey]) options.push(transPortNumbers[optionKey].name);
      });
    }
    if(options.length>0){
      options = options.map((option) => <p key={uuid.v4()}>{option}</p>);
    }
    else options = null;
    
    
    return (
      <TableRow key={uuid.v4()}>
        <StyledTableCell>
          <p style={{fontWeight: 'bold'}}>{ leg.mode }</p>
          <p>{ startMoment.hour() < 10 ? '0' + startMoment.hour() : startMoment.hour() }:{ startMoment.minute() < 10 ? '0' + startMoment.minute() : startMoment.minute()} - { endMoment.hour() < 10 ? '0' + endMoment.hour() : endMoment.hour() }:{ endMoment.minute() < 10 ? '0' + endMoment.minute() : endMoment.minute()}</p>
        </StyledTableCell>
        <StyledTableCell>
          <p style={{fontWeight: 'bold'}}>{ from }</p>
          {options}
        </StyledTableCell>
        <StyledTableCell>
          <p style={{fontWeight: 'bold'}}>{ to }</p>
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