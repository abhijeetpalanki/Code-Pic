"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { themes } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface ThemeSelectorProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeSelector = ({ theme, setTheme }: ThemeSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="theme-selector" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Code Colors</p>
        <div className="capitalize w-[120px] pt-1 pr-[0.3rem] pb-[0.3rem] pl-2 h-[37px] rounded-[3px] border border-[rgba(249,249,249,0.08)] text-[0.9rem] flex items-center justify-between cursor-pointer">
          {theme}
          <ChevronDown />
        </div>

        {showDropdown && (
          <div className="p-[0.25rem_0_0.4rem_0.5rem] w-[120px] top-[94px] absolute bg-[#191919] border border-[#3c3c3c] rounded-[3px]">
            {themes.map((th, i) => (
              <div key={i}>
                <button
                  className="capitalize text-left"
                  onClick={() => handleThemeChange(th)}
                >
                  {th}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default ThemeSelector;
