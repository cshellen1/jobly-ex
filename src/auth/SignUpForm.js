import React from 'react'
import { useState } from "react";

function SignUpForm({signUp}) {
  const [formData, setFormData] = useState({
		username: "",
		email: "",
    password: "",
    lastName: "",
    firstName: "",
	});

  function handleChange(e) {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		signUp(formData);
	}

  return (
		<form className="col-md-6" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					className="form-control w-25"
          id="firstName"
          name='firstName'
					value={formData.firstName}
					onChange={handleChange}
        />
      </div>
      <div className="form-group">
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					className="form-control w-25"
          id="lastName"
          name='lastName'
					value={formData.lastName}
					onChange={handleChange}
        />
      </div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="text"
					className="form-control w-25"
          id="email"
          name='email'
					value={formData.email}
					onChange={handleChange}
				/>
      </div>
      <div className="form-group">
				<label htmlFor="username">Username</label>
				<input
					type="text"
					className="form-control w-25"
          id="username"
          name='username'
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
          name='password'
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

export default SignUpForm