"use client";

import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { languages } from "./utils/utilities";
import LanguageSelector from "./components/LanguageSelector";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);

  return (
    <main className="h-screen flex flex-col items-center justify-between">
      <header className="mt-6 w-[940px] fixed p-5 top-0 left-1/2 -translate-x-1/2 z-10 bg-[#191919] rounded border-[#3c3c3c] shadow-md">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />
      </header>
      <div className="code-editor-ref mt-56">
        <CodeEditor language={language} icon={activeIcon} />
      </div>
    </main>
  );
}
