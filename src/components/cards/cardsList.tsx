import { useState } from "react";
import { Card } from "./card";

import "./cards.css";
import { Button } from "../button/button";
function CardsList() {
  const initialArr = [
    { id: "1", name: "teste 1" },
    { id: "2", name: "teste 2" },
    { id: "3", name: "teste 3" },
    { id: "4", name: "teste 4" },
    { id: "5", name: "teste 5" },
  ];
  const [cards, setCards] = useState(initialArr);

  function handlePopObject(id: string) {
    setCards((prev) => prev.filter((card) => card.id !== id));
  }

  return (
    <div className="cards-list">
      {cards.length === 0 && (
        <div className="retry-button">
          <Button title="retry" onClick={() => setCards(initialArr)} />
        </div>
      )}
      {cards.map((card) => (
        <Card name={card.name} handlePop={() => handlePopObject(card.id)} />
      ))}
    </div>
  );
}

export { CardsList };
