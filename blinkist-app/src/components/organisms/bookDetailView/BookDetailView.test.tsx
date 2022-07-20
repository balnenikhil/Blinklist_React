import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import { BookDetailView } from "./BookDetailView";

it("checks rendering of the component", async () => {
  render(
		<BookDetailView id={'2'}/>,
  );
  await waitFor(() => {
    screen.getByText("The Lonely Century");
  });
});
