"use client";
import React from "react";
export const JobsSection = ({ data }) => {
  return (
    <section className="bg-gray-50 pt-4 pb-10 sm:pt-[50px] sm:pb-[100px] w-full">
      <div className="w-full max-w-[1216px] mx-auto px-4 xl:px-0">
        <div className="">
          <h2 className="text-2xl text-primary sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-2 md:mb-6">
            {data.mainheading}{" "}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed w-full">
            {data.textPara1}
          </p>
          <p className="pt-4 text-base sm:text-lg text-gray-600 leading-relaxed ">
            {data.textPara2}
          </p>
          <p className="pt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            {data.textPara3}
          </p>
          <h5 className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
            {data.subheading}
          </h5>
          <p className="pt-4 text-base sm:text-lg text-gray-600 leading-relaxed ">
            {data.textPara4}
          </p>
          <h5 className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
            {data.subheading1}
          </h5>
          {data.responsibilities && (
            <ul className="list-disc pl-5 pt-4 text-base sm:text-lg text-gray-600 leading-relaxed  space-y-2">
              {data.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <h5 className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
            {data.subheading2}
          </h5>
          {data.requirements && (
            <ul className="list-disc pl-5 pt-4 text-base sm:text-lg text-gray-600 leading-relaxed  space-y-2">
              {data.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <h5 className="text-base font-semibold sm:text-xl text-gray-600 leading-relaxed pt-7">
            {data.subheading3}
          </h5>
          {data.perks && (
            <ul className="list-disc pl-5 pt-4 text-base sm:text-lg text-gray-600 leading-relaxed space-y-2">
              {data.perks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
      {/* ✅ Location */}
<div className="flex items-center gap-2 text-gray-600 text-base sm:text-lg pt-6">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
    />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
  <span>
    <span className="font-semibold">Location:</span> {data.location || 'Europe'}
  </span>
</div>

{/* ✅ Language */}
<div className="flex items-center gap-2 text-gray-600 text-base sm:text-lg pt-3">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 0 5 4 5 10s-2.5 10-5 10-5-4-5-10 2.5-10 5-10zm-5 10h10"
    />
  </svg>
  <span>
    <span className="font-semibold">Language:</span> {data.language || 'English'}
  </span>
</div>

        </div>
      </div>
    </section>
  );
};
