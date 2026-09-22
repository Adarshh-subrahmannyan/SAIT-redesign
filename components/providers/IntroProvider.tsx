"use client";

import { createContext, useContext, useEffect, useState } from "react";
import IntroAnimation from "@/components/animations/IntroAnimation";

const SESSION_KEY = "sait-intro-seen";

const IntroContext = createContext({ introComplete: false });

export function useIntro() {
  return useContext(IntroContext);
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      setIntroComplete(true);
    }
  }, []);

  return (
    <IntroContext.Provider value={{ introComplete }}>
      <IntroAnimation onComplete={() => setIntroComplete(true)} />
      {children}
    </IntroContext.Provider>
  );
}
