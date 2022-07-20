import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import LibraryTabs from "./LibraryTabs";

it("checks rendering of the component", () => {
  render(
        <LibraryTabs/>,
  );

  const tabElement = screen.getByText("Finished");
  fireEvent.click(tabElement);
});
