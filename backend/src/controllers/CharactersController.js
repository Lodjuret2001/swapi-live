import getSwuCharacter from "../utils/getSwuCharacter.js";
import createNewCharacter from "../utils/createNewCharacter.js";
import tryCatch from "../utils/tryCatch.js";

const CharactersController = {
  createCharacter: tryCatch(async (req, res) => {
    const queryName = req.query.name;

    const { swuName, swuSubtitle, swuImageUrl } = await getSwuCharacter(
      queryName
    );

    if (queryName.toLowerCase() === swuName.toLowerCase()) {
      return res.send(createNewCharacter(swuName, swuSubtitle, swuImageUrl));
    }

    if (swuName) {
      throw new Error(
        `Could not match the input: ${queryName}... Did you mean ${swuName}?`
      );
    }
    throw new Error(
      `The character ${queryName} does not exist in the SWU database.`
    );
  }),
};

export default CharactersController;
