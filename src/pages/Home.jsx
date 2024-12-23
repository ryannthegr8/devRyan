import React, { useEffect } from "react";
import {
  TbArrowRightSquare,
  TbSettingsStar,
  TbCircleChevronsUp,
} from "react-icons/tb";
import { FaLocationArrow } from "react-icons/fa";

//Pages and images
import {
  imageA,
  imageB,
  imageC,
  imageD,
  imageE,
  imageF,
  imageG,
  imageH,
  imageK,
  imageI,
  imageJ,
  imageR,
  imageS,
} from "../pages";

import aos from "aos";
import "aos/dist/aos.css";

//Components
import { Nav, Footer } from "../components";

function Home() {
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
        <section id="home" class="relative overflow-hidden pt-[72px] pb-20">
          <div class="px-6 py-4">
            <div class="bg-default-950/40 rounded-2xl">
              <div class="container">
                <div class="p-6">
                  <div class="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center relative">
                    <div class="absolute h-14 w-14 bg-primary/10 top-0 start-0 -z-1 rounded-2xl rounded-tl-none rounded-br-none animate-[spin_10s_linear_infinite]"></div>
                    <div class="absolute h-14 w-14 bg-primary/20 bottom-0 end-0 -z-1 rounded-full animate-ping"></div>

                    <div
                      class=""
                      data-aos="fade-right"
                      data-aos-easing="ease"
                      data-aos-duration="1000"
                    >
                      <span class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/20">
                        Fullstack Engineer
                      </span>
                      <h1 class="md:text-5xl/tight text-4xl font-medium text-white max-w-lg my-4">
                        RYAN MMBALE.
                      </h1>
                      <p class="md:text-lg text-default-300">
                        I help creators and companies to design, develop, test,
                        deploy, and maintain software systems and applications.
                      </p>
                      <br></br>
                      <div>
                        <a
                          href="/contact"
                          class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-hover transition-all duration-300 me-2 mt-2"
                        >
                          CREATE WITH ME
                        </a>
                      </div>
                    </div>
                    <div
                      class="mx-auto h-[595px] overflow-hidden"
                      data-aos="zoom-in"
                      data-aos-easing="ease"
                      data-aos-duration="1000"
                    >
                      <div class="marquee grid grid-cols-2 gap-6">
                        <div class="relative gap-6 m-auto flex flex-col overflow-hidden">
                          <div class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageK}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageR}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageJ}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageK}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageS}
                              alt=""
                            />
                          </div>

                          <div
                            aria-hidden="true"
                            class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full"
                          >
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageD}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageR}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageJ}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageK}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageS}
                              alt=""
                            />
                          </div>
                        </div>

                        <div class="marquee-reverse gap-6 m-auto flex flex-col overflow-hidden">
                          <div class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full">
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageA}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageE}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageF}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageG}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageH}
                              alt=""
                            />
                          </div>

                          <div
                            aria-hidden="true"
                            class="marquee-hero gap-6 flex flex-col items-center justify-around flex-shrink-0 min-h-full"
                          >
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageA}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageE}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageF}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageG}
                              alt=""
                            />
                            <img
                              class="aspect-1 object-cover rounded-xl h-full w-60"
                              src={imageH}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- Hero end  --> */}

        <section id="about" class="pb-24">
          <div class="container">
            <div class="flex items-end justify-between mb-10">
              <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-medium capitalize text-white mb-4">
                  My services
                </h2>
              </div>
            </div>
            {/* <!-- end flex --> */}

            <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
              <div
                class="p-10 rounded-lg bg-default-950/40"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div class="text-center">
                  <i
                    data-lucide="activity"
                    class="h-10 w-10 text-primary mx-auto"
                  ></i>
                  <h2 class="text-2xl font-medium text-default-200 mt-4">
                    Custom Software Development
                  </h2>
                  <p class="text-base font-normal text-default-300 mt-4"></p>
                  <a
                    href="/#/services"
                    class="inline-flex gap-2 items-center relative text-primary group mt-5"
                  >
                    <span class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
                    Learn More <TbArrowRightSquare size={20} />
                  </a>
                </div>
              </div>
              {/* <!-- end grid-col --> */}

              <div
                class="p-10 rounded-lg bg-default-950/40"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div class="text-center">
                  <i
                    data-lucide="layers"
                    class="h-10 w-10 text-primary mx-auto"
                  ></i>
                  <h2 class="text-2xl font-medium text-default-200 mt-4">
                    Mobile Application Development
                  </h2>
                  <p class="text-base font-normal text-default-300 mt-4"></p>
                  <a
                    href="/#/services"
                    class="inline-flex gap-2 items-center relative text-primary group mt-5"
                  >
                    <span class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
                    Learn More
                    <TbArrowRightSquare size={20} />
                  </a>
                </div>
              </div>
              {/* <!-- end grid-col --> */}

              <div
                class="p-10 rounded-lg bg-default-950/40"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div class="text-center">
                  <i
                    data-lucide="dribbble"
                    class="h-10 w-10 text-primary mx-auto"
                  ></i>
                  <h2 class="text-2xl font-medium text-default-200 mt-4">
                    Software Testing and Quality Assurance
                  </h2>
                  <p class="text-base font-normal text-default-300 mt-4"></p>
                  <a
                    href="/#/services"
                    class="inline-flex gap-2 items-center relative text-primary group mt-5"
                  >
                    <span class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
                    Learn More <TbArrowRightSquare size={20} />
                  </a>
                </div>
              </div>
              {/* <!-- end grid-col --> */}
            </div>
            {/* <!-- end grid --> */}
          </div>
          {/* <!-- end container --> */}
        </section>

        <section id="ai_made" class="pb-24">
          <div class="flex items-end justify-between mb-10">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-medium capitalize text-white mb-4">
                My Recent Projects
              </h2>
            </div>
          </div>

          <div class="container">
            <div class="grid md:grid-cols-2 gap-6 items-center">
              <div
                class="relative"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <img src={imageB} class="rounded-xl" alt="" />
                <div class="absolute inset-0 bg-default-950/50 rounded-xl"></div>
                <div class="hidden lg:block">
                  <div class="absolute top-10 -end-52">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                        <div class="max-w-sm text-center p-6">
                          <p class="text-base font-medium text-default-300">
                            With Great Power Comes Great Responsibility
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end grid-col --> */}

              <div
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div class="max-w-md text-end ms-auto">
                  <span class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">
                    Crescent Creatives
                  </span>
                  <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">
                    An Elegant Interior Design Website.
                  </h2>
                  <p class="text-base font-medium text-default-300 mt-5 mb-8">
                    The website has features that enables clients to have a
                    wonderful experience while interacting with the website.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300"
                  >
                    Live Preview
                    <FaLocationArrow />
                  </a>
                </div>
              </div>
              {/* <!-- end grid-col --> */}
            </div>
            {/* <!-- end grid --> */}

            <div class="grid md:grid-cols-2 gap-6 items-center mt-12">
              <div
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div class="max-w-md p-3">
                  <span class="py-1 px-3 rounded-md text-sm font-medium uppercase tracking-wider text-primary bg-primary/10">
                    Beira Travels
                  </span>
                  <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">
                    A Travel Agency Website.
                  </h2>
                  <p class="text-base font-medium text-default-300 mt-5 mb-8">
                    The site has features that enables clients to book fot the
                    availed trips on the website.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300"
                  >
                    Live Preview
                    <FaLocationArrow />
                  </a>
                </div>
              </div>
              {/* <!-- ebd grid-cols --> */}

              <div
                class="relative"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <img src={imageC} class="rounded-xl" alt="" />
                <div class="absolute inset-0 bg-default-950/50 rounded-xl"></div>
                <div class="hidden lg:block">
                  <div class="absolute top-10 -start-52">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                        <div class="max-w-sm text-center p-6">
                          <p class="text-base font-medium text-default-300">
                            No One Cared Who I Was ‘Till I Put On The Mask.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ebd grid-cols --> */}
            </div>
            {/* <!-- end grid --> */}
          </div>
          {/* <!-- end container --> */}
        </section>

        {/* <!-- Contact action Start --> */}
        <section class="pb-24">
          <div class="container">
            <div class="flex items-end justify-between mb-10">
              <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-medium capitalize text-white mb-4">
                  Supercharge your Site Making process.
                </h2>
                <p class="w-2/3 mx-auto text-base text-default-200 font-medium">
                  Experience ingenious software creation for yourself!
                </p>

                <div class="mt-8">
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
        <a
          href="#"
          class="fixed text-xl rounded-full z-10 bottom-5 end-5 h-8 w-8 text-center bg-white backdrop-blur-3xl text-slate-950 flex justify-center items-center transition-all duration-500 hover:bg-primary hover:text-white hover:rounded-lg"
        >
          <TbCircleChevronsUp />
        </a>
        {/* <!-- Back To Top End --> */}
      </body>
      {/* End of New design */}
    </>
  );
}

export default Home;
