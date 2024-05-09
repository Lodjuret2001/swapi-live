import { useEffect, useState } from "react";
import apiClient, { Character } from "../services/apiClient";
import handleError from "../utils/handleError";

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([
    {
      name: "Yoda",
      subtitle: "Old Master",
      imageUrl:
        "https://d3alac64utt23z.cloudfront.net/images/cards/SOR/045.png",
    },
    {
      name: "Luke Skywalker",
      subtitle: "Faithful Friend",
      imageUrl:
        "https://d3alac64utt23z.cloudfront.net/images/cards/SOR/005-b.png",
    },
    {
      name: "Darth Vader",
      subtitle: "Dark Lord of the Sith",
      imageUrl:
        "https://d3alac64utt23z.cloudfront.net/images/cards/SOR/010-b.png",
    },
  ]);
  const [characterInput, setCharacterInput] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [messageColor, setMessageColor] = useState("blue");
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!characterInput) return;
    setIsFetching(true);

    if (characters.find((c) => c.name == characterInput)) {
      setMessageColor("red");
      setMessage("Character already exits in the collection!");
      setIsFetching(false);
      return;
    }

    const fetchCharacter = async () => {
      try {
        const character = (
          await apiClient.get(`/swapiapp/character?name=${characterInput}`)
        ).data;

        if (character) {
          setCharacters([...characters, character]);
          setIsFetching(false);
          setMessageColor("green");
          setMessage(`Added ${character.name} to the collection!`);
        } else {
          setMessageColor("red");
          setMessage("Something went wrong fetching character data...");
          setIsFetching(false);
          return;
        }
      } catch (error) {
        const message = handleError(error);
        setMessageColor("red");
        setMessage(message);
        setIsFetching(false);
      }
    };
    fetchCharacter();
  }, [characterInput]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageColor("blue");
      setMessage(null);
    }, 7000);
    return () => clearInterval(interval);
  }, [characterInput]);

  return {
    characters,
    setCharacters,
    message,
    messageColor,
    setCharacterInput,
    error,
    setError,
    isFetching,
  };
};

export default useCharacters;
