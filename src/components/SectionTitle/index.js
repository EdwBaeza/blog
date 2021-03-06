import React from "react";

export function SectionTitle({ text, id }) {
  return (
    <h2
      className="text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      id={id}
    >
      {text}
    </h2>
  );
}
