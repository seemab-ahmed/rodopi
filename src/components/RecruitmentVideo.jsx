"use client";
import React from "react";

export const RecruitmentVideo = ({ data }) => {
  return (
    <section className="w-full py-10 sm:py-[100px] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {data.heading}
          </h2>
          <h3 className="text-xl font-semibold sm:text-2xl text-gray-700 mb-6">
            {data.subheading}
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Video Section */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="h-[600px]">
            <iframe
              className="w-full h-full"
              src={data.videoUrl}
              title="RODOPI Recruitment Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
      </div>
    </section>
  );
};
