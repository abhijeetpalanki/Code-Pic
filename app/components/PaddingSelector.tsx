"use client";

import { useState } from "react";

interface PaddingSelectorProps {
  paddings: string[];
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

const PaddingSelector = ({
  paddings,
  currentPadding,
  setCurrentPadding,
}: PaddingSelectorProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePaddingChange = (newPadding: string) => {
    setCurrentPadding(newPadding);
  };

  return (
    <div>
      <p className="py-[5px] text-sm font-medium">Padding Selector</p>
      <div className="flex gap-6">
        {paddings.map((padding, i) => (
          <button
            key={i}
            className={`h-[37px] flex items-center justify-center text-sm px-2 hover:text-white ease-linear transition-all duration-300 cursor-pointer ${
              currentPadding === padding && "bg-[#3c3c3c] text-white rounded-md"
            }`}
            onClick={() => handlePaddingChange(padding)}
          >
            {padding}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaddingSelector;
