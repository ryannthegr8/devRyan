import React, { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TbSettingsStar } from "react-icons/tb";

import Me from "../assets/me.jpeg";
//Components
import { Nav, Footer } from "../components";

//Pages and images
import { linker, sphere, key, crescent } from "../pages";

import aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    aos.init();
  });
  return (
    <>
      <body class="bg-slate-900">
        <div>
          <div class="fixed top-0 -z-10">
            <div class="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div class="fixed top-0 end-0 -z-10">
            <div class="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div class="fixed inset-0 hidden lg:flex items-center justify-center -z-10">
            <div class="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div class="fixed bottom-0 start-0 -z-10">
            <div class="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
          <div class="fixed bottom-0 end-0 -z-10">
            <div class="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40"></div>
          </div>
        </div>
        {/* <!-- end body bg gradient --> */}

        {/* <!-- Navbar Start --> */}
        <header id="navbar-sticky" class="navbar">
          <div class="container">
            <Nav />
          </div>
        </header>
        {/* <!-- Navbar End --> */}

        {/* <!-- Hero Section Start --> */}
        <section
          id="home"
          class="relative overflow-hidden pt-40 pb-20"
          data-aos="zoom-out"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div class="absolute h-14 w-14 bg-primary/10 top-1/2 start-80 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"></div>
          <div class="absolute h-14 w-14 bg-primary/20 top-1/2 end-80 -z-1 rounded-full animate-ping"></div>
          <div class="container">
            <div class="text-center">
              <div class="flex justify-center mt-6">
                <div class="max-w-2xl">
                  <h1 class="text-5xl/tight text-default-100 font-medium mb-3">
                    My Portfolio.
                  </h1>
                  <p class="text-base text-default-300 font-medium lg:max-w-md mx-auto">
                    See what projects I have been working on.
                    <br />
                    ↓↓
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- Hero end  --> */}

        <section id="categories" class="py-1">
          <div class="container relative">
            <div class="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
              {/* Project */}
              <div
                class="group relative overflow-hidden backdrop-blur-3xl bg-default-950/40 rounded-lg duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div class="p-3">
                  <div class="relative">
                    <img src={sphere} alt="" class="rounded-md" />

                    <div class="absolute top-1/2 -trandefault-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                      <a
                        target="blank"
                        href="https://space-galaxy-r.vercel.app/"
                        class="py-1.5 px-6 inline-flex items-center gap-2 font-semibold tracking-wide align-middle duration-500 text-base text-center border border-primary bg-primary text-white rounded-full hover:bg-primary-hover hover:border-primary-hover"
                      >
                        Live Preview <FaLocationArrow />
                      </a>
                    </div>

                    <div class="absolute top-0 start-0 p-2 transition-all duration-700">
                      <div class="inline-flex justify-center w-full">
                        <div class="bg-gradient-to-r from-rose-500 to-blue-600 py-1 px-2.5 rounded-full">
                          <p
                            id="auction-item-1"
                            class="flex flex-col text-white font-bold text-sm"
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-3 relative">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-2">
                        <span>
                          <a
                            href="https://space-galaxy-r.vercel.app/"
                            class="text-lg font-semibold text-default-100 hover:text-primary"
                          >
                            Purple Sphere.
                          </a>
                          <span class="text-xs text-default-100 block">
                            Purple sphere in space.
                          </span>
                        </span>
                      </div>
                      <a
                        href="#"
                        class="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg text-default-100 hover:text-red-600 focus:text-red-600"
                      >
                        <i class="mdi mdi-heart"></i>
                      </a>
                    </div>

                    <div class="flex items-center justify-between">
                      <div>
                        <span class="block font-semibold text-default-100">
                          Tech Used
                        </span>
                        <span class="block font-semibold text-primary">
                          Three.JS, React.JS, Node
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project end */}
              {/* Project */}
              <div
                class="group relative overflow-hidden backdrop-blur-3xl bg-default-950/40 rounded-lg duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div class="p-3">
                  <div class="relative">
                    <img src={key} alt="" class="rounded-md" />

                    <div class="absolute top-1/2 -trandefault-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                      <a
                        target="blank"
                        href="https://holy-key.vercel.app/"
                        class="py-1.5 px-6 inline-flex items-center gap-2 font-semibold tracking-wide align-middle duration-500 text-base text-center border border-primary bg-primary text-white rounded-full hover:bg-primary-hover hover:border-primary-hover"
                      >
                        Live Preview <FaLocationArrow />
                      </a>
                    </div>

                    <div class="absolute top-0 start-0 p-2 transition-all duration-700">
                      <div class="inline-flex justify-center w-full">
                        <div class="bg-gradient-to-r from-rose-500 to-blue-600 py-1 px-2.5 rounded-full">
                          <p
                            id="auction-item-1"
                            class="flex flex-col text-white font-bold text-sm"
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-3 relative">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-2">
                        <span>
                          <a
                            href="https://holy-key.vercel.app/"
                            class="text-lg font-semibold text-default-100 hover:text-primary"
                          >
                            3D Waterfall.
                          </a>
                          <span class="text-xs text-default-100 block">
                            Spinning 3D waterfall.
                          </span>
                        </span>
                      </div>
                      <a
                        href="#"
                        class="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg text-default-100 hover:text-red-600 focus:text-red-600"
                      >
                        <i class="mdi mdi-heart"></i>
                      </a>
                    </div>

                    <div class="flex items-center justify-between">
                      <div>
                        <span class="block font-semibold text-default-100">
                          Tech Used
                        </span>
                        <span class="block font-semibold text-primary">
                          Three.js, Node, React.js
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project end */}

              {/* Project */}
              <div
                class="group relative overflow-hidden backdrop-blur-3xl bg-default-950/40 rounded-lg duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div class="p-3">
                  <div class="relative">
                    <img src={linker} alt="" class="rounded-md" />

                    <div class="absolute top-1/2 -trandefault-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                      <a
                        target="blank"
                        href="https://ryanmmbale-b8730.web.app/"
                        class="py-1.5 px-6 inline-flex items-center gap-2 font-semibold tracking-wide align-middle duration-500 text-base text-center border border-primary bg-primary text-white rounded-full hover:bg-primary-hover hover:border-primary-hover"
                      >
                        Live Preview <FaLocationArrow />
                      </a>
                    </div>

                    <div class="absolute top-0 start-0 p-2 transition-all duration-700">
                      <div class="inline-flex justify-center w-full">
                        <div class="bg-gradient-to-r from-rose-500 to-blue-600 py-1 px-2.5 rounded-full">
                          <p
                            id="auction-item-1"
                            class="flex flex-col text-white font-bold text-sm"
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-3 relative">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-2">
                        <span>
                          <a
                            href="https://ryanmmbale-b8730.web.app/"
                            class="text-lg font-semibold text-default-100 hover:text-primary"
                          >
                            Linker
                          </a>
                          <span class="text-xs text-default-100 block">
                            Has links to all your socials, similar to link tree.
                          </span>
                        </span>
                      </div>
                      <a
                        href="#"
                        class="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg text-default-100 hover:text-red-600 focus:text-red-600"
                      >
                        <i class="mdi mdi-heart"></i>
                      </a>
                    </div>

                    <div class="flex items-center justify-between">
                      <div>
                        <span class="block font-semibold text-default-100">
                          Tech Used
                        </span>
                        <span class="block font-semibold text-primary">
                          HTML, CSS, JS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project end */}
              {/* Project */}
              <div
                class="group relative overflow-hidden backdrop-blur-3xl bg-default-950/40 rounded-lg duration-500 ease-in-out"
                data-aos="zoom-in"
                data-aos-duration="200"
              >
                <div class="p-3">
                  <div class="relative">
                    <img src={crescent} alt="" class="rounded-md" />

                    <div class="absolute top-1/2 -trandefault-y-1/2 start-0 end-0 text-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-500 ease-in-out">
                      <a
                        target="blank"
                        href=" "
                        class="py-1.5 px-6 inline-flex items-center gap-2 font-semibold tracking-wide align-middle duration-500 text-base text-center border border-primary bg-primary text-white rounded-full hover:bg-primary-hover hover:border-primary-hover"
                      >
                        Live Preview <FaLocationArrow />
                      </a>
                    </div>

                    <div class="absolute top-0 start-0 p-2 transition-all duration-700">
                      <div class="inline-flex justify-center w-full">
                        <div class="bg-gradient-to-r from-rose-500 to-blue-600 py-1 px-2.5 rounded-full">
                          <p
                            id="auction-item-1"
                            class="flex flex-col text-white font-bold text-sm"
                          ></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pt-3 relative">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-2">
                        <span>
                          <a
                            href=" "
                            class="text-lg font-semibold text-default-100 hover:text-primary"
                          >
                            Crescent Creatives
                          </a>
                          <span class="text-xs text-default-100 block">
                            All About Interior and Exterior Design
                          </span>
                        </span>
                      </div>
                      <a
                        href="#"
                        class="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center text-lg text-default-100 hover:text-red-600 focus:text-red-600"
                      >
                        <i class="mdi mdi-heart"></i>
                      </a>
                    </div>

                    <div class="flex items-center justify-between">
                      <div>
                        <span class="block font-semibold text-default-100">
                          Tech Used
                        </span>
                        <span class="block font-semibold text-primary">
                          Laravel, PHP, js, Bootstrap
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project end */}
            </div>
          </div>
        </section>

        {/* <!-- Contact action Start --> */}
        <section class="pb-24">
          <div class="container">
            <div class="flex items-end justify-between mb-1">
              <div class="max-w-2xl mx-auto text-center">
                <div class="mt-8">
                  <p class=" mx-auto text-base text-default-200 font-medium mb-2  ">
                    I prioritize functional good looking software
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                  >
                    work With Me
                    <TbSettingsStar size={20} />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end flex --> */}
          </div>
        </section>
        {/* <!--  Contact action end --> */}

        {/* <!-- Footer section start --> */}
        <Footer />
        {/* <!-- Footer section End --> */}

        {/* <!-- Back To Top Start --> */}
        <button
          id="back-to-top"
          onclick="topFunction()"
          class="fixed text-xl rounded-full z-10 bottom-5 end-5 h-8 w-8 text-center bg-white backdrop-blur-3xl text-slate-950 flex justify-center items-center transition-all duration-500 hover:bg-primary hover:text-white hover:rounded-lg"
        >
          <i data-lucide="chevron-up" class="h-4 w-4"></i>
        </button>
        {/* <!-- Back To Top End --> */}
      </body>
      {/* End of New design */}
    </>
  );
}

export default Portfolio;
