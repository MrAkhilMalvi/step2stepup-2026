import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the home page hero", () => {
  render(<App />);
  expect(
    screen.getByText(/stepping up to a brighter future/i),
  ).toBeInTheDocument();
});
