"use client";
import React from "react";

export const YourBenefitsRodopi = ({ data }) => {
  return (
    <section className="w-full py-10 sm:py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {/* Heart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M462.3 62.6C407 7.6 324.8-10.6 256 38.6 187.2-10.6 105-7.6 49.7 62.6-16.6 150.2 27.5 278.6 256 472c228.5-193.4 272.6-321.8 206.3-409.4z" />
            </svg>
            {data.section_label}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {data.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                {/* Eye Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M572.52 241.4C518.87 135.46 407.82 64 288 64S57.13 135.46 3.48 241.4a48 48 0 0 0 0 29.2C57.13 376.54 168.18 448 288 448s230.87-71.46 284.52-177.4a48 48 0 0 0 0-29.2zM288 400a144 144 0 1 1 144-144 144.16 144.16 0 0 1-144 144z" />
                </svg>
                {data.vision_label}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {data.vision_title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {data.vision_description}
              </p>

              {/* Additional Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {/* Globe Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 496 512"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm93.5 80a190.7 190.7 0 0 1 44.9 80H311c-6.3-35.3-17.4-66.3-30.5-91.6a190.6 190.6 0 0 1 60.9 11.6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {data.extra_title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {data.extra_description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
                <div className="space-y-6">
                  {data.cards?.map((card, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                          >
                            <path d={card.iconPath} />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
