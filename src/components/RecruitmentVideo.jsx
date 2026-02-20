"use client";
import React from "react";
import { motion } from "framer-motion";
import { VideoPlayer } from "@/components/VideoPlayer";

const useIsMdOrLarger = () => {
  const [isMd, setIsMd] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMd(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMd;
};

export const RecruitmentVideo = ({ data }) => {
  const isMdOrLarger = useIsMdOrLarger();

  // Helper for conditional motion props
  const motionPropsHeader = isMdOrLarger
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {isMdOrLarger ? (
          <motion.div {...motionPropsHeader} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {data.heading}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              {data.subheading}
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              {data.heading}
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              {data.subheading}
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {data.description}
            </p>
          </div>
        )}

        {/* Video Section */}
        <VideoPlayer thumbnail={data.thumbnail} videoUrl={data.videoUrl} />
      </div>
    </section>
  );
};
