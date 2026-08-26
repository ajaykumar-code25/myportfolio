import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);


const CONTACT = () => {

  const contacts = [
    {
      platform: "Instagram",
      link: "https://www.instagram.com/ak_beast_boy/",
      icon: <FaInstagram />,
    },
    {
      platform: "Email",
      link: "mailto:ajaykumarsir2005@gmail.com",  


      icon: <FaEnvelope />,
    },
    {
      platform: "GitHub",
      link: "https://github.com/ajaykumar-code25",
      icon: <FaGithub />,
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/ajay-mekala-32b747430/",
      icon: <FaLinkedin />,
    },
  ];


  // =========================
  // REFS
  // =========================

  const contactRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);


  // =========================
  // GSAP
  // =========================

  useEffect(() => {

    const ctx = gsap.context(() => {

      // =========================
      // INITIAL STATES
      // =========================

      gsap.set(labelRef.current, {
        opacity: 0,
        y: 20,
        filter: "blur(8px)",
      });


      gsap.set(headingRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.9,
      });


      gsap.set(cardsRef.current.children, {
        opacity: 0,
        y: 70,
        rotateX: 20,
        scale: 0.85,
      });


      // =========================
      // TIMELINE
      // =========================

      const tl = gsap.timeline({

        scrollTrigger: {
          trigger: contactRef.current,

          start: "top 65%",

          toggleActions: "play none none reverse",

          markers:  false,
        },

      });


      // =========================
      // CONTACT LABEL
      // =========================

      tl.to(labelRef.current, {

        opacity: 1,

        y: 0,

        filter: "blur(0px)",

        duration: 0.7,

        ease: "power3.out",

      });


      // =========================
      // HEADING
      // =========================

      tl.to(
        headingRef.current,
        {

          opacity: 1,

          y: 0,

          scale: 1,

          duration: 0.8,

          ease: "back.out(1.4)",

        },
        "-=0.3"
      );


      // =========================
      // CONTACT CARDS
      // =========================

      tl.to(
        cardsRef.current.children,
        {

          opacity: 1,

          y: 0,

          rotateX: 0,

          scale: 1,

          duration: 0.8,

          stagger: 0.15,

          ease: "back.out(1.5)",

        },
        "-=0.3"
      );


    }, contactRef);


    // =========================
    // CLEANUP
    // =========================

    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={contactRef}
      id="contact"

      className="
        relative
        w-full
        min-h-screen

        bg-black

        text-white

        px-6
        py-20

        flex
        flex-col
        justify-center

        overflow-hidden
      "
    >


      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div
        className="
          absolute

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          bg-purple-600/10

          blur-[150px]

          rounded-full

          pointer-events-none
        "
      />


      {/* ========================= */}
      {/* HEADING */}
      {/* ========================= */}

      <div
        className="
          relative
          text-center
          mb-14
        "
      >

        {/* CONTACT LABEL */}

        <p
          ref={labelRef}

          className="
            text-purple-500

            uppercase

            tracking-[5px]

            text-sm
          "
        >
          Contact
        </p>


        {/* MAIN HEADING */}

        <h1
          ref={headingRef}

          className="
            text-4xl
            sm:text-5xl

            font-bold

            mt-3
          "
        >
          Let's{" "}

          <span className="text-purple-500">
            Connect
          </span>

        </h1>

      </div>


      {/* ========================= */}
      {/* CONTACT CARDS */}
      {/* ========================= */}

      <div
        ref={cardsRef}

        className="
          relative

          w-full
          max-w-5xl

          mx-auto

          grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4

          gap-5
        "
      >

        {contacts.map((info) => (

          <a
            key={info.platform}

            href={info.link}

            target="_blank"

            rel="noopener noreferrer"

            className="
              group

              relative

              flex
              flex-col

              items-center
              justify-center

              gap-4

              h-44

              rounded-2xl

              border
              border-zinc-800

              bg-zinc-950/80

              backdrop-blur-xl

              overflow-hidden

              transition-all
              duration-500

              hover:border-purple-500/70

              hover:-translate-y-3

              hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
            "
          >

            {/* ========================= */}
            {/* CARD GLOW */}
            {/* ========================= */}

            <div
              className="
                absolute

                -top-16
                -right-16

                w-32
                h-32

                bg-purple-600/20

                blur-3xl

                rounded-full

                opacity-0

                group-hover:opacity-100

                transition-opacity
                duration-500
              "
            />


            {/* ========================= */}
            {/* ICON */}
            {/* ========================= */}

            <span
              className="
                relative

                text-4xl

                text-purple-500

                transition-all
                duration-500

                group-hover:scale-125

                group-hover:rotate-6

                group-hover:text-purple-400
              "
            >
              {info.icon}
            </span>


            {/* ========================= */}
            {/* PLATFORM */}
            {/* ========================= */}

            <h2
              className="
                relative

                text-lg

                font-medium

                transition-colors
                duration-300

                group-hover:text-purple-300
              "
            >
              {info.platform}
            </h2>


            {/* ========================= */}
            {/* ARROW */}
            {/* ========================= */}

            <span
              className="
                absolute

                bottom-4
                right-5

                text-purple-500

                opacity-0

                translate-x-2

                group-hover:opacity-100

                group-hover:translate-x-0

                transition-all
                duration-300
              "
            >
              ↗
            </span>

          </a>

        ))}

      </div>


      {/* ========================= */}
      {/* BOTTOM TEXT */}
      {/* ========================= */}

      <p
        className="
          relative

          text-center

          text-gray-500

          text-sm

          mt-16
        "
      >
        I'm always open to new opportunities and interesting conversations.
      </p>


    </section>
  );
};


export default CONTACT;