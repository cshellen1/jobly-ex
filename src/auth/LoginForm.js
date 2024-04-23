import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData(formData => ({ ...formData, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
    login(formData);
    history.push("/companies");
	}

	return (
		<form className="col-md-6" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					className="form-control w-25"
          id="username"
          name="username"
					value={formData.username}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control w-25"
          id="password"
          name="password"
					value={formData.password}
					onChange={handleChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
}

export default LoginForm;
