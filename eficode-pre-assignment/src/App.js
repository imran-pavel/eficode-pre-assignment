import React from 'react';

import Trips from './components/Trips';
import { useStyles } from './styles';
import { EFICODE_LAT_LON, AAKENRAITTI_LAT_LON } from './queries';

const App = () => {

  let classes = useStyles();
  
  return (
    <div className={classes.trips}>
      <h1>
        Travel Route Options from { EFICODE_LAT_LON.name } to { AAKENRAITTI_LAT_LON.name }
      </h1>
      <Trips/>
    </div>
  );
}



export default App;
