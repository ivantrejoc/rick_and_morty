import { File, ImageCont, CloseButton, Name, Datas, Image } from "./card.js";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { character, onClose } = props;
  return (
    
      <File>
        <ImageCont>
        <Link to={`/detail/${character.id}`}>
          <Name>{character.name}</Name>
          </Link>
          <Image src={character.image} alt={character.name} />
          <CloseButton onClick={() => onClose(character.id)}>X</CloseButton>
        </ImageCont>
        <Datas>{character.species}</Datas>
        <Datas>{character.gender}</Datas>
      </File>
    
  );
}
