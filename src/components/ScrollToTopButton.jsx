import React, { useState, useEffect } from "react";
import "./style.css";

export default function ScrollToTopButton({ listRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!listRef) return;
    if (!listRef.current) return;
    if (!listRef.current._outerRef) return;

    const container = listRef.current._outerRef;

    const handleScroll = () => {
      setVisible(container.scrollTop > 300);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [listRef]);

  if (!visible) return null;

  return (
    <button onClick={() => listRef.current.scrollTo(0)} aria-label="scroll-to-top">
     ⬆ Scroll to Top
    </button>
  );
}
