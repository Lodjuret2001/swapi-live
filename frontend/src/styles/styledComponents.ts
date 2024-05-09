import styled, { css } from "styled-components";

export const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: -100;
`;

export const Input = styled.input`
  border: 2px solid transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 3px rgba(255, 255, 255, 0.7);
  outline: none;
  color: white;
  padding: 0px 2px;

  &::selection {
    background-color: black;
  }

  @media (min-width:640px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

`;

export const Button = styled.button`
  background: lightgrey;
  padding: 0px 10px;
  border-radius: 2px;
  border: 2px solid gray;

  @media (min-width:640px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Text = styled.p<{$red?: boolean}>`
  font-size: 11px;
  @media (min-width: 640px) {
    font-size: 1.25rem; 
  }

  @media (min-width: 768px) {
    font-size: 1.5rem; 
  }

  @media (min-width: 1024px) {
    font-size: 1.875rem; 
  }
  ${(props) =>
    props.$red &&
    css`
      color: red;
    `}
`;

export const ErrorButton = styled.button`
  border-width: 2px;
  border-color: white;
  background-color: green;
  padding: 6px;
  border-radius: 0.375rem;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  color: white;

  &:hover {
    background-color: transparent;
    border-color: #fbd38d;
  }
`;

export const CollectionButton = styled.button`
  background: transparent;
  color: yellow;
  padding: 5px 10px;
  border: solid 2px yellow;
  border-radius: 2px;

  @media (min-width:640px) {
    font-size: 2rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Card = styled.div`
  border: 2px solid transparent;
  border-radius: 2px;
  box-shadow: 0 0 1px 1px rgba(255, 255, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
`;

export const CharacterListButton = styled.button<{ $delete?: boolean }>`
  background: green;
  border-radius: 3px;
  border: 1px solid white;
  color: white;
  padding: 2px 5px;

  @media (min-width:640px) {
    font-size: 2rem;
  }

  &:hover {
    background: transparent;
    transition: background-color 0.3s ease;
  }

  ${(props) =>
    props.$delete &&
    css`
      background: red;
    `}
`;

export const ErrorText = styled.p<{ $red?: boolean }>`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: white;
  font-size: 1rem;
  @media (min-width: 640px) {
    font-size: 2rem;
  }
  width: 80%;
  ${(props) =>
    props.$red &&
    css`
      color: red;
    `}
`;


export const Select = styled.select`
  background: transparent;
  color: yellow;
  padding: 6px 10px;
  border: solid 2px yellow;
  border-radius: 2px;
  outline: none;
  margin-right: 12px;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const Option = styled.option`
  background-color: black;
  font-size: 12px;
  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;