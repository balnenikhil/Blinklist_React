import React from "react";
import { screen, render } from "@testing-library/react";
import { Avatars } from "./Avatars";
import "@testing-library/jest-dom";

it("checks rendering of text prop", async () => {
  render(<Avatars children={'N'}/>);

  const textElement = screen.getByText('N');
  expect(textElement).toBeInTheDocument();
});
