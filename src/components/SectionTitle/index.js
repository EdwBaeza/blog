import React from "react"

function SectionTitle({ text, id }) {
  return (
    <h3
      className="font-serif text-center pt-16 pb-6 sm:py-10 text-4xl text-gray-600"
      id={id}
    >
      {text}
    </h3>
  );
}

export default SectionTitle;
