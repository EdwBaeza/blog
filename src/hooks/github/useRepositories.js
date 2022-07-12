import React, { useEffect, useState } from "react";
import getRepositories from "../../services/github/getRepositories";

export function useRepositories() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    async function fetchRepositories() {
      const { data } = await getRepositories();
      setRepositories(data);
    }
    fetchRepositories();
  }, []);

  return repositories;
}
