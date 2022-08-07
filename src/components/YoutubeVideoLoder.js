import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import { Stack , Box ,Typography , Grid} from '@mui/material';


function newFunction() {
    return <div style={{ marginLeft: '40px', marginRight: '40px' }}>
        <Skeleton variant="rectangular" width={250} height={250} />
        <Box sx={{ pt: 0.5 }}>
            <Skeleton /> <Skeleton width="60%" />
        </Box>
    </div>;
}


const YoutubeVideoLoder = () => {
  return (

    <>

    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
      Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' , mr:'70px'}}></span> Exercise videos
    </Typography>
  
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">


<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 , lg:4}}>
  <Grid  lg={3}>
  {newFunction()}
  </Grid>
  <Grid  lg={3}>
  {newFunction()}
  </Grid>
  <Grid  llg={3}>
  {newFunction()}
  </Grid>
  <Grid  lg={3}>
  {newFunction()}
  </Grid>
</Grid>
{/* 
    <Stack sx={{opacity:{xs:'0.0',lg:'10'}}}>
   
    </Stack>
    <Stack sx={{opacity:{xs:'0.0',lg:'10'}}}>
    {newFunction()}
    </Stack>
    <Stack sx={{opacity:{xs:'0.0',lg:'10'}}}>
    {newFunction()}
    </Stack>
    {newFunction()}
    {newFunction()} */}
 
  </Stack>
    </>
  )
}

export default YoutubeVideoLoder

