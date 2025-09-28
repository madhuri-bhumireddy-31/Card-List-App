import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import ScrollToTopButton from "../ScrollToTopButton";

function makeListRef() {
  const div = document.createElement("div");
  div.style.height = "500px";
  div.style.overflow = "auto";
  div.appendChild(Object.assign(document.createElement("div"), { style: "height:1000px" }));
  document.body.appendChild(div);
  return { current: { _outerRef: div, scrollTo: jest.fn() } };
}

test("button appears on scroll and scrolls to top", () => {
  const listRef = makeListRef();
  render(<ScrollToTopButton listRef={listRef} />);

  expect(screen.queryByRole("button")).toBeNull(); // hidden first

  fireEvent.scroll(listRef.current._outerRef, { target: { scrollTop: 400 } });
  fireEvent.click(screen.getByRole("button")); // now visible & clickable

  expect(listRef.current.scrollTo).toHaveBeenCalledWith(0);
});

test("button hides when scrolled back up", () => {
  const listRef = makeListRef();
  render(<ScrollToTopButton listRef={listRef} />);
  fireEvent.scroll(listRef.current._outerRef, { target: { scrollTop: 400 } });
  expect(screen.getByRole("button")).toBeInTheDocument();

  fireEvent.scroll(listRef.current._outerRef, { target: { scrollTop: 0 } });
  expect(screen.queryByRole("button")).toBeNull();
});

test("renders nothing with bad refs", () => {
  [null, {}, { current: {} }].forEach((badRef) => {
    const { container } = render(<ScrollToTopButton listRef={badRef} />);
    expect(container).toBeEmptyDOMElement();
  });
});
