import Card from "./Card";
import styled from "styled-components";

const DivCards = styled.div`
display: flex;
justify-content: space-evenly;
`

export default function Cards(props) {
  const { characters } = props;
  return (
    <DivCards>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </DivCards>
  );
}
