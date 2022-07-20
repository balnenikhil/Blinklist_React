import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Banner } from "./Banner";

it("checks rendering of banner text prop", async () => {
  render(<Banner heading={"test1"} subtitle={"test2"} imageSrc={"test3"} alternative={"test4"}/>);
  const headElement = screen.getByText('test1');
  expect(headElement).toBeInTheDocument();

  const subElement = screen.getByText('test2');
  expect(subElement).toBeInTheDocument();

  const images = screen.getByRole('img');
  expect(images).toHaveAttribute('src', 'test3');
  expect(images).toHaveAttribute('alt', 'test4');
});
