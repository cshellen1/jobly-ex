import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../auth/UserContext';

function NavBar({ logout }) {
	const { currentUser } = useContext(UserContext);

	function loggedIn() {
		
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
				<li className="nav-item">
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/jobs">
						Jobs
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/companies">
						Companies
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/profile">
						Profile
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" onClick={logout} to="/">
						Logout {currentUser.first_name || currentUser.username}
					</NavLink>
				</li>
			</nav>
		);
	};

	function loggedOut() {
		return (
			<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
				<li className="nav-item">
					<NavLink to="/" className="nav-link">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/login">
						login
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/signup">
						Sign Up
					</NavLink>
				</li>
			</nav>
		);
	}

	if (currentUser) {
		return loggedIn();
	} else {
		return loggedOut();
	}
}


export default NavBar