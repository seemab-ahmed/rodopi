'use client'
import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowRight, Play, PhoneCall } from 'lucide-react'

const HeroBanner = () => {
  const t = useTranslations('HomePage')

  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/engineer-and-operator-inspecting-wind-turbine-for-2025-03-08-23-14-14-utc.jpg"
          alt="RODOPI Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Floating play button
      <button
        aria-label="Play"
        className="hidden md:flex absolute right-[6%] top-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white text-primary items-center justify-center shadow-2xl hover:scale-105 transition-transform"
      >
        <Play className="w-7 h-7" />
      </button> */}

      {/* Decorative background title text */}
      <div className="pointer-events-none absolute -bottom-4 sm:-bottom-2 mb-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/10 font-extrabold text-lg sm:text-6xl md:text-6xl lg:text-[65px] select-none">
        <span className="inline-block animate-marquee-lr marquee-lr-inline">{t('title')}</span>
      </div>

      <style jsx global>{`
			@keyframes marquee-lr-inline {
				0% { transform: translateX(-60vw); }
				100% { transform: translateX(60vw); }
			}
			.marquee-lr-inline { animation: marquee-lr-inline 20s linear infinite; }
		`}</style>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[800px]">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
              Welcome to RODOPI
            </div>
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
              {t('subtitle')}
            </p>

            {/* CTAs - match visual style from reference */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Learn More primary */}
              <button className="bg-primary text-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </button>

              {/* Contact secondary with icon */}
              <button className="group flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition-all backdrop-blur">
                <PhoneCall className="w-5 h-5 opacity-90" />
                {t('cta_button')}
                <ArrowRight className="w-5 h-5 opacity-90 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
