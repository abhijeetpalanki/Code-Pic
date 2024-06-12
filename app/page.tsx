"use client";

import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import { backgrounds, languages, themes } from "./utils/utilities";
import LanguageSelector from "./components/LanguageSelector";
import ThemeSelector from "./components/ThemeSelector";
import BackgroundSelector from "./components/BackgroundSelector";
import PaddingSelector from "./components/PaddingSelector";
import { Download } from "lucide-react";
import Footer from "./components/Footer";

export default function Home() {
  const [language, setLanguage] = useState(languages[0].name);
  const [theme, setTheme] = useState(themes[0]);
  const [background, setBackground] = useState(backgrounds[0]);
  const [activeIcon, setActiveIcon] = useState(languages[0].icon);
  const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
  const [currentPadding, setCurrentPadding] = useState(paddings[2]);

  return (
    <main className="h-screen flex flex-col items-center justify-between">
      <header className="mt-6 w-[940px] fixed flex gap-6 p-5 top-0 left-1/2 -translate-x-1/2 z-10 bg-[#191919] rounded border-[#3c3c3c] shadow-md">
        <LanguageSelector
          language={language}
          setLanguage={setLanguage}
          setActiveIcon={setActiveIcon}
        />

        <ThemeSelector theme={theme} setTheme={setTheme} />
        <BackgroundSelector
          background={background}
          setBackground={setBackground}
        />
        <PaddingSelector
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />

        <div className="export-btn self-center ml-auto">
          <button className="flex items-center gap-3 py-2 px-3 rounded-md text-sm bg-blue-400 text-blue-400 font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all duration-300">
            <Download />
            Export PNG
          </button>
        </div>
      </header>
      <div className="code-editor-ref mt-56">
        <CodeEditor
          language={language}
          icon={activeIcon}
          theme={theme}
          background={background}
          currentPadding={currentPadding}
        />
      </div>

      <Footer />
    </main>
  );
}
