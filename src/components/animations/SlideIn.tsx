import { motion } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

interface SlideInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
}

const getInitialPosition = (direction: string) => {
  switch (direction) {
    case "left":
      return { x: -40, opacity: 0 };
    case "right":
      return { x: 40, opacity: 0 };
    case "up":
      return { y: 40, opacity: 0 };
    case "down":
      return { y: -40, opacity: 0 };
    default:
      return { x: -40, opacity: 0 };
  }
};

export const SlideIn = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = "left",
  className = "",
}: SlideInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition(direction)}
      animate={
        isInView ? { x: 0, y: 0, opacity: 1 } : getInitialPosition(direction)
      }
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
