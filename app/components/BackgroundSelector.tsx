"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { backgrounds } from "../utils/utilities";
import OutsideClickHandler from "react-outside-click-handler";

interface BackgroundSelectorProps {
  background: string;
  setBackground: (background: string) => void;
}

const BackgroundSelector = ({
  background,
  setBackground,
}: BackgroundSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="bg-selector relative" onClick={toggleDropdown}>
        <p className="py-[5px] text-sm font-medium">Background Selector</p>
        <div className="capitalize w-[62px] pt-1 pr-[0.3rem] pb-[0.3rem] pl-2 h-[37px] rounded-[3px] border border-[rgba(249,249,249,0.08)] text-[0.9rem] flex items-center justify-between cursor-pointer">
          <div
            className="rounded-full w-5 h-5"
            style={{ background: background }}
          ></div>
          <ChevronDown />
        </div>

        {showDropdown && (
          <div className="p-[0.25rem_0_0.4rem_0.5rem] w-[62px] top-[74px] flex flex-col rounded-[3px] absolute bg-[#191919] border border-[#3c3c3c]">
            {backgrounds.map((bg, i) => (
              <div
                key={i}
                onClick={() => handleBackgroundChange(bg)}
                className="rounded-full h-5 w-5 mb-1"
                style={{ background: bg }}
              ></div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default BackgroundSelector;
