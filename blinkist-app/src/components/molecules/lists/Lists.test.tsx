import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Lists from "./Lists";

it("checks rendering of the component", () => {
  render(
        <Lists/>,
  );
});
