import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  trips: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  tableContainer: {
    margin: 20,
    width: '70%'
  },
  table: {
    backgroundColor: 'rgb(255, 240, 174)'
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5
  },
  [theme.breakpoints.down(415)]: {
    tableContainer: {
      width: '95%'
    },
    title: {
      fontSize: 20
    }
  }
}));

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'rgb(182, 170, 114)',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  body: {
    textAlign: 'center',
    fontSize: 15
  },
  [theme.breakpoints.down(415)]: {
    body: {
      fontSize: 12
    }
  }
}))(TableCell);



export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgb(216, 202, 140)',
    },
  },
}))(TableRow);