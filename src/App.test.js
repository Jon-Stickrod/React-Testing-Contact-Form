import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing",  () => {
    const container = render(<App />);
    console.log("bk: app.test.js: render test: container: ", container);
});
test("if form can be filled out", () => {
  const { getByText } = render(<App />);
  const firstName = getByText(/first name/i);
  const lastName = getByText(/last name/i);
  const email = getByText(/email/i);
  const message = getByText(/message/i);


  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});

test(" if buttton can be clicked", () => {
  const { getByText } = render(<ContactForm />);
  const btn = getByText(/submit/i);
});



