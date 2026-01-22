"use client";

import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export default function ScrollReveal({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  duration = 0.5,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariantOffset = () => {
    switch (direction) {
      case "up":
        return { x: 0, y: 75 };
      case "down":
        return { x: 0, y: -75 };
      case "left":
        return { x: 75, y: 0 };
      case "right":
        return { x: -75, y: 0 };
      default:
        return { x: 0, y: 75 };
    }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...getVariantOffset() },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
