import { Character } from "../services/apiClient";
import { Card, CharacterListButton } from "../styles/styledComponents";

const CharacterList = ({
  characters,
  disabledButton,
  handleSwapCharacter,
  handleDeleteCharacter,
}: Props) => {
  return (
    <div className="flex justify-center mt-6 mb-5 w-full">
      <div className="grid grid-cols-2 lg:grid-cols-3 w-[85%] bg-yellow gap-3 rounded-md">
        {characters.map((character) => (
          <Card key={character.name}>
            <div className="w-[85%] h-[45%] sm:h-[50%] md:h-[55%] mt-3 overflow-hidden flex flex-col items-center">
              <img
                src={character.imageUrl}
                className="object-cover w-full h-full rounded-full border-2"
              />
            </div>
            <div className="flex items-center flex-col">
              <p className="text-white underline text-xl sm:text-3xl md:text-4xl">
                {character.name}
              </p>
              <p className="text-white mt-1 text-sm sm:text-2xl md:text-3xl">
                {character.subtitle}
              </p>
            </div>
            <div className="w-[90%] mt-2 mb-3 flex items-center justify-between">
              <CharacterListButton
                onClick={() => handleSwapCharacter(character)}
                disabled={disabledButton[character.name]}
                style={{
                  background: disabledButton[character.name]
                    ? "transparent"
                    : "green",
                }}
              >
                Swap
              </CharacterListButton>
              <CharacterListButton
                $delete
                onClick={() => handleDeleteCharacter(character)}
              >
                Delete
              </CharacterListButton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

interface Props {
  characters: Character[];
  disabledButton: {
    [key: string]: boolean;
  };
  handleSwapCharacter: (character: Character) => void;
  handleDeleteCharacter: (character: Character) => void;
}

export default CharacterList;
