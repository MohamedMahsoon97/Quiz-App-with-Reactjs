import { Box, Button, Container, Typography } from "@mui/material";
import { useContext, useState } from "react";
import FinalScreen from "../FinalScreen/FinalScreen";
import {Questions} from '../QuestionsDemo';
import {QuizContext} from '../Contexts';
import './Exam.css';

const Exam = () => {
      const {finishExam , setFinishExam} = useContext(QuizContext);
      const [ score , setScore ] = useState(0);
      const [currentQuestion , setCurrentQuestions] = useState(0);
      const [optionChoosed , setOptionChoosed] = useState("");
      const [isChoosed , setIsChoosed] = useState(false);

      const chooseOption = (option) => {
            setOptionChoosed(option)
            setIsChoosed(true);
      }

      const nextQuestion = () => {
            if(Questions[currentQuestion].asnwer === optionChoosed){
                  setScore(score + 1)
            }
            setCurrentQuestions(currentQuestion + 1);
            setIsChoosed(false);
      };

      const finalExam = () => {
            if(Questions[currentQuestion].asnwer === optionChoosed){
                  setScore(score + 1)
            }
            setFinishExam(true);
      }
      console.log(score);
      return (
            <Container>
                  {finishExam ? (
                        <QuizContext.Provider value={{score , setScore}}>
                              <FinalScreen />
                        </QuizContext.Provider>
                  ) : (
                        <Container className="exam">
                              <Typography variant="h4" textAlign="center" m={5}>Question {Questions[currentQuestion].id}</Typography>
                  
                              {/* Ques */}
                              <Box  className="question" sx={{marginBottom: "10px", p: 2, border: '1px solid #f6f8fa', backgroundColor: "f6f8fa" ,borderRadius:2, boxShadow: "#f6f8fa 0px 1px 2px 0px, #f6f8fa 0px 2px 4px 2px" , display: "flex" , alignItems: "center" }}>
                                    <Typography variant="h5">Q{Questions[currentQuestion].id}.  </Typography>
                                    <Typography className="ask">{Questions[currentQuestion].prompt}</Typography>
                              </Box>

                              {/* Answers */}
                              <Box className="choises">
                                    <Box mt={1} sx={{ border: '1px solid grey' ,borderRadius:3}}>
                                          <Button 
                                                onClick={() => chooseOption("optionA")} 
                                          >
                                                A . {Questions[currentQuestion].optionA}
                                          </Button>
                                    </Box>
                                    <Box mt={1} sx={{border: '1px solid grey' , borderRadius:3}}>
                                          <Button 
                                                onClick={() => chooseOption("optionB")} 
                                          >
                                                B . {Questions[currentQuestion].optionB}
                                          </Button>
                                    </Box>
                                    <Box mt={1} sx={{border: '1px solid grey' ,borderRadius:3}}>
                                          <Button 
                                                onClick={() => chooseOption("optionC")} 
                                          >
                                                C . {Questions[currentQuestion].optionC}
                                          </Button>
                                    </Box>
                                    <Box mt={1} sx={{ border: '1px solid grey' ,borderRadius:3}}>
                                          <Button 
                                                onClick={() => chooseOption("optionD")}
                                          >
                                                D . {Questions[currentQuestion].optionD}
                                          </Button>
                                    </Box>
                              </Box>

                              <Box mt={5} sx={{ display: "flex" , justifyContent: "center"}} className="next-question">
                                    {currentQuestion === Questions.length - 1 ? (
                                          <Button onClick={finalExam}  variant="contained">
                                                Finish Exam go to Score 
                                          </Button>
                                    ) : (
                                          <Box>
                                                { 
                                                isChoosed && 
                                                      (<Button onClick={nextQuestion}  variant="contained">
                                                      Next Question
                                                      </Button>)
                                                }
                                          </Box>
                                    )}
                                    
                              </Box>
                        </Container>                        
                  )}
            </Container>
            
      )
}

export default Exam;