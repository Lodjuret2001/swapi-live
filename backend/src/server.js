import cors from "cors";
import express from "express";
import characterRoutes from "./routes/charactersRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();

app.use(express.json(), cors());
app.use(characterRoutes, errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on Port: ${PORT}...`));
