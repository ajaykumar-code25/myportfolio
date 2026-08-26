import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAVBAR = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);

  // =========================
  // NAVBAR ENTRANCE
  // =========================

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // =========================
  // MOBILE MENU ANIMATION
  // =========================

  useEffect(() => {
    if (!menuRef.current) return;

    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power3.out",
        }
      );
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="
        fixed
        top-0
        left-0
        w-full
        max-w-full
        z-[99999]
        bg-black/90
        backdrop-blur-md
        border-b
        border-white/10
      "
    >
      {/* ========================= */}
      {/* NAVBAR MAIN */}
      {/* ========================= */}

      <div
        className="
          w-full
          max-w-6xl
          mx-auto
          px-6
          py-5
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}

        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="
            text-2xl
            font-bold
            text-white
            relative
            z-[100000]
          "
        >
          A<span className="text-purple-500">K</span>.
        </a>

        {/* ========================= */}
        {/* DESKTOP MENU */}
        {/* ========================= */}

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a
            href="#home"
            className="text-purple-400 hover:text-purple-300 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-purple-400 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* ========================= */}
        {/* DESKTOP BUTTON */}
        {/* ========================= */}

        <a
          href="#contact"
          className="
            hidden
            md:block
            px-5
            py-2
            rounded-full
            border
            border-purple-500/50
            text-white
            text-sm
            hover:bg-purple-600
            transition
            duration-300
          "
        >
          Let's Connect ↗
        </a>

        {/* ========================= */}
        {/* MOBILE BUTTON */}
        {/* ========================= */}

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            md:hidden
            relative
            z-[100000]
            text-white
            text-2xl
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-lg
            hover:bg-white/10
            transition
            duration-300
          "
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ========================= */}
      {/* MOBILE MENU */}
      {/* ========================= */}

      {menuOpen && (
        <div
          ref={menuRef}
          className="
            md:hidden
            absolute
            top-full
            left-0
            w-full
            bg-black
            border-t
            border-white/10
            shadow-2xl
            z-[99998]
          "
        >
          <div className="px-6 py-6 flex flex-col gap-6">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="
                text-gray-300
                hover:text-purple-400
                transition
                duration-300
              "
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="
                text-gray-300
                hover:text-purple-400
                transition
                duration-300
              "
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="
                text-gray-300
                hover:text-purple-400
                transition
                duration-300
              "
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="
                text-gray-300
                hover:text-purple-400
                transition
                duration-300
              "
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                text-gray-300
                hover:text-purple-400
                transition
                duration-300
              "
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                text-purple-400
                font-medium
                hover:text-purple-300
                transition
                duration-300
              "
            >
              Let's Connect ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NAVBAR;