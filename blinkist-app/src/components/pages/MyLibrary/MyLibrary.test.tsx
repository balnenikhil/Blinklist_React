import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';

import "@testing-library/jest-dom";
import { MyLibrary } from "./MyLibrary";

it("checks rendering of the component", () => {
  render(
		<Router>
		<MyLibrary/>
		</Router>,
  );
});
