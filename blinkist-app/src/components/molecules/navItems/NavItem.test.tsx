import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavItem } from "./NavItem";

it("checks rendering of navItem text prop", async () => {
  render(<NavItem navName="test1" imageSrc="test2" alternative="test3"/>);
  const navElement = screen.getByText('test1');
  expect(navElement).toBeInTheDocument();

  const images = screen.getByRole('img');
  expect(images).toHaveAttribute('src', 'test2');
  expect(images).toHaveAttribute('alt', 'test3');
});
