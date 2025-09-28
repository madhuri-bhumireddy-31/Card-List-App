import React from "react";
import { FixedSizeList as List } from "react-window";
import Card from "./Card";
import './style.css';

const items = Array.from({ length: 1000 }, (_, i) => ({
  title: `Card ${i + 1}`,
  description: `This is a sample content for the Card ${i + 1}.`,
}));

function CardList({ listRef }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      <Card title={items[index].title} description={items[index].description} />
    </div>
  );

  return (
    <List
      ref={listRef}
      height={600}   // visible window height
      itemCount={items.length}
      itemSize={120} // each card height
      width="100%"
    >
      {Row}
    </List>
  );
}

export default CardList;
