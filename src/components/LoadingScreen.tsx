import { motion } from "framer-motion";
import { useLoading } from "@/contexts/LoadingContext";

export const LoadingScreen = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-white dark:bg-black flex items-center justify-center z-50"
    >
      <div className="relative w-32 h-32">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(none)",
          }}
        >
          {/* Retângulo com stroke animation */}
          <motion.rect
            x="12"
            y="12"
            width="96"
            height="96"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            rx="4"
            ry="4"
            className="text-black dark:text-white"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />

          {/* Letra N */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 1.2,
            }}
          >
            {/* Linha esquerda do N */}
            <line
              x1="30"
              y1="85"
              x2="30"
              y2="35"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              className="text-black dark:text-white"
            />

            {/* Linha diagonal do N */}
            <line
              x1="30"
              y1="35"
              x2="90"
              y2="85"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              className="text-black dark:text-white"
            />

            {/* Linha direita do N */}
            <line
              x1="90"
              y1="35"
              x2="90"
              y2="85"
              stroke="currentColor"
              strokeWidth="9"
              strokeLinecap="round"
              className="text-black dark:text-white"
            />
          </motion.g>
        </svg>
      </div>
    </motion.div>
  );
};
