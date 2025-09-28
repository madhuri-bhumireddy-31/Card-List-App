import React, { useRef } from "react";
import CardList from "./components/CardList";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./components/style.css";

function App() {
  const listRef = useRef(null);

  return (
    <div className="app-container">
      <h1 className="app-title">Card List App</h1>
      <div className="list-container">
        <CardList listRef={listRef} />
      </div>
      <ScrollToTopButton listRef={listRef} />
    </div>
  );
}

export default App;
