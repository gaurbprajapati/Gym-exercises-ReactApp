import React from 'react';
import { Stack } from '@mui/material';
// import { InfinitySpin } from 'react-loader-spinner';

import CircularProgress  from '@mui/material/CircularProgress';
// import Skeleton from '@mui/material/Skeleton';


const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    {/* <InfinitySpin color="grey" /> */}
    {/* <Skeleton variant="rectangular" width={210} height={118} />
    <Skeleton variant="rectangular" width={210} height={118} />
    <Skeleton variant="rectangular" width={210} height={118} /> */}
    <CircularProgress color='grey'/>
  </Stack>
);

export default Loader;