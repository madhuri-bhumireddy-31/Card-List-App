// src/components/_test_/CardList.test.jsx
import React, { createRef } from "react";
import { render, screen } from "@testing-library/react";
import CardList from "../CardList";

test("renders virtualized list with cards", () => {
  const listRef = createRef();
  render(<CardList listRef={listRef} />);

  expect(screen.getByText("Card 1")).toBeInTheDocument();

  expect(screen.getByText("Card 5")).toBeInTheDocument();
});
