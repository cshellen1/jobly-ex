import React from "react";
import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("renders login form", () => {
	render(<LoginForm />);

	const usernameLabel = screen.getByLabelText("Username");
	expect(usernameLabel).toBeInTheDocument();

	const passwordLabel = screen.getByLabelText("Password");
	expect(passwordLabel).toBeInTheDocument();

	const submitButton = screen.getByRole("button", { name: "Submit" });
	expect(submitButton).toBeInTheDocument();
});

