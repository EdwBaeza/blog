import React from "react";
import Repository from "../Repository";
import { SectionTitle } from "../SectionTitle/";

function ListOfRepositories({ repositories }) {
  const filteredRepositories = repositories.filter((item) => !item.fork);
  return (
    <div className="py-12">
      <SectionTitle text="My Projects" id="myprojects" />
      <div className="grid grid-cols-1justify-items-center gap-10 lg:grid-cols-3 sm:grid-cols-2 lg:px-56 sm:px-28 py-10">
        {filteredRepositories.map((item, index) => (
          <Repository repository={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default ListOfRepositories;
