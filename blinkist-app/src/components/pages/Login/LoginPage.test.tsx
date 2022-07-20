import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { LoginPage } from "./LoginPage";

it("checks rendering of the component", () => {
  render(
		<LoginPage/>,

  );
});
