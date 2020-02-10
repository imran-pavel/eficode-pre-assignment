import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  inputBoxes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  inputBox: {
    margin: 20,
    width: 300,
    background: 'white',
    borderRadius: 10
  }
});