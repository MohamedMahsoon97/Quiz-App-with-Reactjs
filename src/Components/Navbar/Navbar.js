import { Link } from "react-router-dom";
// import Link from "@mui/material/Link";
import './Navbar.css'

const Navbar = () => {
	return (
		<div className="navbar">
			<Link to="/exam">Exam</Link>
			<Link to="/StartQuiz">Start Quiz</Link>
                  <Link to="/result">Result</Link>
                  <Link to="/login" className="Login-link">Login</Link>
		</div>
	);
};

export default Navbar;
