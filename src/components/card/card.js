import styled from "styled-components";

export const File = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("portal.png");
  background-position: center;
  width: 100%;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transition: transform 0.25s ease-out;
  &: hover {
    transform: scale(1.05);
  }
`;

export const ImageCont = styled.div`
  position: relative;
  text-align: center;
  display: inline-block;
  margin-bottom: 5px;
`;

export const Name = styled.h1`
  margin: 0 auto;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #1e201d;
  font-size: 3em;
  font-weight: bold;
`;

export const Datas = styled.h2`
margin: 0 auto;
  font-size: 2em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-style: italic;
  color: #1e201d;
`;

export const Image = styled.img`
  display: block;
  width: auto;
  height: auto;
  -webkit-transition: all 0.3s ease-in-out; /* Animation to fade in */
  -ms-transition: all 0.3s ease-in-out; /* Animation to fade in */
  transition: all 0.3s ease-in-out;
  &: hover{
    transform: scale(1.05);
  }
`;

export const CloseButton = styled.button`
  opacity: 0.7;
  position: absolute;
  top: 5px;
  right: 5px;
  &: hover {
    background-color: red;
    color: white;
  }
`;
