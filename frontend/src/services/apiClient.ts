import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.pontusnorup.se",
});

export interface Character {
  name: string;
  subtitle: string;
  imageUrl: string;
}

export default apiClient;
