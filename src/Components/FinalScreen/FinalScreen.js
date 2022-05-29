import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import {QuizContext} from '../Contexts';

const FinalScreen = () => {
      const {score , setScore} = useContext(QuizContext);
      return (
            <Box sx={{p:5, border : "1px solid #eee" , backgroundColor : "#f7f7f7" , borderRadius:3}}>
                  <Typography variant='h3' color="#13b113">Total Score !</Typography>
                  <Typography mt={5} variant='h3' textAlign="center" color="#13b113">{score} / 5 </Typography>
            </Box>
      )
}

export default FinalScreen;