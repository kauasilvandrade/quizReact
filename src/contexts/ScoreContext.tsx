import { createContext, useState, type ReactNode } from "react";

type ScoreContextType = {
  score: number;
  addPoint: () => void;
};

export const ScoreContext = createContext({} as ScoreContextType);

type Props = {
  children: ReactNode;
};

export function ScoreProvider({ children }: Props) {
  const [score, setScore] = useState(0);

  function addPoint() {
    setScore((prev) => prev + 1);
  }

  return (
    <ScoreContext.Provider value={{ score, addPoint }}>
      {children}
    </ScoreContext.Provider>
  );
}
