import { REPOSITORIES_URL } from "../../constants/github";
import axios from "axios";

export default async function getRepositories() {
  try {
    const repositories = await axios.get(REPOSITORIES_URL);
    console.log("Success!", repositories);
    return repositories;
  } catch (error) {
    console.log(error);
    return [];
  }
}
