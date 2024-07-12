import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer class="bg-default-950/40 backdrop-blur-3xl">
        <div class="container py-20">
          <div class="grid md:grid-cols-4 grid-cols-2 gap-10 lg:gap-16">
            <div class="md:col-span-2 col-span-2">
              <img src="assets/images/logo.png" class="h-10" alt="" />
              <p class="md:w-3/4 text-base font-medium text-default-200 mt-6">
                Gods plan is like a beautiful tapestry, the tragedy of being
                human is we only get to see it from the back.
              </p>
              <div class="mt-6">
                <h6 class="text-base text-white mb-4">Follow US :</h6>
                <ul class="flex flex-wrap items-center gap-1">
                  <li>
                    <a
                      target="blank"
                      href="https://github.com/ryannthegr8"
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
                      target="blank"
                      href="https://www.instagram.com/_devryann/"
                      class="h-10 w-10 inline-flex items-center justify-center border border-white/10 rounded-lg transition-all duration-500 group hover:bg-primary"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <ul class="flex flex-col gap-3">
                <h5 class="xl:text-xl lg:text-lg font-medium text-default-200 mb-2">
                  Company
                </h5>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    Developers
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul class="flex flex-col gap-3">
                <h5 class="xl:text-xl lg:text-lg font-medium text-default-200 mb-2">
                  Service
                </h5>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    Developer Driven
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    DMCA policy
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    Private IPFS
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="text-base font-normal text-slate-300 hover:text-primary transition-all"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Container End --> */}

        <div class="border-t border-white/10 py-6">
          <div class="container flex flex-wrap justify-center items-center gap-4 h-full md:justify-between text-center md:text-start">
            <p class="text-base font-medium text-default-400">
              <script>document.write(new Date().getFullYear());</script>©
              DevRyan -<a href="#">Crafted by Engr.Ryan 💜</a>
            </p>
            <p class="text-base font-medium text-default-400">
              <a href="#">You Should Dream, it is the Will of God</a>
            </p>
          </div>
          {/* <!-- Flex End --> */}
        </div>
        {/* <!-- Container End --> */}
      </footer>
    </>
  );
}

export default Footer;
