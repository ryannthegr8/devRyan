import React, { useEffect } from "react";

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
                          href="/#/contact"
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
                              src={imageI}
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
                              src={imageE}
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
                              src={imageI}
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
                              src={imageE}
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

        <section class="pb-24">
          <div class="container">
            <div class="grid lg:grid-cols-2 gap-6">
              <div
                class="relative rounded-lg overflow-hidden"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <img
                  class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                  src={imageE}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div class="absolute inset-0">
                  <div class="h-full w-full">
                    <div class="flex items-end h-full w-full p-5">
                      <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                        <h2 class="text-lg font-normal text-center text-default-300">
                          Gaze upon the awe-inspiring creation of artificial
                          intelligence, a majestic dragon of epic proportions.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end gid-col --> */}

              <div
                class="grid md:grid-cols-2 gap-6"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div class="relative rounded-lg overflow-hidden">
                  <img
                    class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                    src={imageH}
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div class="absolute inset-0">
                    <div class="h-full w-full">
                      <div class="flex items-end h-full w-full p-5">
                        <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                          <h3 class="text-lg font-normal text-center text-default-200">
                            An enchanting ice dragon born from the algorithms of
                            AI
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- col end  --> */}

                <div class="relative rounded-lg overflow-hidden">
                  <img
                    class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                    src={imageC}
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div class="absolute inset-0">
                    <div class="h-full w-full">
                      <div class="flex items-end h-full w-full p-5">
                        <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                          <h3 class="text-lg font-normal text-center text-default-200">
                            A marvel of mechanical artistry and AI ingenuity
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- col end  --> */}
              </div>
              {/* <!-- end grid-col --> */}

              <div
                class="relative rounded-lg overflow-hidden"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <img
                  class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                  src={imageF}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div class="absolute inset-0">
                  <div class="h-full w-full">
                    <div class="flex items-end h-full w-full p-5">
                      <div class="bg-white/10 backdrop-blur-md p-6 rounded w-full">
                        <h3 class="text-lg font-normal text-center text-default-200">
                          In the heart of an enchanted forest, an AI-born dragon
                          stands as a guardian of the woods
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end grid-col --> */}

              <div
                class="relative rounded-lg overflow-hidden"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <img
                  class="mx-auto h-full w-full object-cover object-top ransition duration-500 group-hover:scale-105"
                  src={imageG}
                  alt="woman"
                  loading="lazy"
                  width="640"
                  height="805"
                />
                <div class="absolute inset-0">
                  <div class="h-full w-full">
                    <div class="flex items-end justify-end h-full w-full p-5">
                      <a
                        href="#"
                        class="py-2 px-3 flex items-center gap-6 rounded-full text-default-300 bg-white/10 backdrop-blur-md"
                      >
                        Explore more
                        <i data-lucide="send" class="h-5 w-5 stroke-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end grid-col --> */}
            </div>
            {/* <!-- grid end  --> */}
          </div>
          {/* <!-- container end  --> */}
        </section>

        <section id="about" class="pb-24">
          <div class="container">
            <div class="flex items-end justify-between mb-10">
              <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-medium capitalize text-white mb-4">
                  The AI Generator that helps you Create amazing image taster.
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
                    Built for speed
                  </h2>
                  <p class="text-base font-normal text-default-300 mt-4">
                    Generate up to 10 images in seconds. Our AI is super fast
                    and flexible that can generate image for you in quick times
                  </p>
                  <a
                    href="#"
                    class="inline-flex gap-2 items-center relative text-primary group mt-5"
                  >
                    <span class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
                    Lead more <i data-lucide="move-right" class="h-4 w-4"></i>
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
                    10+ AI models
                  </h2>
                  <p class="text-base font-normal text-default-300 mt-4">
                    From Starble Diffusion to custom community styles. We have
                    over 10+ AI models that will works better for you.
                  </p>
                  <a
                    href="#"
                    class="inline-flex gap-2 items-center relative text-primary group mt-5"
                  >
                    <span class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
                    Lead more <i data-lucide="move-right" class="h-4 w-4"></i>
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
                    Works for everything
                  </h2>
                  <p class="text-base font-normal text-default-300 mt-4">
                    Generate up to 10 images in seconds. Our AI is super fast
                    and flexible that can generate image for you in quick times
                  </p>
                  <a
                    href="#"
                    class="inline-flex gap-2 items-center relative text-primary group mt-5"
                  >
                    <span class="absolute h-px w-7/12 group-hover:w-full transition-all duration-500 rounded bg-primary/80 -bottom-0"></span>
                    Lead more <i data-lucide="move-right" class="h-4 w-4"></i>
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
                            The image is original and not copied or borrowed
                            from someone else's work
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-auto bottom-20 -start-20">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                        <div class="py-4 px-6">
                          <h5>Detailed Work</h5>
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
                    Unique Images
                  </span>
                  <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">
                    Unique Images means no copyright issues
                  </h2>
                  <p class="text-base font-medium text-default-300 mt-5 mb-8">
                    The image is original and not copied or borrowed from
                    someone else's work, which ensures that there are no legal
                    restrictions on its use or distribution.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300"
                  >
                    Read More
                    <i data-lucide="move-right" class="h-5 w-5"></i>
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
                    custom Images
                  </span>
                  <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">
                    Create images your custom AI mode
                  </h2>
                  <p class="text-base font-medium text-default-300 mt-5 mb-8">
                    Every element in this image, from the smallest brushstroke
                    to the grandest panorama, is a product of AI's creative
                    prowess.
                  </p>
                  <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full bg-primary hover:bg-primary-hover transition-all duration-300"
                  >
                    Read More
                    <i data-lucide="move-right" class="h-5 w-5"></i>
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
                            The image is original and not copied or borrowed
                            from someone else's work
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-auto bottom-20 -end-20">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                        <div class="py-4 px-6">
                          <h5>High Quality</h5>
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

        {/* <!-- Testimonials Section Start --> */}
        <section id="testimonials" class="pb-24">
          <div class="container">
            <div class="flex flex-wrap items-center justify-between gap-5">
              <div>
                <div class="max-w-2xl mx-auto">
                  <h2 class="text-3xl font-medium text-white mb-4">
                    Our AI-made Images
                  </h2>
                  <p class="text-sm text-default-200 font-medium">
                    I am blown away by the AI-generated artwork. Each piece is a
                    masterpiece in its own right, and I love how it combines the
                    creativity of human artists with the innovation of AI.
                  </p>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-md bg-primary hover:bg-primary-hover transition-all duration-300"
                >
                  Generate AI Images
                </a>
              </div>
            </div>
          </div>

          <div class="mt-14">
            <div
              class="relative gap-8 m-auto flex overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              <div class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full">
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageD}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageA}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageJ}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageK}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageE}
                  alt=""
                />
              </div>

              <div
                aria-hidden="true"
                class="marquee__group gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
              >
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageD}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageI}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageJ}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageK}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageE}
                  alt=""
                />
              </div>
            </div>

            <div
              class="marquee--reverse gap-8 m-auto flex overflow-hidden mt-7"
              data-aos="fade-up"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              <div class="marquee__group gap-8 delay-[31s] flex items-center justify-around flex-shrink-0 min-w-full">
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageA}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageE}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageF}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageG}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageH}
                  alt=""
                />
              </div>

              <div
                aria-hidden="true"
                class="marquee__group delay-[31s] gap-8 flex items-center justify-around flex-shrink-0 min-w-full"
              >
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageA}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageE}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageF}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageG}
                  alt=""
                />
                <img
                  class="aspect-1 object-cover rounded-xl h-60 w-full"
                  src={imageH}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center mt-12">
            <a
              href="#"
              class="inline-flex items-center justify-center gap-2 border border-white/10 text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
            >
              More Tools
              <i data-lucide="move-right" class="h-5 w-5"></i>
            </a>
          </div>
        </section>
        {/* <!-- Testimonials Section end --> */}

        <section
          class="pb-24"
          data-aos="fade-up"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div class="container">
            <div class="bg-default-950/20 backdrop-blur-sm rounded-xl relative md:p-20 p-6">
              <div class="hidden lg:block">
                <div class="absolute h-14 w-14 top-10 start-32 -z-1">
                  <img
                    src="assets/images/avatars/img-1.png"
                    class="rounded-full"
                    alt=""
                  />
                </div>
                <div class="absolute h-14 w-14 top-64 start-10 -z-1">
                  <img
                    src="assets/images/avatars/img-2.png"
                    class="rounded-full"
                    alt=""
                  />
                </div>
                <div class="absolute h-14 w-14 bottom-10 start-32 -z-1">
                  <img
                    src="assets/images/avatars/img-3.png"
                    class="rounded-full"
                    alt=""
                  />
                </div>

                <div class="absolute h-14 w-14 top-10 end-32 -z-1">
                  <img
                    src="assets/images/avatars/img-4.png"
                    class="rounded-full"
                    alt=""
                  />
                </div>
                <div class="absolute h-14 w-14 top-64 end-10 -z-1">
                  <img
                    src="assets/images/avatars/img-5.png"
                    class="rounded-full"
                    alt=""
                  />
                </div>
                <div class="absolute h-14 w-14 bottom-10 end-32 -z-1">
                  <img
                    src="assets/images/avatars/img-6.png"
                    class="rounded-full"
                    alt=""
                  />
                </div>
              </div>

              {/* <!-- Swiper --> */}
              <div class="swiper testimonial-swiper">
                <div class="swiper-wrapper pb-20">
                  <div class="swiper-slide">
                    <div class="max-w-2xl mx-auto text-center">
                      <i
                        data-lucide="quote"
                        class="w-8 h-8 mx-auto fill-primary text-primary"
                      ></i>
                      <p class="text-lg font-medium text-default-200 mt-7">
                        "Amet minim mollil non deserunt ulliamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. "
                      </p>
                      <img
                        src="assets/images/avatars/img-1.png"
                        class="h-16 rounded-full mx-auto my-8"
                        alt=""
                      />
                      <h2 class="text-xl font-medium text-default-200">
                        Shane Watson
                      </h2>
                      <p class="text-sm font-normal text-default-400 mt-1">
                        CEO & Founder
                      </p>
                      <div class="flex items-center justify-center gap-1 mt-1">
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="max-w-2xl mx-auto text-center">
                      <i
                        data-lucide="quote"
                        class="w-8 h-8 mx-auto fill-primary text-primary"
                      ></i>
                      <p class="text-lg font-medium text-default-200 mt-7">
                        "Amet minim mollil non deserunt ulliamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. "
                      </p>
                      <img
                        src="assets/images/avatars/img-2.png"
                        class="h-16 rounded-full mx-auto my-8"
                        alt=""
                      />
                      <h2 class="text-xl font-medium text-default-200">
                        Maria Ruth
                      </h2>
                      <p class="text-sm font-normal text-default-400 mt-1">
                        CEO & Founder
                      </p>
                      <div class="flex items-center justify-center gap-1 mt-1">
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="max-w-2xl mx-auto text-center">
                      <i
                        data-lucide="quote"
                        class="w-8 h-8 mx-auto fill-primary text-primary"
                      ></i>
                      <p class="text-lg font-medium text-default-200 mt-7">
                        "Amet minim mollil non deserunt ulliamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet. "
                      </p>
                      <img
                        src="assets/images/avatars/img-3.png"
                        class="h-16 rounded-full mx-auto my-8"
                        alt=""
                      />
                      <h2 class="text-xl font-medium text-default-200">
                        Megan Hild
                      </h2>
                      <p class="text-sm font-normal text-default-400 mt-1">
                        CEO & Founder
                      </p>
                      <div class="flex items-center justify-center gap-1 mt-1">
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                        <i
                          data-lucide="star"
                          class="h-4 w-4 stroke-yellow-300"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Content Section Start --> */}
        <section class="pb-24">
          <div class="container">
            <div class="flex items-end justify-between mb-10">
              <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-medium capitalize text-white mb-4">
                  Supercharge your content generation process.
                </h2>
                <p class="w-2/3 mx-auto text-base text-default-200 font-medium">
                  Join us today and experience the power of AI-powered text
                  creation for yourself!
                </p>

                <div class="mt-8">
                  <a
                    href="#"
                    class="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300"
                  >
                    Get start free
                    <i data-lucide="move-right" class="h-5 w-5"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end flex --> */}
          </div>
        </section>
        {/* <!-- Content Section end --> */}

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

export default Home;
