import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface LoadingContextType {
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minLoadTime = 2500;
    const startTime = Date.now();

    const checkLoadComplete = () => {
      const elapsedTime = Date.now() - startTime;
      if (document.readyState === "complete" && elapsedTime >= minLoadTime) {
        setIsLoading(false);
      } else if (elapsedTime >= minLoadTime) {
        setIsLoading(false);
      } else {
        requestAnimationFrame(checkLoadComplete);
      }
    };

    checkLoadComplete();
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading deve ser usado dentro de LoadingProvider");
  }
  return context;
};
