import React, { useEffect, useRef, useState } from "react";
import profilePic from "../assets/profilepic.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ABOUT = () => {
  const [moreinfo, setMoreinfo] = useState(false);

  // Main section
  const aboutRef = useRef(null);

  // Animation refs
  const imageSectionRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // =========================
      // LEFT SIDE ANIMATION
      // =========================

      gsap.from(imageSectionRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
          markers:  false,
        },
      });


      // =========================
      // RIGHT SIDE ANIMATION
      // =========================

      gsap.from(infoRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

    }, aboutRef);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="
        min-h-screen
        w-full
        bg-[#08070c]
        text-white
        flex
        items-center
        justify-center
        px-6
        py-20
      "
    >

      <div
        className="
          w-full
          max-w-6xl
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          gap-12
          md:gap-20
        "
      >

        {/* ========================= */}
        {/* IMAGE SECTION */}
        {/* ========================= */}

        <div
          ref={imageSectionRef}
          className="
            w-full
            md:w-1/2
            flex
            flex-col
            items-center
            md:items-start
            relative
          "
        >

          {/* LOCATION */}

          <p
            className="
              mb-4
              text-sm
              sm:text-base
              tracking-wider
              uppercase
              bg-white/5
              backdrop-blur-md
              px-3
              py-2
              rounded-md
            "
          >
            Based in India - Telangana
          </p>


          {/* IMAGE CONTAINER */}

          <div
            className="
              w-64
              h-72
              sm:w-72
              sm:h-80
              md:w-80
              md:h-96
            "
          >

            <img
              className="
                h-80
                w-72
                sm:w-72
                sm:h-80
                md:w-80
                md:h-96
                object-cover
                rounded-2xl
                border
                border-purple-500/30
                hover:scale-105
                transition-transform
                duration-300
              "
              src={profilePic}
              alt="Ajay"
            />

          </div>

        </div>


        {/* ========================= */}
        {/* ABOUT CONTENT */}
        {/* ========================= */}

        <div
          ref={infoRef}
          className="
            w-full
            md:w-1/2
            max-w-2xl
          "
        >

          {/* HEADING */}

          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
              mb-6
            "
          >
            Learning, building and becoming a better developer.
          </h1>


          {/* FIRST PARAGRAPH */}

          <p
            className="
              text-base
              sm:text-lg
              leading-7
              text-white/90
            "
          >
            I'm Ajay Mekala, a 3rd-year B.Tech Computer Science student
            with a strong interest in software development and problem
            solving.

            I regularly practice Data Structures and Algorithms using
            Python and work on coding problems to improve my logical
            thinking and problem-solving skills.
          </p>


          {/* MORE INFORMATION */}

          {moreinfo && (
            <p
              className="
                mt-5
                text-base
                sm:text-lg
                leading-7
                text-white/90
              "
            >
              Alongside DSA, I'm building my web development skills with
              HTML, CSS, JavaScript, React and Tailwind CSS. I enjoy
              turning ideas into interactive and useful web applications.

              I'm currently expanding my backend development knowledge
              and preparing myself for software development internships
              and real-world opportunities.
            </p>
          )}


          {/* SHOW MORE BUTTON */}

          <button
            onClick={() => setMoreinfo(!moreinfo)}
            className="
              rounded-3xl
              bg-purple-600
              mt-6
              px-5
              py-2
              text-white
              font-semibold
              hover:text-purple-600
              hover:bg-white
              transition-all
              duration-300
              cursor-pointer
            "
          >
            {moreinfo ? "Show Less" : "Show More"}
          </button>

        </div>

      </div>

    </section>
  );
};

export default ABOUT;