import styled from "styled-components";

export const Search = styled.div`
  height: 60px;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 25px;
`;

export const SearchInput = styled.input`
  width: 30%;
  padding: 12px 20px;
  border: solid #39ff14 1px;
  border-radius: 7px 0px 0px 7px;
  box-sizing: border-box;
  box-shadow: inset 0 0 5px #808080;
`;

export const SearchButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 10%;
  padding: 12px 20px;
  border: solid #39ff14 1px;
  border-radius: 0px 7px 7px 0px;
  box-sizing: border-box;
  background-color: #62df39;
  box-shadow: inset 0 0 5px #808080;
  font-family: helvetica, arial;
  font-weight: bold;
  text-align: justify;
  &: hover {
    transform: scale(1.05);
    background-color: #a7ada5;
  }
`;
