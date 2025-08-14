import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
export const RodopiApproachSection = () => {
  const t = useTranslations("CorrosionProtection");
  return (
    <section className="bg-white py-[40px] md:py-[100px]">
        <div className="w-full max-w-[1216px] mx-auto px-4 xl:px-0 grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
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

            <button className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition">
              {t("button")}
            </button>
          </div>

          {/* Right Content */}
          <div>
            <img
              src={t("image")}
              alt={t("title_highlight")}
              className="w-full h-auto mb-4 rounded-md"
            />

            <h3 className="font-bold text-lg md:text-2xl mb-2">{t("point1_title")}</h3>
            <p className="text-gray-700 mb-4 text-base">{t("point1_body")}</p>

            {/* Checklist */}
            <div>
              <p className="text-xl font-semibold">{t("checklist_heading_1")}</p>
              <div className="">
                <div className="p-3 text-sm flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t("checklist_1")}</span>
                </div>
                <div className="px-3 text-sm flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t("checklist_2")}</span>
                </div>
                <div className="p-3 text-sm flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t("checklist_3")}</span>
                </div>
                <div className="p-3 text-sm flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t("checklist_4")}</span>
                </div>
                <div className="p-3 text-sm flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t("checklist_5")}</span>
                </div>
                <div className="p-3 text-sm flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t("checklist_6")}</span>
                </div>
                <div className="p-3 text-sm flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>{t("checklist_7")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
