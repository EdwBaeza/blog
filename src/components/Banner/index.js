import React from "react";

function Banner() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="bg-cover bg-no-repeat h-screen lg:w-full"
        style={{ backgroundImage: "url('./images/banner-bg.jpg')" }}
      >
        <div className="w-full h-full flex justify-center items-start py-16 lg:items-center lg:pb-96">
          <h1 className="font-semibold break-words text-center text-5xl text-gray-200 lg:h-2/5 lg:align-top font-mono">
            Edwin Baeza Web Site
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
