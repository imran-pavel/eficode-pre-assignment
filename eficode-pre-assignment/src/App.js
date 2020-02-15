import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Trips from './components/Trips';
import { useStyles } from './styles';
import { EFICODE_LAT_LON, AAKENRAITTI_LAT_LON } from './queries';

const App = () => {

  let classes = useStyles();
  
  return (
    <Router>
      <Route exact path='/eficode2020' render={() => {
        return (
          <div className={classes.trips}>
            <p className={classes.title}>{ EFICODE_LAT_LON.name } => { AAKENRAITTI_LAT_LON.name }</p>
            <Trips/>
          </div>
        );
      }}/>
    </Router>
  );
}



export default App;
