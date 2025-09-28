import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";


test("renders card with title and description", () => {
  render(<Card title="Card 1" description="Sample description" />);
  expect(screen.getByText("Card 1")).toBeInTheDocument();
  expect(screen.getByText("Sample description")).toBeInTheDocument();
});
