import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
const AboutUs = () => {
  return (
    <div
      className="w-full mx-auto p-8 grid md:grid-cols-2 md:max-w-[80%]: bg-[#161616e8] rounded-md"
      id="AboutUs"
    >
      {/* <div className="flex flex-col justify-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#9747ff] font-bold mx-8 my-4">
          About us
        </h1>
        <p className="mx-8 text-white leading-6">
          My Name is{" "}
          <span className=" font-bold text-lg text-[#9747ff]">
            Johan Leeman ,
          </span>
          and, following, I will take you back to the secret behind creation of
          YONO: <br />
          From my childhood I was interested in traveling, discovering, doing
          things differently than expected, stubbornly striving for better& more
          self-improvement.
          <br />
          After completingmy studies in photography, I moved to Australia to
          emigrate in search of innovation, but a stopover in Japan was the
          breakthrough for plenty of my creative businesses’ ideas.
          <br />
          Few more stops at The United States, Thailand, Korea, China were
          influential as well. Yet the Japanese culture was so enchanting that I
          spent 20 years of my life enjoying that mesmerising rich culture &
          thriving in the business realm.
        </p>
        <h1 className="mx-8 text-white font-bold text-2xl">
          Few examples of my entrepreneur journey are:
        </h1>
        <p className="mx-8 text-white leading-6">
          <b>1. Naomi Cosmetics</b> : Returned to Belgium after closing Naomi
          Cosmetics 10 years ago, was an unforgettable journey. <br />
          <b>2. ‘tGoudenMandeken</b> : first café I opened 10 years ago, which
          was, and still is, reflecting the deep Belgian culture.
        </p>
      </div> */}

      <main class="mx-auto max-w-3xl px-12">
        <h1 class=" pb-4 text-center xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl font-bold text-[#9747ff]  underline">
          About Us
        </h1>
        <section class="grid grid-cols-1 gap-y-3 ">
          <details open class="group py-1 text-lg ">
            <summary class="flex cursor-pointer flex-row items-center justify-between py-4 text-xl font-semibold text-white marker:[font-size:0px] border-b-2 border-[#9747ff] ">
              My Name is Johan Leeman, and, following, I will take you back to
              the secret behind creation of YONO:
              <AiFillDownCircle
                className="fill-[#9747ff] mx-2 w-24 right-0 text-base transition-transform  group-open:rotate-180"
                size={30}
              />
            </summary>
            <p class="text-white">
              <br />
              From my childhood I was interested in traveling, discovering,
              doing things differently than expected, stubbornly striving for
              better& more self-improvement.
              <br />
              <br /> After completingmy studies in photography, I moved to
              Australia to emigrate in search of innovation, but a stopover in
              Japan was the breakthrough for plenty of my creative businesses’
              ideas.
              <br />
              <br /> Few more stops at The United States, Thailand, Korea, China
              were influential as well. Yet the Japanese culture was so
              enchanting that I spent 20 years of my life enjoying that
              mesmerising rich culture & thriving in the business realm.
            </p>
          </details>

          <details class="group py-1 text-lg ">
            <summary class="flex cursor-pointer flex-row items-center justify-between py-4 text-xl font-semibold text-white marker:[font-size:0px] border-b-2 border-[#9747ff] ">
              Few examples of my entrepreneur journey are:{" "}
              <AiFillDownCircle
                className="fill-[#9747ff] mx-2 w-24 right-0 text-base transition-transform  group-open:rotate-180 "
                size={30}
              />
            </summary>
            <br />
            <p class="text-white">
              1. <b>Naomi Cosmetics :</b> Returned to Belgium after closing
              Naomi Cosmetics 10 years ago, was an unforgettable journey. <br />
              <br />
              2. <b>‘tGoudenMandeken :</b> first café I opened 10 years ago,
              which was, and still is, reflecting the deep Belgian culture.
              Naomi Cosmetics 10 years ago, was an unforgettable journey. <br />
              <br />
              3. <b>Yo’s Place: :</b> A new concept coffee and Belgian beer Café
              is born and readyafter a year after 10 years of experience.
              <br />
              <br />
              4. <b>a second concept coffee :</b> and Belgian beer Café opened
              after 2 years of running the successful Yo’s Place concept, and is
              more then ready for franchise opportunities.
              <br />
              <br />
              5. <b>Then Covid came… :</b> But used the bad moments to source,
              create, design, produce Italian coffee IL DIAVOLO di TORINO.
              <br />
              <br />
              6. <b>New plans for the future:</b> creating more enhanced new
              drinks, grow awareness worldwide and start franchises of Yo’s
              Place abroad.
            </p>
          </details>

          {/* <details class="group py-1 text-lg">
            <summary class="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-gray-800 marker:[font-size:0px]">
              Can I just copy and paste this code for my own project?
              <svg
                class="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </summary>
            <p class="text-gray-500">
              Absolutely! I think sharing ideas (and sometimes code) are
              invaluable to the learning process. And let's face it: sometimes
              you just want to get a simple FAQ or accordion section up fast and
              move on to more pressing parts of whatever you're building.
            </p>
          </details> */}
        </section>
      </main>
      <img
        className={`w-full sm:w-96 h-auto my-10 mx-auto bg-[#1b1b1b] border-solid  rounded-md $`}
        src="/assets/img/Cola.png"
        alt="cola"
      />
    </div>
  );
};

export default AboutUs;
