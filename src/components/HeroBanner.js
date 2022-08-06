import React from 'react'
import {Box , Stack , Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
  return (
    <>

{/* mb-- margin at bottom  */}
{/* mt = margi at top */}

  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>

    {/* opacity: '0.1' = change color light  */}

    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>

  
    </>
  )
}
export default HeroBanner;


// ----------------------------


// Bootstrap design 

// import React from 'react';
// import { Box, Stack, Typography } from '@mui/material';

// import HeroBannerImage from '../assets/images/banner.png';

// const HeroBanner = () => (

// <>
//     <div className="row">
//     <div className="col-lg-6 col-sm-12" style={{textAlign:'left'  }}>
//         <h3 style={{position : 'relative' ,top : '300px'}}>Fitness Club</h3>
//         <h1 style={{position : 'relative' ,top : '350px'}}>Sweat, Smile <br /> And Repeat</h1>
//         <p style={{position : 'relative' ,top : '350px'  , padding: '5px 5px 5px 5px'}}> Check out the most effective exercises personalized to you</p>
//     </div>
//     <div className="col-lg-6 col-sm-12">
//     <img src={HeroBannerImage} alt="hero-banner"  />
//     </div>
// </div>

// </>
// );

// export default HeroBanner;




 ///--------My desigen   ------->>>>



// <section  style={{backgroundImage:`url(${bg})` , textAlign:'center' , color : 'white'}} >

// <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
//   <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
//   <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
//     Sweat, Smile <br />
//     And Repeat
//   </Typography>
//   <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
//     Check out the most effective exercises personalized to you
//   </Typography>

//   <div style={{marginTop : '50px'}}>
//     <a href="#exercises" style={{ marginTop: '100px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
//   </div>
//   {/* <Stack style={{textAlign:"center"}} >
//   </Stack> */}

//   {/* opacity: '0.1' = change color light  */}

//   <Typography fontWeight={600} color="white" sx={{ opacity: '0.4', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
//     Exercise
//   </Typography>
//   {/* <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" /> */}
// </Box>
// </section>
