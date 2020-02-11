// import React, { useState } from 'react';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { TextField, CircularProgress, Button } from '@material-ui/core';
// import { useQuery } from '@apollo/react-hooks';

// // import {
// //   GET_ALL_STOPS,
// //   EFFICODE_LAT_LON,
// //   GET_ROUTE
// // } from './../queries';

// import {
//   useStyles
// } from './../styles';

// import Trips from './../components/Trips';



// const InputBoxes = () => {
//   const [from , setFrom] = useState('');
//   const [to, setTo] = useState('');
//   const [trips, setTrips] = useState(null);
//   const classes = useStyles();
//   const { loading, data } = useQuery(GET_ALL_STOPS);

//   const onChangeHandler = (setFn) => {
//     return (event, value) => {
//       setTrips(null);
//       setFn(value);
//     };
//   };

//   const onClickHandler = () => {
//     if(!from || !to) return;
//     let tripsComponent = (
//       <div>
//         <hr/>
//         <Trips fromStop={from} toStop={to}/>
//       </div>
//     );
//     setTrips(tripsComponent);
//   };

//   if(loading) return <CircularProgress style={{color: '#b2dfdb'}}/>
//   let modifiedData = { ...data };
//   modifiedData.stops = modifiedData.stops.concat(EFFICODE_LAT_LON);

//   return (
//     <div>
//       <div className={classes.inputBoxes}>
//         <Autocomplete
//             id="from-combo"
//             options={modifiedData.stops.sort((a, b) => a.name.localeCompare(b.name))}
//             getOptionLabel={option => option.name}
//             className={classes.inputBox}
//             groupBy={option => option.name.charAt(0)}
//             onChange={onChangeHandler(setFrom)}
//             renderInput={params => (
//               <TextField {...params} label="From" variant="outlined" fullWidth />
//             )}
//           />
//           <Autocomplete
//             id="to-combo"
//             options={modifiedData.stops.sort((a, b) => a.name.localeCompare(b.name))}
//             getOptionLabel={option => option.name}
//             className={classes.inputBox}
//             groupBy={option => option.name.charAt(0)}
//             onChange={onChangeHandler(setTo)}
//             renderInput={params => (
//               <TextField {...params} label="To" variant="outlined" fullWidth />
//             )}
//           />
//       </div>
//       <div className={classes.buttonContainer}>
//           <Button variant="contained" color="primary" onClick={onClickHandler}>GO!</Button>
//       </div>
//       {
//         trips
//       }
//     </div>

//   );
// };

// export default InputBoxes;