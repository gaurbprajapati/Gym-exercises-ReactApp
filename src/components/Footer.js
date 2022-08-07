import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ ml:'600px' }} flexWrap="wrap" px="40px" pt="24px">
      {/* <img src={Logo} alt="logo" style={{ width: '50px', height: '50px' }} /> */}
    </Stack>

      <Typography  variant="h5" sx={{ position:'absolute' , fontSize: { lg: '20px', xs: '10px' } }} textAlign="center"  ></Typography>

    <Typography variant="h5" sx={{ fontSize: { lg: '20px', xs: '10px' } }} mt="20px" textAlign="center" pb="20px">Made with Gaurav Prajapati ❤️ <br />


    <span sx={{ fontSize: { lg: '7px', xs: '4px'  } }}  style={{color : 'lightcoral'}} >
     by Help JavaScript Mastery
     </span> 
     
    </Typography>

    <Typography sx={{justifyContent:"flex-end",alignItems: 'center', pb : '30px'}}  >
    <TwitterIcon sx={{ml:{lg:'640px' , xs: '110px', sm: '300px' ,md: '500px'}}}  />
    <InstagramIcon style={{marginLeft:'60px'}}/>
    <FacebookIcon style={{marginLeft:'60px'}} />
    </Typography>

  </Box>
);

export default Footer;