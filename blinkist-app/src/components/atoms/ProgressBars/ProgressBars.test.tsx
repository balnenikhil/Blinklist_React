import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBars from "./ProgressBars";

it("checks rendering of progress prop", async () => {
  render(<ProgressBars progressValue={50}/>);

  const ProgressElement = screen.getByRole('progressbar');
  expect(ProgressElement).toHaveAttribute('aria-valuenow', '50');
});
