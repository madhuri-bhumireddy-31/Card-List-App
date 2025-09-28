import React, { useState, useEffect } from "react";
import './style.css';

function ScrollToTopButton({ listRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!listRef?.current?._outerRef) return;

    const container = listRef.current._outerRef;

    const toggleVisibility = () => {
      setVisible(container.scrollTop > 300);
    };

    container.addEventListener("scroll", toggleVisibility);

    return () => container.removeEventListener("scroll", toggleVisibility);
  }, [listRef]);

  const scrollToTop = () => {
    if (listRef?.current) {
      listRef.current.scrollTo(0); 
    }
  };

  if (!visible) return null;

  return (
    <button onClick={scrollToTop} className="scroll-to-top">
      ↑
    </button>
  );
}

export default ScrollToTopButton;
