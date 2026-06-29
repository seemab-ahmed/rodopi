"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export const ApplySection = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // ✅ md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper component to decide motion or normal div
  const MotionWrapper = ({ children, ...props }) =>
    isDesktop ? (
      <motion.div {...props}>{children}</motion.div>
    ) : (
      <div className={props.className}>{children}</div>
    );

  return (
    <section className="bg-gray-50 py-12 sm:py-[100px] w-full rounded-2xl">
      <div className="w-full max-w-[1142px] mx-auto px-12 xl:px-0 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* 👉 Left Info */}
        <MotionWrapper
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
            {data.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {data.description}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            {data.additionalInfo}
          </p>

          {/* Contact Info */}
          <div className="space-y-1 mt-6">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
               <Phone className="h-5 w-5 text-primary" />
              </div>
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <span>{data.email}</span>
            </div>
          </div>
        </MotionWrapper>

        {/* 👉 Right Form */}
        <MotionWrapper
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-6 sm:p-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
            {data.formHeading}
          </h2>
          <form className="space-y-5">
            {/* Floating Label Inputs */}
            <div className="relative">
              <input
                type="text"
                id="position"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
              <label
                htmlFor="position"
                className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary bg-white px-1"
              >
                {data.positionPlaceholder}
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary bg-white px-1"
              >
                {data.namePlaceholder}
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-primary bg-white px-1"
              >
                {data.emailPlaceholder}
              </label>
            </div>

            <div>
              <textarea
                rows="4"
                placeholder={data.newsPlaceholder}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:border-primary"
              ></textarea>
            </div>

            {/* Upload CV */}
            <div>
              <p className="text-gray-700 mb-2 font-medium">
                {data.uploadCVLabel}
              </p>
              <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg px-4 py-6 bg-gray-50 text-gray-600 cursor-pointer hover:border-primary hover:text-primary transition">
                📂 {data.uploadCVButton}
                <input type="file" className="hidden" />
              </label>
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-2 text-gray-600">
              <input
                type="checkbox"
                className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-sm">
                {data.privacyText}{" "}
                <a href="#" className="text-primary underline">
                  {data.privacyLinkText}
                </a>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-primary-dark transition shadow-md"
            >
              {data.submitButton}
            </button>
          </form>
        </MotionWrapper>
      </div>
    </section>
  );
};
