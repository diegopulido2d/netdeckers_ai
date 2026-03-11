"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Commander, MyCommanderContextType } from "@/types/types";

const MyCommanderContext = createContext<MyCommanderContextType | null>(null);

type Props = {
  children: ReactNode;
};

export function MyCommanderProvider({ children }: Props) {
  const [commander, setCommander] = useState<Commander | null>(null);

  return (
    <MyCommanderContext.Provider value={{ commander, setCommander }}>
      {children}
    </MyCommanderContext.Provider>
  );
}

export const useMyCommander = () => {
  const context = useContext(MyCommanderContext);

  if (!context) {
    throw new Error("useMyCommander must be used within a MyCommanderProvider");
  }

  return context;
};
