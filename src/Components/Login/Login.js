import { useState , useContext} from "react";
import './Login.css';
import {Box, Typography} from '@mui/material';
import StartExam from "../StartExam/StartExam";
import {QuizContext} from '../Contexts';

function Login() {
	// User Login info
	const database = {
		fullname: "",
            email: "",
		password: "",
	};
      
	const [formValues , setFormValues] = useState(database);
      const [errorMessages, setErrorMessages] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [sussessLogged, setSussessLogged] = useState(true);
      const [finishExam, setFinishExam] = useState(true);

	const handleChange = (e) => {
            const {name , value} = e.target;
            setFormValues ({...formValues , [name] : value});
	};

      const handleSubmit = (e) => {
            e.preventDefault();
            setErrorMessages(validate(formValues));
            setIsSubmitted(true);
		setSussessLogged(false)
		setFinishExam(false)
      };

      const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

            if (!values.fullname) {
                  errors.fullname = "Fullname is required!";
            }

            if (!values.email) {
                  errors.email = "Email is required!";
            } else if (!regex.test(values.email)){
                  errors.email = "This is not a valid email format!";
            }

            if (!values.password) {
                  errors.password = "Password is required!";
            } else if (values.password.length < 4){
                  errors.password = "Password must be more than 4!";
            } else if (values.password.length > 10){
                  errors.password = "Password must be less than 10!";
            }
            
            return errors;
      }

	// JSX code for login form
	const renderForm = (
		<Box className="form-container">
			<form className="form" onSubmit={handleSubmit}>
                        <Typography variant="h3" fontWeight ="bold" textAlign="center">
                              Login
                        </Typography>
                        <div className="form__input">
					<label className="form__input--label">
						Your FullName{"*"}
                                    <p>{errorMessages.fullname}</p>
					</label>
					<input
						type="text"
						name="fullname"
                                    placeholder="fullname"
						value={formValues.fullname}
						onChange={handleChange}
					/>
				</div>
				<div className="form__input">
					<label className="form__input--label">
						Your email address{"*"}
                                    <p>{errorMessages.email}</p>
					</label>
					<input
						type="email"
						name="email"
                                    placeholder="email"
						value={formValues.email}
						onChange={handleChange}
						
					/>
				</div>
				<div className="form__input">
					<label className="form__input--label">
						Your Password{"*"}
                                    <p>{errorMessages.password}</p>
					</label>
					<input
						type="password"
						name="password"
                                    placeholder="password"
						value={formValues.password}
						onChange={handleChange}
						
					/>
				</div>
				<div className="form__input check__form">
					<input
						type="checkbox"
						className="checkbox"
						id="check-label"
						
					/>
					<label
						className="form__input--label"
						htmlFor="check-label"
					>
						I read and agree the Terms & Conditions
					</label>
				</div>
				<div className="form__button">
					<input type="submit" value="Login" />
				</div>
			</form>
		</Box>
	);
	return (
		<Box className="login-form">
			{Object.keys(errorMessages).length === 0 && isSubmitted ? (
                        <QuizContext.Provider value={{sussessLogged, setSussessLogged , finishExam, setFinishExam}}>
					<StartExam />
				</QuizContext.Provider>
			) : (
				renderForm
			)}
		</Box>
	);
}

export default Login;