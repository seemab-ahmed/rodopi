"use client";
import React from "react";
import { RodopiApproachCard } from "./cards/RodopiApproachCard";
import { TextCard } from "./cards/textcard";

export const RodopiApproachSection = ({ service }) => {
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
          {/* ✅ Image optional */}
          {corrosionProtection?.image && (
            <img
              src={corrosionProtection.image}
              alt={corrosionProtection.title_highlight}
              className="w-full h-auto mb-7 rounded-md"
            />
          )}

          <h3 className="font-semibold text-sm md:text-base mb-1">
            {corrosionProtection?.point1_title}
          </h3>
          <p className="pb-4 font-semibold text-base">{corrosionProtection?.subpoint1_title}</p>
          <p className="text-gray-700 mb-4 text-base">{corrosionProtection?.point1_body}</p>

          {/* Checklist */}
          {corrosionProtection?.checklist_heading && (
            <p className="text-[#000] mb-4 font-semibold text-xl mt-12">
              {corrosionProtection.checklist_heading}
            </p>
          )}

          {corrosionProtection?.scope_sections?.length > 0 ? (
            <div className="space-y-6 mb-6">
              {corrosionProtection.scope_sections.map((section, index) => (
                <div key={index}>
                  <p className="font-bold text-gray-900 text-base mb-2">{section.title}</p>
                  {section.subsections ? (
                    <div className="space-y-4 pl-2">
                      {section.subsections.map((sub, si) => (
                        <div key={si}>
                          <p className="font-semibold text-gray-800 text-sm mb-1">{sub.title}</p>
                          <ul className="pl-5 space-y-1 text-gray-700 text-base">
                            {sub.items.map((item, i) => (
                              <li key={i}>&#9679; {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="pl-5 space-y-1 text-gray-700 text-base">
                      {section.items.map((item, i) => (
                        <li key={i}>&#9679; {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>
              {approachCards.map((card, index) => (
                <RodopiApproachCard key={index} title={card.title} items={card.items} />
              ))}
              {corrosionProtection?.checklist_heading3 && (
                <p className="text-primary mb-4 font-semibold text-xl mt-12">
                  {corrosionProtection.checklist_heading3}
                </p>
              )}
            </div>
          )}

          {/* ✅ Second image optional */}
          {corrosionProtection?.image2 && (
            <img
              src={corrosionProtection.image2}
              alt={corrosionProtection.title_highlight}
              className="w-full h-auto mb-7 mt-4 rounded-md"
            />
          )}

          <h3 className="font-semibold text-sm md:text-base mb-1">
            {corrosionProtection?.point2_title}
          </h3>
          <p className="pb-4 font-semibold text-base">{corrosionProtection?.subpoint2_title}</p>
          <p className="text-gray-700 mb-4 text-base">{corrosionProtection?.point2_body}</p>

          {/* Checklist */}
         {corrosionProtection?.checklist2_heading && (
  <p className="text-[#000] font-semibold text-xl mt-6">
    {corrosionProtection.checklist2_heading}
  </p>
)}

         {corrosionProtection?.["part2-text"] && (
  <p className="text-[#000] mb-4 text-base mt-2">
    {corrosionProtection["part2-text"]}
  </p>
)}
                  {corrosionProtection?.checklist22_heading && (
  <p className="text-[#000] font-semibold text-xl mt-6">
    {corrosionProtection.checklist22_heading}
  </p>
)}

          {corrosionProtection?.oem_platforms?.length > 0 ? (
            <div className="space-y-6 mt-4">
              {corrosionProtection.oem_platforms.map((platform, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-base mb-1">{platform.name}</p>
                  <p className="text-gray-700 text-base mb-2">{platform.description}</p>
                  {platform.capabilities_heading && (
                    <p className="font-semibold text-gray-800 text-sm mb-1">{platform.capabilities_heading}</p>
                  )}
                  <ul className="pl-5 space-y-1 text-gray-700 text-base">
                    {platform.capabilities.map((cap, i) => (
                      <li key={i}>&#9679; {cap}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <>
              <div>
                {turbineServices.map((serviceText, index) => (
                  <TextCard key={index} text={serviceText} />
                ))}
              </div>
              {corrosionProtection?.checklist3_heading && (
                <p className="text-[#000] font-semibold text-xl mt-6">{corrosionProtection.checklist3_heading}</p>
              )}
              {corrosionProtection?.["part3-text"] && (
                <p className="text-[#000] mb-4 text-base mt-2">{corrosionProtection["part3-text"]}</p>
              )}
              {corrosionProtection?.checklist4_heading && (
                <p className="text-[#000] font-semibold text-xl mt-6">{corrosionProtection.checklist4_heading}</p>
              )}
              {corrosionProtection?.["part4-text"] && (
                <p className="text-[#000] mb-4 text-base mt-2">{corrosionProtection["part4-text"]}</p>
              )}
              <div>
                {trainingServices.map((trainingText, index) => (
                  <TextCard key={index} text={trainingText} />
                ))}
              </div>
              {corrosionProtection?.checklist5_heading && (
                <p className="text-[#000] font-semibold text-xl mt-6">{corrosionProtection.checklist5_heading}</p>
              )}
              {corrosionProtection?.["part5-text"] && (
                <p className="text-[#000] mb-4 text-base mt-2">{corrosionProtection["part5-text"]}</p>
              )}
              {corrosionProtection?.checklist6_heading && (
                <p className="text-[#000] font-semibold text-xl mt-6">{corrosionProtection.checklist6_heading}</p>
              )}
              {corrosionProtection?.["part6-text"] && (
                <p className="text-[#000] mb-4 text-base mt-2">{corrosionProtection["part6-text"]}</p>
              )}
            </>
          )}

          {corrosionProtection?.additional_services_heading && (
            <p className="text-[#000] font-bold text-xl mt-8 mb-4">
              {corrosionProtection.additional_services_heading}
            </p>
          )}
          {corrosionProtection?.additional_services?.length > 0 && (
            <div className="space-y-6">
              {corrosionProtection.additional_services.map((service, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-base mb-2">{service.title}</p>
                  <p className="text-gray-700 text-base mb-2">{service.body}</p>
                  {service.items && (
                    <ul className="pl-5 space-y-1 text-gray-700 text-base">
                      {service.items.map((item, i) => (
                        <li key={i}>&#9679; {item}</li>
                      ))}
                    </ul>
                  )}
                  {service.capabilities_heading && (
                    <p className="font-semibold text-gray-800 text-sm mt-3 mb-1">{service.capabilities_heading}</p>
                  )}
                  {service.capabilities && (
                    <ul className="pl-5 space-y-1 text-gray-700 text-base">
                      {service.capabilities.map((cap, i) => (
                        <li key={i}>&#9679; {cap}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Content - Scrollable */}
        <div className="md:sticky md:top-[140px] self-start">
          <div className="inline-flex items-center gap-2 text-primary md:py-2 rounded-full text-lg md:text-xl font-semibold mb-2 md:mb-6">
            {corrosionProtection?.subtitle}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-3 md:mb-6">
            {corrosionProtection?.title_pre}{" "}
            <span className="text-primary">{corrosionProtection?.title_highlight}</span>
          </h2>

          <p className="text-md sm:text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
            {corrosionProtection?.body}
          </p>

          <a
            href="/contact"
            className="inline-block bg-primary text-white font-bold px-8 py-3 transform -skew-x-28 hover:bg-primary/70 transition"
          >
            <span className="inline-block skew-x-12">{corrosionProtection?.button}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
