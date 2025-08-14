'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const RodopiApproachCard =({title, items})=> {
    const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-gray-900">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Body */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pl-5 pb-4 space-y-2 text-gray-700 text-base">
          {items.map((item, index) => (
            <li key={index}>● {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

