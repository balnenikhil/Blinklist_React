import React from "react";
import { render, waitFor, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { BookGrid } from "./BookGrid";

describe("BookGrid Testing", () => {
  it("checks rendering of the component", () => {
    render(
			<BookGrid/>,
    );
  });

  it("checks rendering of the currently reading tab", async () => {
    render(
			<BookGrid tab="currentlyReading"/>,
    );
    await waitFor(() => {
      screen.getByText("Being Boss");
    });
  });

  it("checks rendering of the finished tab", async () => {
    render(
			<BookGrid tab="finished"/>,
    );
    await waitFor(() => {
      screen.getByText("The Lonely Century");
    });
  });
});
