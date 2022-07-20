import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ExtendedNav } from "./ExtendedNav";

it("checks rendering of the component", () => {
  render(
        <Router>
		<ExtendedNav/>
        </Router>
  );

  const textElement = screen.getByText('Entrepreneurship');
  expect(textElement).toBeInTheDocument();

  userEvent.click(textElement);
  expect(textElement).toBeInTheDocument();
});
