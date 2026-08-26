import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const FOOTER = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-800 text-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              A<span className="text-purple-500">j</span>ay
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Building ideas into reality.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5">

            <a
              href="https://github.com/ajaykumar-code25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ajay-mekala-32b747430/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/ak_beast_boy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-purple-500 hover:-translate-y-1 transition-all duration-300"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Ajay. All rights reserved.
          </p>

          <p>
            Designed & Built with{" "}
            <span className="text-purple-500">React</span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default FOOTER;