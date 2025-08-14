"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { RodopiApproachCard } from "./cards/RodopiApproachCard";
import { TextCard } from "./cards/textcard";

export const RodopiApproachSection = () => {
  const t = useTranslations("CorrosionProtection");
  const d = useTranslations("RodopiApproach");
  const f = useTranslations("RodopiApproach");
  const train = useTranslations("RodopiApproach");
  const cards = d.raw("cards");
  const e = f.raw("turbine_services");
  const training = train.raw("training_services");

  return (
    <section className="bg-white py-[40px] md:py-[100px]">
      <div className="w-full max-w-[1216px] mx-auto px-4 xl:px-0 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Content - Sticky */}
        <div className="md:sticky md:top-[140px] self-start">
          <div className="inline-flex items-center gap-2 text-primary md:py-2 rounded-full text-lg md:text-xl font-semibold mb-2 md:mb-6">
            {t("subtitle")}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-3 md:mb-6">
            {t("title_pre")}{" "}
            <span className="text-primary">{t("title_highlight")}</span>
          </h2>

          <p className="text-md sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
            {t("body")}
          </p>

          <a
            href=""
            className="inline-block bg-primary text-white font-bold px-8 py-3 transform -skew-x-28 hover:bg-primary/70 transition"
          >
            <span className="inline-block skew-x-12">{t("button")}</span>
          </a>
        </div>

        {/* Right Content - Scrollable */}
        <div>
          <img
            src={t("image")}
            alt={t("title_highlight")}
            className="w-full h-auto mb-7 rounded-md"
          />

          <h3 className="font-semibold text-sm md:text-base mb-1">
            {t("point1_title")}
          </h3>
          <p className="pb-4 font-semibold text-base">{t("subpoint1_title")}</p>
          <p className="text-gray-700 mb-4 text-base">{t("point1_body")}</p>

          {/* Checklist */}
          <p className="text-[#000] mb-4 font-semibold text-xl mt-12">
            {t("checklist_heading")}
          </p>

          <div>
            {cards.map((card, index) => (
              <RodopiApproachCard
                key={index}
                title={card.title}
                items={card.items}
              />
            ))}
          <p className="text-primary mb-4 font-semibold text-xl mt-12">
            {t("checklist_heading3")}
          </p>
        </div>
        {/* Repeate */}
          <img
            src={t("image2")}
            alt={t("title_highlight")}
            className="w-full h-auto mb-7 mt-4 rounded-md"
          />
          <h3 className="font-semibold text-sm md:text-base mb-1">
            {t("point2_title")}
          </h3>
           <p className="pb-4 font-semibold text-base">{t("subpoint2_title")}</p>
          <p className="text-gray-700 mb-4 text-base">{t("point2_body")}</p>
           {/* Checklist */}
          <p className="text-[#000] font-semibold text-xl mt-6">
            {t("checklist2_heading")}
          </p>
          <p className="text-[#000] mb-4 text-base  mt-2">
            {t("part2-text")}
          </p>
         <div>
      {e.map((e, index) => (
        <TextCard key={index} text={e} />
      ))}
    </div>
    <p className="text-[#000] font-semibold text-xl mt-6">
            {t("checklist3_heading")}
          </p>
           <p className="text-[#000] mb-4 text-base  mt-2">
            {t("part3-text")}
          </p>
    <p className="text-[#000] font-semibold text-xl mt-6">
            {t("checklist4_heading")}
          </p>
           <p className="text-[#000] mb-4 text-base  mt-2">
            {t("part4-text")}
          </p>
            <div>
      {training.map((training, index) => (
        <TextCard key={index} text={training} />
      ))}
    </div>
     <p className="text-[#000] font-semibold text-xl mt-6">
            {t("checklist5_heading")}
          </p>
           <p className="text-[#000] mb-4 text-base  mt-2">
            {t("part5-text")}
          </p>
     <p className="text-[#000] font-semibold text-xl mt-6">
            {t("checklist6_heading")}
          </p>
           <p className="text-[#000] mb-4 text-base  mt-2">
            {t("part6-text")}
          </p>
      </div>
      </div>
    </section>
  );
};
