import React from "react";

import { imageO, imageP, imageL } from "../pages";
import Me from "../assets/me.jpeg";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function ContactForm() {
  return (
    <>
      <section id="home" class="relative pt-[74px] overflow-hidden">
        <div class="container-fluid lg:px-10 md:px-3 relative overflow-hidden">
          <div class="lg:py-2 py-[2px] md:rounded-lg shadow bg-default-950/40 backdrop-blur-3xl">
            <div class="container relative">
              <div class="absolute top-0">
                <i
                  data-lucide="badge"
                  class="animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"
                ></i>
              </div>
              <div class="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                <div
                  class="md:col-span-7"
                  data-aos="fade-right"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                >
                  <div class="md:me-6">
                    <div class="lg:col-span-6 col-span-2">
                      <div class="bg-primary/20 rounded-xl">
                        <div class="p-10">
                          <h5 class="text-xl text-white mb-4">
                            <b>Reach Out About Anything</b>
                          </h5>
                          <form class="space-y-2 mb-6">
                            <label for="name" class="text-base text-white">
                              Name:
                            </label>
                            <div class="relative">
                              <input
                                type="text"
                                id="name"
                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Enter Your name"
                                name="name"
                                required
                              />
                            </div>
                            <label for="email" class="text-base text-white">
                              Email:
                            </label>
                            <div class="relative">
                              <input
                                type="email"
                                id="email"
                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Enter Your Email"
                                name="email"
                                required
                              />
                            </div>
                            <label for="phone" class="text-base text-white">
                              Phone:
                            </label>
                            <div class="relative">
                              <input
                                type="tel"
                                id="phone"
                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Your Phone Number"
                                name="phone"
                                required
                              />
                            </div>
                            <label for="message" class="text-base text-white">
                              Message:
                            </label>
                            <div class="relative">
                              <input
                                type="text"
                                id="message"
                                class="py-4 ps-4 pe-40 w-full h-12 text-white rounded-lg bg-default-950/60 backdrop-blur-3xl border-white/10 focus:ring-0 focus:border-white/10"
                                placeholder="Your Message"
                                name="message"
                                required
                                span="2"
                              />
                              <button
                                type="submit"
                                class="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 transition-all bg-primary hover:bg-primary-hover border-primary hover:border-primary-hover text-white rounded-md"
                              >
                                Send Message
                                <i data-lucide="move-right" class="h-4 w-4"></i>
                              </button>
                            </div>
                          </form>
                          <div>
                            <h6 class="text-base text-white mb-4">
                              Follow ME :
                            </h6>
                            <ul class="flex flex-wrap items-center gap-1">
                              <li>
                                <a
                                  target="blank"
                                  href="https://github.com/ryannthegr8;"
                                  class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaGithub />
                                </a>
                              </li>
                              <li>
                                <a
                                  target="blank"
                                  href="https://x.com/_devRyann"
                                  class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaTwitter />
                                </a>
                              </li>
                              <li>
                                <a
                                  target="blank"
                                  href="https://www.linkedin.com/in/ryan-mmbale-392220216/"
                                  class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaLinkedin />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://www.instagram.com/_devryann/"
                                  class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                                >
                                  <FaInstagram />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="md:col-span-5"
                  data-aos="fade-left"
                  data-aos-easing="ease"
                  data-aos-duration="1000"
                >
                  <div class="flex gap-4 md:gap-6 tilt">
                    <div class="flex flex-col gap-4 md:gap-6 pt-10 md:pt-16 w-full">
                      <img
                        src={Me}
                        class="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                      <img
                        src={imageO}
                        class="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                    </div>
                    <div class="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                      <div class="absolute bottom-0 end-0 -z-10">
                        <i
                          data-lucide="triangle"
                          class="animate-[spin_10s_linear_infinite] h-12 w-12 fill-primary/20 text-transparent"
                        ></i>
                      </div>
                      <img
                        src={imageP}
                        class="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                      <img
                        src={imageL}
                        class="w-full h-40 md:h-[278px] rounded-lg object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
