import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import { EntrepreneurshipTabs } from "./EntrepreneurshipTabs";

it("checks rendering of the component", async () => {
  render(
    <Router>
      <EntrepreneurshipTabs />
    </Router>,
  );
  await waitFor(() => {
    screen.getByText("The Lonely Century");
  });
});
