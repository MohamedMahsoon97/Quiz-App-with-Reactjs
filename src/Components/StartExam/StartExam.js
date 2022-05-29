import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { QuizContext } from "../Contexts";
import Exam from "../Exam/Exam";

const StartExam = () => {
	const { sussessLogged, setSussessLogged } = useContext(QuizContext);
	return (
            <Box>
                  { !sussessLogged ? (
                        <Box display="flex" flexDirection="column">
                              <Typography variant="h4" mb={5}>
                                    Your Exam Today
                              </Typography>
                              <Button 
                                    variant="contained" 
                                    size="large"
                                    onClick = {() => {
                                          setSussessLogged(true);
                                    }}
                              >
                                    Start Exam
                              </Button>
                        </Box>
                  ) : (
                        <Exam />
                  ) }
            </Box>
		
	);
};

export default StartExam;