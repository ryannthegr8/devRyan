import React, { useEffect } from "react";

import Me from "../assets/me.jpeg";
//Components
import { Nav, Footer } from "../components";

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
  imageL,
  imageM,
  imageN,
  imageO,
  imageP,
  imageQ,
} from "../pages";

import { TbEyePlus, TbBulb } from "react-icons/tb";

import aos from "aos";
import "aos/dist/aos.css";

function Services() {
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
                    My services.
                  </h1>
                  <p class="text-base text-default-300 font-medium lg:max-w-md mx-auto">
                    Craft your vision with me.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Container End --> */}
        </section>
        {/* <!-- Hero end  --> */}

        {/* Page content */}
        <section id="faq" class="pb-24">
          <div class="container">
            <div class="grid lg:grid-cols-2 gap-6">
              <div
                class="hs-accordion-group space-y-4"
                data-aos="fade-right"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div
                  class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
                  id="faq-2"
                >
                  <button
                    class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all active"
                    aria-controls="faq-2"
                  >
                    <h5 class="text-base font-semibold flex">
                      <TbBulb size={20} /> Custom Software Development
                    </h5>
                    <TbEyePlus size={20} />
                  </button>
                  <div
                    id="faq-2"
                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="faq-2"
                  >
                    <div class="px-6 pb-4 pt-0">
                      <p class="text-default-300 text-sm font-medium">
                        Craft bespoke software solutions for businesses,
                        integrating them seamlessly with existing systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
                  id="faq-3"
                >
                  <button
                    class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                    aria-controls="faq-3"
                  >
                    <h5 class="text-base font-semibold flex">
                      <TbBulb size={20} /> Mobile App Development
                    </h5>
                    <TbEyePlus size={20} />
                  </button>
                  <div
                    id="faq-3"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="faq-3"
                  >
                    <div class="px-6 pb-4 pt-0">
                      <p class="text-default-300 text-sm font-medium">
                        Designing and developing software applications
                        specifically for smartphones and tablets.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
                  id="faq-1"
                >
                  <button
                    class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                    aria-controls="faq-accordion-1"
                  >
                    <h5 class="text-base font-semibold flex">
                      <TbBulb size={20} />
                      Web App Development
                    </h5>
                    <TbEyePlus size={20} />
                  </button>
                  <div
                    id="faq-accordion-1"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="faq-1"
                  >
                    <div class="px-6 pb-4 pt-0">
                      <p class="text-default-300 text-sm font-medium">
                        Creating interactive web applications that run on a
                        server and can be accessed by users through a web
                        browser.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="hs-accordion-group space-y-4"
                data-aos="fade-left"
                data-aos-easing="ease"
                data-aos-duration="1000"
              >
                <div
                  class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
                  id="faq-2"
                >
                  <button
                    class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                    aria-controls="faq-2"
                  >
                    <h5 class="text-base font-semibold flex">
                      <TbBulb size={20} />
                      Software Testing and Quality Assurance
                    </h5>
                    <TbEyePlus size={20} />
                  </button>
                  <div
                    id="faq-2"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="faq-2"
                  >
                    <div class="px-6 pb-4 pt-0">
                      <p class="text-default-300 text-sm font-medium">
                        Ensuring software applications are functional, reliable,
                        and meet user requirements through rigorous testing.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden"
                  id="faq-3"
                >
                  <button
                    class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                    aria-controls="faq-3"
                  >
                    <h5 class="text-base font-semibold flex">
                      <TbBulb size={20} />
                      Database Management
                    </h5>
                    <TbEyePlus size={20} />
                  </button>
                  <div
                    id="faq-3"
                    class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="faq-3"
                  >
                    <div class="px-6 pb-4 pt-0">
                      <p class="text-default-300 text-sm font-medium">
                        Design, develop, and maintain efficient databases to
                        store and manage large amounts of data for various
                        applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="hs-accordion border border-white/10 bg-default-950/40 backdrop-blur-3xl rounded-lg overflow-hidden active"
                  id="faq-1"
                >
                  <button
                    class="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-white transition-all"
                    aria-controls="faq-accordion-1"
                  >
                    <h5 class="text-base font-semibold flex">
                      <TbBulb size={20} />
                      UI/ UX Design
                    </h5>
                    <TbEyePlus size={20} />
                  </button>
                  <div
                    id="faq-accordion-1"
                    class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="faq-1"
                  >
                    <div class="px-6 pb-4 pt-0">
                      <p class="text-default-300 text-sm font-medium">
                        Craft user-friendly interfaces and positive user
                        experiences for software applications, ensuring ease of
                        use and enjoyment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End of Page content */}

        <Footer />

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

export default Services;
