import React from "react";
import { AiFillDownCircle } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div
      className="w-full mx-auto p-4 md:p-8 grid bg-[#161616e8] rounded-md"
      id="AboutUs"
    >
      <div className="w-full mx-auto p-4 md:p-8 grid bg-[#161616e8] rounded-md">
        <main className="mx-auto max-w-3xl px-4 md:px-8">
          <h1 className="pb-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#9747ff] underline">
            About Us
          </h1>
          <section className="grid grid-cols-1 gap-y-3">
            <details open className="group py-1 text-base md:text-lg">
              <summary className="flex cursor-pointer flex-row items-center justify-between py-4 text-lg md:text-xl font-semibold text-white marker:[font-size:0px] border-b-2 border-[#9747ff]">
                <AiFillDownCircle
                  className="fill-[#9747ff] mx-2 transition-transform group-open:rotate-180"
                  size={30}
                />
                My Name is Johan Leeman, and, following, I will take you back to
                the secret behind creation of YONO:
              </summary>
              <p className="text-white mt-2">
                From my childhood, I was interested in traveling, discovering,
                doing things differently than expected, stubbornly striving for
                better & more self-improvement.
                <br />
                <br /> After completing my studies in photography, I moved to
                Australia to emigrate in search of innovation, but a stopover in
                Japan was the breakthrough for plenty of my creative businesses’
                ideas.
                <br />
                <br /> Few more stops at The United States, Thailand, Korea,
                China were influential as well. Yet the Japanese culture was so
                enchanting that I spent 20 years of my life enjoying that
                mesmerising rich culture & thriving in the business realm.
              </p>
            </details>

            <details className="group py-1 text-base md:text-lg">
              <summary className="flex cursor-pointer flex-row items-center justify-between py-4 text-lg md:text-xl font-semibold text-white marker:[font-size:0px] border-b-2 border-[#9747ff]">
                <div className="flex items-center">
                  <AiFillDownCircle
                    className="fill-[#9747ff] mx-2 transition-transform group-open:rotate-60"
                    size={30}
                  />
                  Few examples of my entrepreneur journey are:
                </div>
              </summary>
              <p className="text-white mt-2">
                1. <b>Naomi Cosmetics:</b> Returned to Belgium after closing
                Naomi Cosmetics 10 years ago, was an unforgettable journey.
                <br />
                <br />
                2. <b>‘tGoudenMandeken:</b> first café I opened 10 years ago,
                which was, and still is, reflecting the deep Belgian culture.
                <br />
                <br />
                3. <b>Yo’s Place:</b> A new concept coffee and Belgian beer Café
                is born and ready after a year after 10 years of experience.
                <br />
                <br />
                4. <b>Yo’s Place:</b> second concept coffee and Belgian beer
                Café opened after 2 years of running the successful Yo’s Place
                concept, and is more then ready for franchise opportunities.
                <br />
                <br />
                5. <b>Then Covid came…:</b> But used the bad moments to source,
                create, design, produce Italian coffee IL DIAVOLO di TORINO.
                <br />
                <br />
                6. <b>New plans for the future:</b> creating more enhanced new
                drinks, grow awareness worldwide and start franchises of Yo’s
                Place abroad.
              </p>
            </details>
          </section>
        </main>
      </div>
      <div className="w-full md:w-[80%] mx-auto mt-8 md:mt-20 p-4 md:p-8 grid bg-[#161616e8] rounded-md">
        <h1 className="pb-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#9747ff] underline">
          The Secret Behind YONO
        </h1>
        <p className="text-white text-base md:text-xl lg:text-2xl">
          After all my years of exploring & experiencing different cultures, I
          have come to realize that with Yo’s Place as a home, a drink embodies
          the essence of our human connection; a drink serves as our common
          ground where individuals from diverse backgrounds can gather, bond,
          and share moments of joy, sorrow, and everything in between. Through
          the act of raising a glass, we find solace in companionship,
          solidarity in shared experiences, and a simple reminder of our
          fundamental need for connection with one another. So, from now on we
          say not just “cheers”, we say “YONO” then again “YONO” ;)
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
