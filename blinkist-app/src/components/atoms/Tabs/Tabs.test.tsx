import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import BookTabs from "./Tabs";

it("checks rendering of the component", () => {
  render(
		<BookTabs/>,
  );

  const textElement = screen.getByText('Synopsis');
  expect(textElement).toBeInTheDocument();
  fireEvent.click(textElement);

  const tabElement = screen.getByText("About the author");
  fireEvent.click(tabElement);
});
