import express from "express";
import CharactersController from "../controllers/CharactersController.js";
const router = express.Router();

router.get("/swapiapp/character", CharactersController.createCharacter);

export default router;
