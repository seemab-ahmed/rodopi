"use client";
import React from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

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
  const Wrapper = isMdOrLarger ? motion.div : "div";

  // 👉 Track if video should play
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Get YouTube embed URL with autoplay when clicked
  const videoUrlWithAutoplay = data.videoUrl.includes("youtube")
    ? `${data.videoUrl}?autoplay=1`
    : data.videoUrl;

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Wrapper
          initial={isMdOrLarger ? { opacity: 0, y: 40 } : {}}
          whileInView={isMdOrLarger ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
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
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Show thumbnail + play button if not playing */}
          {!isPlaying ? (
            <div
              className="relative cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail (you can also pass from props) */}
              <img
                src={data.thumbnail || "/images/rodopi.png"}
                alt="Video Thumbnail"
                className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition duration-300">
                <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition transform duration-300" />
              </div>
            </div>
          ) : (
            // 👉 Once clicked, load video iframe with autoplay
            <div className="h-[300px] sm:h-[450px] md:h-[600px]">
              <iframe
                className="w-full h-full"
                src={videoUrlWithAutoplay}
                title="Recruitment Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </Wrapper>
      </div>
    </section>
  );
};
