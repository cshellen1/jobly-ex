import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./auth/UserContext";
import Routes from "./routes/Routes";
import NavBar from "./navbar/NavBar";
import JoblyApi from "./api/api";
import jwt from "jsonwebtoken";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
	
	const [token, setToken] = useLocalStorage("JOBLY_TOKEN");
	const [currentUser, setCurrentUser] = useState(null);
	const [applicationIds, setApplicationIds] = useState(new Set([]));

	console.debug(
		"App",
		"currentUser=", currentUser,
		"token=", token
	);

	async function login({ username, password }) {
		try{
			let userToken = await JoblyApi.login(username, password);
			setToken(userToken);
		}
		catch(error){
			console.log(error);
		}
	}

	async function signUp({ username, password, email, lastName, firstName }) {
		try{
			let userToken = await JoblyApi.signUp(username, password, email, lastName, firstName);
			setToken(userToken);
			console.log(token);
		}
		catch(error){
			console.log(error);
		}
	}

	useEffect(() => {
		async function getUser() {
			if (!token) return;

			JoblyApi.token = token;
			let { username } = jwt.decode(token);

			try {
				let user = await JoblyApi.getCurrentUser(username);
				setCurrentUser(user);
				setApplicationIds(new Set(user.applications));
			} catch (error) {
				console.log(error);
			}
		}
		getUser();
	}, [token]);

	function logout() {
		setToken(null);
		setCurrentUser(null);
	}
	
	function hasAppliedToJob(id) {
		return applicationIds.has(id);
	}

	function applyToJob(id) {
		if (hasAppliedToJob(id)) return;
		JoblyApi.applyToJob(currentUser.username, id);
		setApplicationIds(new Set([...applicationIds, id]));
	}

  return (
		<BrowserRouter>
			<div>
				<UserContext.Provider value={{
					token,
					currentUser,
					setCurrentUser, 
					hasAppliedToJob,
					applyToJob
				}}>
					<NavBar logout={logout} />
					<Routes login={login} signUp={signUp} />
				</UserContext.Provider>
			</div>
		</BrowserRouter>
	);
}


export default App;
