import Card from "../card/Card.jsx";

import { DivCards } from "./cards.js";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <DivCards>
      {characters?.map((character) => (
        <Card character={character} onClose={onClose} />
      ))}
    </DivCards>
  );
}
