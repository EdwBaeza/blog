import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Banner } from "../../components/Banner";
import { AboutMe } from "../../components/AboutMe";
import { Skills } from "../../components/Skills";
import ListOfRepositories from "../../components/ListOfRepositories";
import getRepositories from "../../services/github/getRepositories";

function Home() {
  const [repositories, setRepositories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchRepositories() {
      setIsLoading(true);
      const { data } = await getRepositories();
      setRepositories(data);
      setIsLoading(false);
    }
    fetchRepositories();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Edwin Baeza Software Engineer</title>
        <meta name="description" description="Edwin Baeza Software Engineer" />
      </Helmet>
      <Banner />
      <AboutMe />
      <Skills />
      {isLoading && <p>Loading...</p>}
      {!isLoading && <ListOfRepositories repositories={repositories} />}
    </div>
  );
}

export default Home;
