import React, { useState } from "react";
import { GrReactjs } from "react-icons/gr";
import { Link } from "react-scroll";

const bannerInfo = {
  title: 'Software Engineer',
  name: 'Edwin Baeza',
  summary: `I have a degree in computer systems engineering from the
  Instituto Tecnológico de Mérida, I'm specialized in backend
  software development, with experience in data engineering and
  frontend, I'm passionate about innovation and technology
  overall.`
}

export function Banner() {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <GrReactjs
                        className="animate-spin-slow delay-150"
                        size="40"
                        color="#4f46e5"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                        onClick={() => {
                          setMobileMenuVisible(!isMobileMenuVisible);
                        }}
                      >
                        <span className="sr-only">Open main menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a
                    href="/blog"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                  <Link
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    About Me
                  </Link>

                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    Skills
                  </Link>

                  <Link
                    to="myprojects"
                    spy={true}
                    smooth={true}
                    className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    Projects
                  </Link>

                  <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>

            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                {isMobileMenuVisible && (
                  <React.Fragment>
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <GrReactjs
                          className="animate-spin-slow delay-150"
                          size="40"
                          color="#4f46e5"
                        />
                      </div>
                      <div className="-mr-2">
                        <button
                          type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          onClick={() =>
                            setMobileMenuVisible(!isMobileMenuVisible)
                          }
                        >
                          <span className="sr-only">Close main menu</span>

                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="px-2 pt-2 pb-3 space-y-1">
                      <a
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </a>
                      <Link
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                      >
                        About Me
                      </Link>

                      <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                      >
                        Skills
                      </Link>

                      <Link
                        to="myprojects"
                        spy={true}
                        smooth={true}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                      >
                        Projects
                      </Link>

                      <a
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        Contact
                      </a>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline"> { bannerInfo.title } </span>
                <span className="block text-indigo-600 xl:inline">
                  { bannerInfo.name }
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                { bannerInfo.summary }
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-screen md:h-96 lg:w-full lg:h-screen"
          src="images/banner-bg-v4.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
