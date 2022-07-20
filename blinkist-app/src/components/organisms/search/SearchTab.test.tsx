import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import { SearchTab } from "./SearchTab";

describe("SearchTab Testing", () => {
  it("checks rendering of the component", async () => {
    render(
    <Router>
      <SearchTab searchInput={"The Lonely Century"}/>
    </Router>,
    );
    await waitFor(() => {
      screen.getByText("The Lonely Century");
    });
  });
});
