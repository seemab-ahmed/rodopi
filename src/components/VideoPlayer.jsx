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

  // convert various YouTube urls (watch, youtu.be, shorts) to embed form
  const makeYoutubeEmbed = (url) => {
    try {
      const u = new URL(url);
      const host = u.hostname.toLowerCase();
      let videoId = "";

      if (host.includes("youtu.be")) {
        // short link: youtu.be/VIDEOID
        videoId = u.pathname.slice(1);
      } else if (host.includes("youtube.com")) {
        if (u.pathname.startsWith("/watch")) {
          videoId = u.searchParams.get("v");
        } else if (u.pathname.startsWith("/shorts/")) {
          videoId = u.pathname.split("/")[2];
        } else if (u.pathname.startsWith("/embed/")) {
          videoId = u.pathname.split("/")[2];
        }
      }

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (e) {
      // invalid url
    }
    return url;
  };

  const videoUrlWithAutoplay = videoUrl
    ? `${makeYoutubeEmbed(videoUrl)}${makeYoutubeEmbed(videoUrl).includes("youtube") ? "?autoplay=1" : ""}`
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
    // bg-gradient-to-b from-gray-50 to-gray-100
    <section className="w-full py-6 sm:py-8 ">
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
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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