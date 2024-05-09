import { useState } from "react";
import {
  Background,
  LogoContainer,
  Logo,
  ListButton,
  MusicPlayer,
  CharacterForm,
  CharacterList,
  FetchLoader,
  Error,
} from "./components/index";
import useCharacters from "./hooks/useCharacters";
import { Character } from "./services/apiClient";

function App() {
  const [isCharactersVisible, setIsCharactersVisibility] = useState(false);
  const [count, setCount] = useState(0);
  const [disabledButton, setDisabledButtton] = useState<{
    [key: string]: boolean;
  }>({});
  const {
    characters,
    setCharacters,
    message,
    messageColor,
    setCharacterInput,
    error,
    isFetching,
  } = useCharacters();

  const handleListVisibility = () => {
    setIsCharactersVisibility(!isCharactersVisible);
  };
  const handleCharacterInput = (characterName: string) => {
    setCharacterInput(characterName);
  };
  const handleSwapCharacter = (character: Character) => {

    if (count < 1) {
      setDisabledButtton({ [character.name]: true });
      setCount(count + 1);
    } else {
      const firstSelectedCharacter = Object.keys(disabledButton)[0];
      const secondSelectedCharacter = character.name;

      const index1 = characters.findIndex(
        (c) => c.name === firstSelectedCharacter
      );
      const index2 = characters.findIndex(
        (c) => c.name === secondSelectedCharacter
      );

      setCharacters((prevArray) => {
        // Get the first character position
        const character1 = prevArray[index1];

        // Swap the characters at index1 and index2
        prevArray[index1] = prevArray[index2];
        prevArray[index2] = character1;

        return prevArray;
      });
      setCount(0);
      setDisabledButtton({});
    }
  };
  const handleDeleteCharacter = (character: Character) => {
    const newCharactersArray = characters.filter(
      (c) => c.name !== character.name
    );
    setCharacters(newCharactersArray);
  };

  return (
    <>
      <Background />
      {error ? (
        <Error error={error} />
      ) : (
        <LogoContainer>
          <Logo />
          <ListButton handleListVisibility={handleListVisibility}>
            {isCharactersVisible
              ? "Hide Star Wars Collection"
              : "Show Star Wars Collection"}
          </ListButton>
          <MusicPlayer />
          <CharacterForm
            message={message}
            messageColor={messageColor}
            handleCharacterInput={handleCharacterInput}
          />
          {isFetching && <FetchLoader />}
        </LogoContainer>
      )}
      {isCharactersVisible && (
        <CharacterList
          characters={characters}
          disabledButton={disabledButton}
          handleDeleteCharacter={handleDeleteCharacter}
          handleSwapCharacter={handleSwapCharacter}
        />
      )}
    </>
  );
}

export default App;
