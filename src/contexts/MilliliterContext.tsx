import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MilliliterContextData {
  milliliter: number;
  useSetCounterMilliliter: () => void;
}
interface MilliliterProviderProps {
  children: ReactNode;
  milliliter: number;
}

export const MilliliterContext = createContext({} as MilliliterContextData);

export function MilliliterProvider({
  children,
  ...rest
}: MilliliterProviderProps) {
  const [milliliter, setMilliliter] = useState(rest.milliliter ?? 0);

  function useSetCounterMilliliter() {
    setMilliliter(milliliter + 1);
  }

  return (
    <MilliliterContext.Provider value={{ milliliter, useSetCounterMilliliter }}>
      {children}
    </MilliliterContext.Provider>
  );
}

export function useCounterMilliliter() {
  const context = useContext(MilliliterContext);
  const { milliliter } = context;
  return { milliliter };
}
