import React, { useEffect } from "react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import {
  TbBrandLaravel,
  TbBrandReact,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandPython,
  TbFileTypeCss,
  TbFileTypePhp,
  TbBrandFirebase,
} from "react-icons/tb";

import Me from "../assets/me.jpeg";
//Components
import { Nav, Footer, ContactForm } from "../components";

//Pages and images
import { imageM, imageN } from "../pages";

import aos from "aos";
import "aos/dist/aos.css";

function About() {
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
                  <h1 class="text-5xl/tight text-default-100 font-medium mb-6">
                    About Me.
                  </h1>
                  <p class="text-base text-default-300 font-medium lg:max-w-md mx-auto">
                    Get to know me.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- Hero end  --> */}

        <section id="ai_made" class="pb-24">
          <div class="container">
            <div class="grid md:grid-cols-2 gap-6 items-center">
              <div
                class="relative"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <img src={imageM} class="rounded-xl" alt="" />
                <div class="absolute inset-0 bg-default-950/50 rounded-xl"></div>
                <div class="hidden lg:block">
                  <div class="absolute top-10 -end-52">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg"></div>
                    </div>
                  </div>
                  <div class="absolute top-auto bottom-20 -start-20">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                        <div class="py-4 px-6">
                          <h5>With God all things are possible. Matt 19:26</h5>
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
                    PROFESSIONALLY
                  </span>
                  <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">
                    About Ryan
                  </h2>
                  <p class="text-base font-medium text-default-300 mt-5 mb-8">
                    I’m Ryan Mmbale, a dedicated web Developer, strategist,
                    creator, and designer.
                    <br></br>
                    <br></br>
                    My pursuit is to help creators and creatives like you craft
                    elegant, efficient, and user-centric software, that clarify
                    your message and generate high-value leads. With a focus on
                    leveraging AI, systems, processes, and automation, I aim to
                    maximize your profits and streamline your path to success in
                    the ever-evolving tech landscape.
                  </p>
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
                    PERSONALITY
                  </span>
                  <h2 class="text-3xl font-medium capitalize text-default-200 mt-4">
                    Beyond the code
                  </h2>
                  <p class="text-base font-medium text-default-300 mt-5 mb-8">
                    From my first line of code in 2016 in highschool to my
                    diversified portfolio today, my coding journey has been a
                    blend of Curiosity, Consistency, and Serendipity.
                    <br></br>
                    <br></br>
                    Inspired by my mother’s(Linet MMbale) hardwork and
                    commitment in raising me as a single mother, I have always
                    believed in the transformative power of remaining confident
                    in what I do.
                  </p>
                </div>
              </div>
              {/* <!-- ebd grid-cols --> */}

              <div
                class="relative"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <img src={imageN} class="rounded-xl" alt="" />
                <div class="absolute inset-0 bg-default-950/50 rounded-xl"></div>
                <div class="hidden lg:block">
                  <div class="absolute top-10 -start-52">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                        <div class="max-w-sm text-center p-6">
                          <p class="text-base font-small text-default-300">
                            Gods plan is like a beautiful tapestry, the tragedy
                            of being human, we only see it from the back.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute top-auto bottom-20 -end-20">
                    <div class="inline-block">
                      <div class="rounded-full border border-white/10 bg-default-950/60 backdrop-blur-lg">
                        <div class="py-4 px-6">
                          <h5>Ryan mmbale</h5>
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

        {/* Tool */}
        <section
          id="tools"
          class="py-20"
          data-aos="zoom-in"
          data-aos-easing="ease"
          data-aos-duration="1000"
        >
          <div class="container">
            <div class="flex items-end justify-between mb-10">
              <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-medium capitalize text-white mb-4">
                  My skills.
                </h2>
                <p class="text-sm text-default-200 font-medium">
                  Some of the tools am familiar with.
                </p>
              </div>
            </div>
            {/* Skills */}
            <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-indigo-500/20 text-indigo-500 rounded-lg">
                      <TbBrandReact size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">React</h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-yellow-500/20 text-yellow-500  rounded-lg">
                      <TbBrandJavascript size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">
                      Javascript
                    </h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-teal-500/20 text-teal-500 rounded-lg">
                      <TbBrandMongodb size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">
                      MongoDB
                    </h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-pink-500/20 text-pink-500 rounded-lg">
                      <TbBrandMysql size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">MySQL</h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-red-500/20 text-red-500 rounded-lg">
                      <TbBrandLaravel size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">
                      Laravel
                    </h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-yellow-500/20 text-yellow-500 rounded-lg">
                      <TbBrandPython size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">Python</h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-sky-500/20 text-sky-500 rounded-lg">
                      <TbFileTypeCss size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">
                      CSS (Tailwind)
                    </h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-sky-500/20 text-sky-500 rounded-lg">
                      <FaGithub size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">GitHub</h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-teal-500/20 text-teal-500 rounded-lg">
                      <FaNodeJs size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">NodeJS</h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-pink-500/20 text-pink-500 rounded-lg">
                      <TbFileTypePhp size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">PHP</h3>
                  </div>
                </div>
              </div>
              <div class="bg-default-950/40 rounded-xl backdrop-blur-3xl">
                <div class="p-6">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="inline-flex items-center justify-center h-10 w-10 bg-yellow-500/20 text-yellow-500 rounded-lg">
                      <TbBrandFirebase size={25} />
                    </div>
                    <h3 class="text-xl font-medium text-default-200">
                      Firebase
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End of skills */}
          </div>
        </section>
        {/* End of Tool */}

        {/* More about */}
        <ContactForm />

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

export default About;
