import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = () => {

  const projects = [
    {
      title: "EXPENSE TRACKER",
      img: "",
      view: "https://your-project-link.co",
    },
    {
      title: "PORTFOLIO WEBSITE",
      img: "",
      view: "https://your-project-link.co",
    },
    {
      title:"GUESS THE NUMBER",
      img:"",
      view:"https://ajaykumar-code25.github.io/guess-game/"
    }
  ];

  // =========================
  // REFS
  // =========================

  const projectsRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);


  // =========================
  // GSAP ANIMATION
  // =========================

  useEffect(() => {

    const ctx = gsap.context(() => {

      // Initial states
      gsap.set(headingRef.current, {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      });

      gsap.set(cardsRef.current.children, {
        opacity: 0,
        y: 80,
        scale: 0.85,
      });


      // =========================
      // MAIN TIMELINE
      // =========================

      const tl = gsap.timeline({

        scrollTrigger: {
          trigger: projectsRef.current,

          start: "top 65%",

          toggleActions: "play none none reverse",

          markers:  false,
        },

      });


      // =========================
      // HEADING
      // =========================

      tl.to(headingRef.current, {

        opacity: 1,
        y: 0,

        filter: "blur(0px)",

        duration: 0.9,

        ease: "power3.out",

      });


      // =========================
      // CARDS
      // =========================

      tl.to(
        cardsRef.current.children,
        {

          opacity: 1,

          y: 0,

          scale: 1,

          duration: 0.8,

          stagger: 0.2,

          ease: "back.out(1.4)",

        },
        "-=0.4"
      );


      // =========================
      // IMAGE REVEAL
      // =========================

      const images =
        cardsRef.current.querySelectorAll(".project-image");

      gsap.from(images, {

        scale: 1.2,

        opacity: 0,

        duration: 1.2,

        stagger: 0.2,

        ease: "power3.out",

        scrollTrigger: {

          trigger: projectsRef.current,

          start: "top 65%",

          toggleActions: "play none none reverse",

        },

      });

    }, projectsRef);


    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={projectsRef}
      id="projects"
      className="
        relative
        w-full
        min-h-screen
        bg-[#08070c]
        text-white
        px-6
        py-20
        overflow-hidden
      "
    >

      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div
        className="
          absolute
          top-1/4
          left-1/2
          -translate-x-1/2
          w-96
          h-96
          bg-purple-600/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />


      {/* ========================= */}
      {/* HEADING */}
      {/* ========================= */}

      <h1
        ref={headingRef}
        className="
          relative
          text-4xl
          md:text-5xl
          font-bold
          text-center
          mb-14
          text-purple-500
        "
      >
        Projects
      </h1>


      {/* ========================= */}
      {/* PROJECT CARDS */}
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
          lg:grid-cols-3

          gap-7
        "
      >

        {projects.map((project) => (

          <div
            key={project.title}
            className="
              group
              relative

              bg-white/5
              backdrop-blur-xl

              border
              border-white/10

              rounded-2xl

              overflow-hidden

              transition-all
              duration-500

              hover:-translate-y-3
              hover:border-purple-500/60

              hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]
            "
          >

            {/* ========================= */}
            {/* PURPLE GLOW */}
            {/* ========================= */}

            <div
              className="
                absolute
                -top-20
                -right-20

                w-40
                h-40

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
            {/* PROJECT IMAGE */}
            {/* ========================= */}

            <div
              className="
                relative
                w-full
                h-52

                bg-white/5

                overflow-hidden
              "
            >

              {project.img ? (

                <img
                  src={project.img}
                  alt={project.title}

                  className="
                    project-image

                    w-full
                    h-full

                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-110
                  "
                />

              ) : (

                <div
                  className="
                    project-image

                    w-full
                    h-full

                    flex
                    items-center
                    justify-center

                    text-gray-500
                  "
                >
                  No Image
                </div>

              )}

            </div>


            {/* ========================= */}
            {/* PROJECT DETAILS */}
            {/* ========================= */}

            <div className="relative p-6">

              <h3
                className="
                  text-xl
                  font-semibold

                  group-hover:text-purple-400

                  transition-colors
                  duration-300
                "
              >
                {project.title}
              </h3>


              {/* SMALL LINE */}

              <div
                className="
                  mt-3
                  w-10
                  h-[2px]

                  bg-purple-500

                  group-hover:w-20

                  transition-all
                  duration-500
                "
              />


              {/* BUTTON */}

              <a
                href={project.view}
                target="_blank"
                rel="noopener noreferrer"

                className="
                  inline-flex
                  items-center
                  gap-2

                  mt-5

                  px-5
                  py-2.5

                  rounded-lg

                  bg-purple-600

                  text-sm
                  font-medium

                  hover:bg-purple-500

                  hover:gap-3

                  transition-all
                  duration-300
                "
              >
                View Project
                <span>↗</span>
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default PROJECTS;