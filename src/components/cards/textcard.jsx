
'use client'

export const TextCard = ({ text, className = "" }) => {
  return (
    <div className={`flex items-start text-base gap-2 ${className}`}>
      <span className="text-[#000] font-bold">●</span>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};
