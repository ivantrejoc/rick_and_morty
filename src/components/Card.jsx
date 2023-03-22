import styled from "styled-components";

const File = styled.div`
  margin: 0 auto;
  height: 400px;
  width: 300px;
  background-color: #3bc22b;
  border-radius: 20px;
  border: 5px white; ;
`;

const Name = styled.h1`
  margin: 0 auto;
  font-family: helvetica, arial;
  font-color: black;
  font-size: 2em;
  font-weight: bold;
`;

const Datas = styled.h2`
  margin: 0 auto;
  font-family: helvetica, arial;
  font-color: black;
  font-size: medium;
  font-style: italic;
`;

export default function Card({ name, species, image, gender, onclose }) {
  return (
    <File>
      <button onClick={onclose}>X</button>
      <Name>{name}</Name>
      <Datas>{species}</Datas>
      <Datas>{gender}</Datas>
      <img src={image} alt="Not found" />
    </File>
  );
}
