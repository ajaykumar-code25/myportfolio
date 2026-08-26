import React, { useEffect, useRef } from "react";
import profilePic from "../assets/herosection.png";
import gsap from "gsap";

const HOME = () => {
  const homeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".hero-image",
        {
          x: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".hero-buttons",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".status-card",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="home"
      ref={homeRef}
      className="min-h-screen w-full bg-[#08070c] text-white flex items-center justify-center px-6 pt-24"
    >
      <div className="w-full max-w-6xl">

        {/* HERO CONTENT */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT SIDE */}
          <div className="hero-text max-w-2xl">

            <p className="text-purple-400 text-lg mb-4">
              Hi, I'm Ajay 👋
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              I build, learn
              <br />
              <span className="text-purple-500">
                & solve with code.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-gray-400 text-lg leading-relaxed">
              I'm a 3rd-year Computer Science student passionate about
              software development, Data Structures & Algorithms, and
              building modern web applications with React.
            </p>

            {/* BUTTONS */}
            <div className="hero-buttons flex flex-wrap gap-4 mt-8">
               <a
                 href="#projects"
                 className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition duration-300 font-medium"
                  >
                  View My Projects ↗
                </a>

              <button className="px-6 py-3 rounded-lg border border-gray-700 hover:border-purple-500 hover:text-purple-400 transition duration-300 font-medium">
                Download Resume ↓
              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-image relative">

            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>

            <img
              className="relative  w-72 object-cover rounded-2xl border border-purple-500/30 rotate-[10deg] hover:rotate-[0deg] transition-transform duration-500"
              src={profilePic}
              alt="Ajay"
            />

          </div>

        </div>

        {/* STATUS CARD */}
        <div className="status-card mt-12 flex justify-end">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4">

            <p className="text-sm font-medium">
              <span className="text-green-400">●</span>{" "}
              Open to Opportunities
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Internships / Software Development
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default HOME;