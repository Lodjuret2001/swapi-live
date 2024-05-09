import axios from "../config/axiosConfig.js";

const getSwuCharacter = async (characterName) => {
  const swuCharacter = (await axios.get(`search?q=name:${characterName}`)).data
    .data[0];
  if (swuCharacter) {
    const swuName = swuCharacter.Name;
    const swuSubtitle = swuCharacter.Subtitle;
    const swuFrontArt = swuCharacter.FrontArt;
    const swuBackArt = swuCharacter.BackArt;
    const swuImageUrl = swuBackArt === undefined ? swuFrontArt : swuBackArt;
    return { swuName, swuSubtitle, swuImageUrl };
  } else {
    throw new Error(
      `The character ${characterName} does not exist in the SWU database.`
    );
  }
};

export default getSwuCharacter;
