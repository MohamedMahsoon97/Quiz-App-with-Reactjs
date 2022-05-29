import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState , useContext} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from './Components/Login/Login';
import Exam from './Components/Exam/Exam';
import Result from './Components/Result/Result';
import StartQuiz from "./Components/StartExam/StartExam";
import {QuizContext} from './Components/Contexts';

import './App.css';

const App = () => {
    
    return ( 
        <Router>
        {/* <Navbar /> */}
            <Switch>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/StartQuiz">
                    <StartQuiz />
                </Route>
                <Route path="/exam">
                    <Exam />
                </Route>
                <Route path="/result">
                    <Result />
                </Route>
            </Switch>

        </Router>
    )
}

export default App;