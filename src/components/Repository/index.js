import React from "react";
import BuildIcon from "../../utils/BuildIcons";

function Repository({ repository }) {
  return (
    <div className="mx-auto flex flex-col items-start justify-center place-content-center h-32 w-72 shadow-xl auto-cols-auto p-6 rounded-lg border-2 border-gray-100 hover:border-gray-200 hover:shadow-2xl">
      <div className="w-full h-full grid grid-cols-5 items-center">
        <div>{BuildIcon(repository.language)}</div>
        <div className="col-span-4 font-mono text-sm">
          <p className="text-gray-900 font-bold">
            <a href={repository.html_url}>{repository.name} </a>
          </p>
          <p>{repository.language}</p>
          <p>{new Date(repository.updated_at).toDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Repository;
