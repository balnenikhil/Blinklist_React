import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Footer from "./Footer";

it("checks rendering of the component", () => {
  render(
        <Footer/>,
  );
});
