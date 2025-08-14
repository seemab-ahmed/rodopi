"use client"
import React from "react"
import Image from "next/image"
import { ArrowRight, PhoneCall } from "lucide-react"

export const HeroBannerSection =({
  backgroundImage,
  badgeText,
  title,
  subtitle,
  primaryCta,
  secondaryCta
}) =>{
    return(
         <section className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[800px]">
          <div className="max-w-3xl">
            {/* Badge */}
            {badgeText && (
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                {badgeText}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {primaryCta && (
                <button
                  className="bg-primary text-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {primaryCta.label}
                </button>
              )}

              {secondaryCta && (
                <button
                  className="group flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition-all backdrop-blur"
                >
                  {secondaryCta.icon || <PhoneCall className="w-5 h-5 opacity-90" />}
                  {secondaryCta.label}
                  <ArrowRight className="w-5 h-5 opacity-90 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}