"use client";

import { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
