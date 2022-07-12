import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Banner } from "../../components/Banner";
import { AboutMe } from "../../components/AboutMe";
import { Skills } from "../../components/Skills";
import ListOfRepositories from "../../components/ListOfRepositories";
import getRepositories from "../../services/github/getRepositories";
import { useRepositories } from "../../hooks/github/useRepositories";

function Home() {
  const repositories = useRepositories();
  return (
    <div>
      <Helmet>
        <title>Edwin Baeza Software Engineer</title>
        <meta name="description" description="Edwin Baeza Software Engineer" />
      </Helmet>
      <Banner />
      <AboutMe />
      <Skills />
      {!repositories.length && <p>Loading...</p>}
      {repositories.length && (
        <ListOfRepositories repositories={repositories} />
      )}
    </div>
  );
}

export default Home;
