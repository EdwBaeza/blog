import React from "react";

function Banner() {
  return (
    <div className="bg-white overflow-hidden">
      <div
        className="bg-lo h-72 bg-cover bg-no-repeat bg-center sm:bg-cover sm:h-screen"
        style={{ backgroundImage: "url('images/banner-bg-v3.jpg')" }}
      >
        <div className="w-full">
          <h1 className="relative top-24 font-serif font-semibold break-words text-center text-5xl text-gray-200 sm:top-72 sm:text-7xl">
            Edwin Baeza
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
