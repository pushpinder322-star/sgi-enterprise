import React from "react";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.015,
        filter: "blur(6px)",
      }}

      whileInView={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}

      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}

      viewport={{
        once: true,
        amount: 0.12,
      }}
    >
      {children}
    </motion.div>
  );
}