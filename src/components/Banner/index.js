import React from "react";

function Banner() {
  return (
    <div className="bg-white overflow-hidden">
      <div
        className="bg-lo h-72 bg-contain sm:bg-cover bg-no-repeat sm:h-screen"
        style={{ backgroundImage: "url('/blog/images/banner-bg-v2.jpg')" }}
      >
        <div className="w-full">
          <h1 className="relative top-10 font-serif font-semibold break-words text-center text-5xl text-gray-200 sm:top-72 sm:text-7xl">
            Edwin Baeza
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
