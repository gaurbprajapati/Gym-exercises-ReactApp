import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/weightlifter.png";
// import {  } from "@material-ui/core";\



const Navbar = () => {
  return (
    <>
    
    <section style={{backgroundColor:"#2C3333" , padding:'10px'}}  >

      <Stack direction="row"  sx={{ gap: { sm: '123px', xs: '40px' }, justifyContent: 'none' }} px="20px">
        <Link to="/">
        {/* <h4 style={{postion:'absolute', top: '10px'}} >BUILT OWN</h4> */}
          <img src={Logo} alt="logo"  style={{width: '48px', height: '48px', margin: '0px 20px'}}/>
        </Link>
        

        <Stack
        sx={{ fontSize:{lg:'1200px'} , opacity: {xs:'0.0',lg: '10'} , position : 'absolute' , left:'180px',top:'25px' }}
        direction="row"
      // gap="5px"
      fontFamily="Alegreya"
      fontSize="10px"
      alignItems="flex-end" >
      <h4 style={{color:'gold' }} >YogaYata</h4>
        </Stack>



{/* ---------------------------------------------- */}

        <Stack direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end" 
      sx={{ml:{lg:'900px',sm:'300px',xs:'10px'}}}
      >
          <Link to="/" style={{ textDecoration: 'none', color: 'gold', borderBottom: '3px solid #FF2625' }}>Home</Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: 'gold', borderBottom: '3px solid #FF2625' }}>Exercises</a>
        </Stack>

{/* ------------------------------------- */}

        
      </Stack>

    </section>
    </>
  );
};

export default Navbar;