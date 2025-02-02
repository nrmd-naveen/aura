import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the context type
interface ScreenWidthContextType {
  width: number;
}

const ScreenWidthContext = createContext<ScreenWidthContextType | undefined>(undefined);

interface ScreenWidthProviderProps {
  children: ReactNode;
}

export const ScreenWidthProvider: React.FC<ScreenWidthProviderProps> = ({ children }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenWidthContext.Provider value={{ width }}>
      {children}
    </ScreenWidthContext.Provider>
  );
};

export const useScreenWidth = (): number => {
  const context = useContext(ScreenWidthContext);
  if (!context) {
    throw new Error("useScreenWidth must be used within a ScreenWidthProvider");
  }
  return context.width;
};
