// import React, { useState } from 'react';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import moment from 'moment';
// import uuid from 'uuid';
// import { useQuery } from '@apollo/react-hooks';

// import {
//   TextField,
//   CircularProgress,
//   Button,
//   Paper,
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell
// } from '@material-ui/core';


// const Trip = ( { legs } ) => {

//   legs.map((leg) => {
//     let modeName;
//     let duration = (leg.endTime - leg.startTime) / (60 * 1000);
    
//     <TableCell>
//       <div>
//         <p>{leg.mode}</p>
//         <p>{duration} min(s)</p>
//       </div>
//     </TableCell>
//     <TableCell>
//       <div>
//         <p>{leg.from.name}</p>
//       </div>
//     </TableCell>
//     <TableCell>
//       <div>
//         <p>{leg.to.name}</p>
//       </div>
//     </TableCell>
//   }));


//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Mode</TableCell>
//             <TableCell>From</TableCell>
//             <TableCell>To</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>

//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Trip;