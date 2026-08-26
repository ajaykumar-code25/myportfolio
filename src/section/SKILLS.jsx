import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = () => {

  const skills = [
    {
      name: "Python",
      icon: FaPython,
      level: "Intermediate",
    },
    {
      name: "DSA",
      icon: "🧠",
      level: "Intermediate",
    },
    {
      name: "HTML",
      icon: FaHtml5,
      level: "Intermediate",
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      level: "Intermediate",
    },
    {
      name: "React",
      icon: FaReact,
      level: "Beginner–Intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      level: "Beginner–Intermediate",
    },
    {
      name: "Git & GitHub",
      icon: FaGithub,
      level: "Learning",
    },
    {
      name: "SQL",
      icon: SiMysql,
      level: "Learning",
    },
    {
      name: "Backend Development",
      icon: "⚙️",
      level: "Learning",
    },
  ];


  // =========================
  // REFS
  // =========================

  const skillsRef = useRef(null);
  const skillsHeadRef = useRef(null);
  const skillsCardRef = useRef(null);


  // =========================
  // GSAP
  // =========================

  useEffect(() => {

    const ctx = gsap.context(() => {

      // =========================
      // HEADING ANIMATION
      // =========================

      gsap.from(skillsHeadRef.current, {

        x: -100,
        opacity: 0,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: skillsRef.current,

          start: "top 50%",

          toggleActions: "play none none reverse",

          markers:  false,
        },

      });


      // =========================
      // CARDS ANIMATION
      // =========================

       gsap.from(skillsCardRef.current, {

        y: 60,
        opacity: 0,
        scale: 0.9,

        duration: 0.7,

        stagger: 0.1,

        ease: "power3.out",

        scrollTrigger: {
          trigger: skillsRef.current,

          start: "top 50%",

          toggleActions: "play none none reverse",

          markers:  false,
        },

      });


    }, skillsRef);


    // CLEANUP

    return () => ctx.revert();

  }, []);


  return (

    <section
      ref={skillsRef}
      id="skills"
      className="
        min-h-screen
        w-full
        bg-[#08070c]
        text-white
        flex
        items-center
        justify-center
        flex-col
        px-6
        py-20
      "
    >

      {/* ========================= */}
      {/* HEADING */}
      {/* ========================= */}

      <h1
        ref={skillsHeadRef}
        className="
          text-4xl
          font-bold
          text-left
          mb-10
          text-purple-500
        "
      >
        Skills
      </h1>


      {/* ========================= */}
      {/* SKILL CARDS */}
      {/* ========================= */}

      <div
         ref={skillsCardRef}
        className="
          w-full
          max-w-5xl
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
        "
      >

        {skills.map((skill) => {

          const Icon = skill.icon;

          return (

            <div
              key={skill.name}
              className="
                bg-white/5
                backdrop-blur-md
                border
                border-white/10
                rounded-xl
                px-5
                py-6

                hover:border-purple-500/50
                hover:bg-purple-500/10

                transition-all
                duration-300

                cursor-pointer
              "
            >

              {/* ICON */}

              <div
                className="
                  text-3xl
                  text-purple-400
                  mb-3
                "
              >

                {typeof Icon === "string" ? (
                  <span>{Icon}</span>
                ) : (
                  <Icon />
                )}

              </div>


              {/* NAME */}

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>


              {/* LEVEL */}

              <p className="text-sm text-gray-400 mt-1">
                {skill.level}
              </p>

            </div>

          );

        })}

      </div>

    </section>
  );
};

export default SKILLS;