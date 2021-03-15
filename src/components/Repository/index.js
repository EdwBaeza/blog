import React from "react";

function Repository({ repository }) {
  return (
    <div className="mx-auto flex flex-col items-start justify-center place-content-center h-72 w-72 shadow-2xl auto-cols-auto p-10 rounded-lg">
      <p>{repository.name}</p>
      <p>{repository.language}</p>
      <p>{repository.updated_at}</p>
    </div>
  );
}

export default Repository;
