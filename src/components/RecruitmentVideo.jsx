"use client";
import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Hook to detect md and above
const useIsMdOrLarger = () => {
  const [isMd, setIsMd] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsMd(window.innerWidth >= 768); // md breakpoint
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMd;
};

export const RecruitmentVideo = ({ data }) => {
  const isMdOrLarger = useIsMdOrLarger();

  const Wrapper = isMdOrLarger ? motion.div : "div";

  return (
    <section className="w-full py-14 sm:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <Wrapper
          initial={isMdOrLarger ? { opacity: 0, y: 40 } : {}}
          whileInView={isMdOrLarger ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            {data.heading}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
            {data.subheading}
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </Wrapper>

        {/* Video Section */}
        <Wrapper
          initial={isMdOrLarger ? { opacity: 0, scale: 0.9 } : {}}
          whileInView={isMdOrLarger ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={isMdOrLarger ? { scale: 1.02 } : {}}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl group"
        >
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition duration-300">
            <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition duration-300" />
          </div>

          <div className="h-[300px] sm:h-[450px] md:h-[600px]">
            <iframe
              className="w-full h-full"
              src={data.videoUrl}
              title="Recruitment Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Wrapper>

      </div>
    </section>
  );
};
