import React from "react";
import { render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

test("renders signup form", () => {
	render(<SignUpForm />);

	const usernameInput = screen.getByLabelText("Username");
	expect(usernameInput).toBeInTheDocument();

	const passwordInput = screen.getByLabelText("Password");
	expect(passwordInput).toBeInTheDocument();

	const submitButton = screen.getByRole("button", { name: "Submit" });
	expect(submitButton).toBeInTheDocument();
});

