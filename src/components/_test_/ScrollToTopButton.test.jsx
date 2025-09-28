import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import ScrollToTopButton from "../ScrollToTopButton";

test("button shows after scrolling down", () => {
  render(<ScrollToTopButton />);
  fireEvent.scroll(window, { target: { scrollY: 400 } });
 });
