"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { languages } from "../utils/utilities";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (icon: string) => void;
}

const LanguageSelector = ({
  language,
  setLanguage,
  setActiveIcon,
}: LanguageSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      setActiveIcon(newActiveIcon);
    }
  };

  return (
    <div onClick={toggleDropdown}>
      <p className="py-[5px] text-sm font-medium">Language</p>
      <div className="capitalize w-[120px] pt-1 pr-[0.3rem] pb-[0.3rem] pl-2 h-[37px] rounded-[3px] border border-[rgba(249,249,249,0.08)] text-[0.9rem] flex items-center justify-between cursor-pointer">
        {language}
        <ChevronDown />
      </div>

      {showDropdown && (
        <div className="p-[0.25rem_0_0.4rem_0.5rem] w-[120px] top-[94px] absolute bg-[#191919] border border-[#3c3c3c] rounded-[3px]">
          {languages.map((lang, i) => (
            <div key={i}>
              <button
                className="text-left"
                onClick={() => handleLanguageChange(lang.name)}
              >
                {lang.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
