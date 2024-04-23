import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from '../homepage/Homepage';
import LoginForm from '../auth/LoginForm';
import SignUpForm from "../auth/SignUpForm";
import Companies from '../companies/Companies';
import Jobs from '../jobs/Jobs';
import Company from '../companies/Company';
import PrivateRoute from './PrivateRoute';
import EditProfileForm from '../auth/EditProfileForm';



function Routes({login, signUp}) {
  return (
		<div>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>

				<Route exact path="/login">
					<LoginForm login={login} />
				</Route>

				<Route exact path="/signup">
					<SignUpForm signUp={signUp} />
				</Route>

				<PrivateRoute exact path="/companies">
					<Companies />
				</PrivateRoute>

				<PrivateRoute exact path="/companies/:handle">
					<Company />
				</PrivateRoute>

				<PrivateRoute exact path="/jobs">
					<Jobs />
				</PrivateRoute>

				<PrivateRoute exact path="/profile">
					<EditProfileForm />
				</PrivateRoute>

				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default Routes; 