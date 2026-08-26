import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CURSOR = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: 0.15,
        ease: "linear",
      }}
      style={{
        width: "20px",
        height: "20px",
        border: "2px solid white",
        borderRadius: "50%",
        position: "fixed",
        pointerEvents: "none",
        translateX: "-50%",
        translateY: "-50%",
        zIndex: [100000],
      }}
    />
  );
};

export default CURSOR;