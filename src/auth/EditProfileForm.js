import React, { useContext, useState } from "react";
import JoblyApi from "../api/api";
import UserContext from "./UserContext";

function EditProfileForm() {
	const { currentUser, setCurrentUser } = useContext(UserContext);

	const [formData, setFormData] = useState({
		email: currentUser.email,
		password: "",
		lastName: currentUser.lastName,
    firstName: currentUser.firstName,
    username: currentUser.username,
	});

  async function updateUser(data) {
    try {
      const updatedUser = await JoblyApi.updateUser(currentUser.username, data);
      setCurrentUser(updatedUser);
    } catch (error) {
      console.log(error);
    }
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	}

	function handleSubmit(e) {
    e.preventDefault();
    let updateData = {
      email: formData.email,
      password: formData.password,
      lastName: formData.lastName,
      firstName: formData.firstName,
    }
    try{
      updateUser(updateData);
    }
    catch(error){
      console.log(error);
    }
    setFormData((f) => ({ ...f, password: "" }));
    alert("Profile Updated");
	}

	return (
		<form className="col-md-6" onSubmit={handleSubmit}>
			<div className="form-group">
				<label>Username</label>
				<p className="form-control-plaintext">{formData.username}</p>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					className="form-control w-25"
					id="firstName"
					name="firstName"
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
					name="lastName"
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
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Confirm password to make changes</label>
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
				Edit
			</button>
		</form>
	);
}

export default EditProfileForm;
