import React from "react";
import { render } from "@testing-library/react";
import EditProfileForm from "./EditProfileForm";
import { UserProvider } from "../testUtils";
import { MemoryRouter } from "react-router";

// TODO: woefully under-tested!

it("renders without crashing", function () {
	render(
		<MemoryRouter>
			<UserProvider>
				<EditProfileForm />
			</UserProvider>
		</MemoryRouter>
	);
});

it("matches snapshot", function () {
	const { asFragment } = render(
		<UserProvider>
			<EditProfileForm />
		</UserProvider>
	);
	expect(asFragment()).toMatchSnapshot();
});

it("displays the correct values", function () {
	const { getByLabelText } = render(
		<UserProvider>
			<EditProfileForm />
		</UserProvider>
	);
	expect(getByLabelText("First Name")).toHaveValue("testfirst");
	expect(getByLabelText("Last Name")).toHaveValue("testlast");
	expect(getByLabelText("Email")).toHaveValue("test@test.net");
});
