import { File, ImageCont, CloseButton, Name, Datas, Image } from "./card.js";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { character, onClose } = props;
  return (
    <Link to={`/detail/${character.id}`}>
      <File>
        <ImageCont>
          <Name>{character.name}</Name>
          <Image src={character.image} alt={character.name} />
          <CloseButton onClick={() => onClose(character.id)}>X</CloseButton>
        </ImageCont>
        <Datas>{character.species}</Datas>
        <Datas>{character.gender}</Datas>
      </File>
    </Link>
  );
}
