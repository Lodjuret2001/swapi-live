import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapiapi.pontusnorup.se",
});

export interface Character {
  name: string;
  subtitle: string;
  imageUrl: string;
}

export default apiClient;
