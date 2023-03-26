import { File, ImageCont, CloseButton, Name, Datas, Image } from "./card.js";

export default function Card(props) {
  const {character, onClose} = props;
  return (
    <File>
      <ImageCont>
        <Name>{character.name}</Name>
        <Image src={character.image} alt={character.name} />
        <CloseButton onClick={onClose}>X</CloseButton>
      </ImageCont>
      <Datas>{character.species}</Datas>
      <Datas>{character.gender}</Datas>
    </File>
  );
}
