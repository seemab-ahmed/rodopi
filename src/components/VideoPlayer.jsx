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

export const VideoPlayer = ({ thumbnail, videoUrl }) => {
  const isMdOrLarger = useIsMdOrLarger();
  const [isPlaying, setIsPlaying] = React.useState(!thumbnail);

  const videoUrlWithAutoplay = videoUrl?.includes("youtube")
    ? `${videoUrl}?autoplay=1`
    : videoUrl;

  const motionPropsVideo = isMdOrLarger
    ? {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.6 },
        viewport: { once: true, amount: 0.3 },
      }
    : {};

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Section */}
        {isMdOrLarger ? (
          <motion.div {...motionPropsVideo} className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div
                className="relative cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={thumbnail || "/images/rodopi.png"}
                  alt="Video Thumbnail"
                  className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition duration-300">
                  <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition transform duration-300" />
                </div>
              </div>
            ) : (
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
          </motion.div>
        ) : (
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
            {!isPlaying ? (
              <div
                className="relative cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={thumbnail || "/images/rodopi.png"}
                  alt="Video Thumbnail"
                  className="w-full h-[300px] sm:h-[450px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition duration-300">
                  <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:scale-110 transition transform duration-300" />
                </div>
              </div>
            ) : (
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
          </div>
        )}
      </div>
    </section>
  );
};