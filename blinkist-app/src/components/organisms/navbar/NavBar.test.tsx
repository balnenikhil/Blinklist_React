import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { NavBar } from "./NavBar";

it("checks rendering of the component", () => {
  render(
    <Router>
      <NavBar/>
    </Router>,
  );

  const exploreElement = screen.getByText('Explore');
  expect(exploreElement).toBeInTheDocument();

  userEvent.click(exploreElement);
  expect(exploreElement).toBeInTheDocument();

  const libraryElement = screen.getByText('My Library');
  expect(libraryElement).toBeInTheDocument();

  userEvent.click(libraryElement);
  expect(libraryElement).toBeInTheDocument();
});
