"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { RodopiApproachCard } from "./cards/RodopiApproachCard";
import { TextCard } from "./cards/textcard";

export const RodopiApproachSection = ({service}) => {


  const corrosionProtection = service.CorrosionProtection;
  const rodopiApproach = service.RodopiApproach;
  const turbineServices = rodopiApproach?.turbine_services || [];
  const trainingServices = rodopiApproach?.training_services || [];
  const approachCards = rodopiApproach?.cards || [];

  return (
    <section className="bg-white py-[40px] md:py-[100px]">
      <div className="w-full max-w-[1216px] mx-auto px-4 xl:px-0 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Content - Sticky */}
        <div>
          <img
            src={corrosionProtection.image}
            alt={corrosionProtection.title_highlight}
            className="w-full h-auto mb-7 rounded-md"
          />

          <h3 className="font-semibold text-sm md:text-base mb-1">
            {corrosionProtection.point1_title}
          </h3>
          <p className="pb-4 font-semibold text-base">{corrosionProtection.subpoint1_title}</p>
          <p className="text-gray-700 mb-4 text-base">{corrosionProtection.point1_body}</p>

          {/* Checklist */}
          <p className="text-[#000] mb-4 font-semibold text-xl mt-12">
            {corrosionProtection.checklist_heading}
          </p>

          <div>
            {approachCards.map((card, index) => (
              <RodopiApproachCard
                key={index}
                title={card.title}
                items={card.items}
              />
            ))}
            <p className="text-primary mb-4 font-semibold text-xl mt-12">
              {corrosionProtection.checklist_heading3}
            </p>
          </div>
          {/* Repeat */}
          <img
            src={corrosionProtection.image2}
            alt={corrosionProtection.title_highlight}
            className="w-full h-auto mb-7 mt-4 rounded-md"
          />
          <h3 className="font-semibold text-sm md:text-base mb-1">
            {corrosionProtection.point2_title}
          </h3>
          <p className="pb-4 font-semibold text-base">{corrosionProtection.subpoint2_title}</p>
          <p className="text-gray-700 mb-4 text-base">{corrosionProtection.point2_body}</p>
          {/* Checklist */}
          <p className="text-[#000] font-semibold text-xl mt-6">
            {corrosionProtection.checklist2_heading}
          </p>
          <p className="text-[#000] mb-4 text-base  mt-2">
            {corrosionProtection["part2-text"]}
          </p>
          <div>
            {turbineServices.map((serviceText, index) => (
              <TextCard key={index} text={serviceText} />
            ))}
          </div>
          <p className="text-[#000] font-semibold text-xl mt-6">
            {corrosionProtection.checklist3_heading}
          </p>
          <p className="text-[#000] mb-4 text-base  mt-2">
            {corrosionProtection["part3-text"]}
          </p>
          <p className="text-[#000] font-semibold text-xl mt-6">
            {corrosionProtection.checklist4_heading}
          </p>
          <p className="text-[#000] mb-4 text-base  mt-2">
            {corrosionProtection["part4-text"]}
          </p>
          <div>
            {trainingServices.map((trainingText, index) => (
              <TextCard key={index} text={trainingText} />
            ))}
          </div>
          <p className="text-[#000] font-semibold text-xl mt-6">
            {corrosionProtection.checklist5_heading}
          </p>
          <p className="text-[#000] mb-4 text-base  mt-2">
            {corrosionProtection["part5-text"]}
          </p>
          <p className="text-[#000] font-semibold text-xl mt-6">
            {corrosionProtection.checklist6_heading}
          </p>
          <p className="text-[#000] mb-4 text-base  mt-2">
            {corrosionProtection["part6-text"]}
          </p>
        </div>
        
        {/* Right Content - Scrollable */}
        <div className="md:sticky md:top-[140px] self-start">
          <div className="inline-flex items-center gap-2 text-primary md:py-2 rounded-full text-lg md:text-xl font-semibold mb-2 md:mb-6">
            {corrosionProtection.subtitle}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-3 md:mb-6">
            {corrosionProtection.title_pre}{" "}
            <span className="text-primary">{corrosionProtection.title_highlight}</span>
          </h2>

          <p className="text-md sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
            {corrosionProtection.body}
          </p>

          <a
            href=""
            className="inline-block bg-primary text-white font-bold px-8 py-3 transform -skew-x-28 hover:bg-primary/70 transition"
          >
            <span className="inline-block skew-x-12">{corrosionProtection.button}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
