import React from 'react';

import Trips from './components/Trips';
import { useStyles } from './styles';

const App = () => {

  let classes = useStyles();
  
  return (
    <div className={classes.trips}>
      <Trips/>
    </div>
  );
}



export default App;
