import React, { useState } from "react";
import { Box } from "@mui/material";

import SearchExerxises from "../components/SearchExerxises";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises , setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExerxises setExercises={setExercises} 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
      exercises={exercises}
        setExercises={setExercises} 
        // setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
