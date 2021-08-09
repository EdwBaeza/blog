import React from "react";
import BuildIcon from "../../utils/IconBuilder";
import { SiGithub } from "react-icons/si";

function Repository({ repository }) {
  return (
    <div className="mx-auto flex flex-wrap h-24 w-72 p-4 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl">
      <div className="mx-auto w-1/4 p-1">{BuildIcon(repository.language)}</div>
      <div className="w-3/4 text-sm p-1">
        <p className="text-gray-900 font-bold">
          <a href={repository.html_url} target="_blank">
            {repository.name}
          </a>
        </p>
        <p>{repository.language}</p>
        <p>{new Date(repository.updated_at).toDateString()}</p>
      </div>
    </div>
  );
}

export default Repository;
