import Card from "../card/Card.jsx";

import { DivCards } from "./cards.js";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <DivCards>
      {characters?.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </DivCards>
  );
}
