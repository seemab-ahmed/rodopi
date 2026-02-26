'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { ArrowRight, ArrowLeft, Award, X, CheckCircle, TrendingUp } from 'lucide-react'
import InfoCompany from '@/components/InfoCompany'
import { HeroBannerSection } from '@/components/BannerSection'
import { VideoPlayer } from '@/components/VideoPlayer'

const HistoryPage = () => {
    const t = useTranslations('HistoryPage')
    const aboutT = useTranslations('AboutPage')
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const certificatesScrollRef = useRef(null)

    const handleCertificatesPrev = () => {
        const container = certificatesScrollRef.current
        if (!container) return
        const scrollAmount = container.clientWidth
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }

    const handleCertificatesNext = () => {
        const container = certificatesScrollRef.current
        if (!container) return
        const scrollAmount = container.clientWidth
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    // Certificate data
    const certificates = [
        {
            id: 1,
            title: 'ISO 9001 Quality Management',
            image: '/images/9001-Blades.jpg',
            description: 'Quality management certification for blade services'
        },
        {
            id: 2,
            title: 'ISO 9001 Marine Services',
            image: '/images/9001-Marine.jpg',
            description: 'Quality management certification for marine operations'
        },
        {
            id: 3,
            title: 'ISO 9001 Wind Services',
            image: '/images/9001-Wind-Service.jpg',
            description: 'Quality management certification for wind services'
        },
        {
            id: 4,
            title: 'ISO 9001 Wind Services',
            image: '/images/SCC-Blades.jpg',
            description: 'Quality management certification for scc blades services'
        },
        {
            id: 5,
            title: 'ISO 9001 Wind Services',
            image: '/images/SCC-Marine.jpg',
            description: 'Quality management certification for scc marine services'
        },
        {
            id: 6,
            title: 'ISO 9001 Wind Services',
            image: '/images/SCC-Wind-Service.jpg',
            description: 'Quality management certification for scc wind services'
        },
        {
            id: 7,
            title: 'ISO 9001 Wind Services',
            image: '/images/SCP-Personal.jpg',
            description: 'Quality management certification for scc personal services'
        },
        {
            id: 8,
            title: 'ISO 9001 Wind Services',
            image: '/images/WHG-Rodopi-Marine-GmbH-scaled.jpg',
            description: 'Quality management certification for whg rodopi marine services'
        },
        {
            id: 9,
            title: 'ISO 9001 Wind Services',
            image: '/images/WHG-Rodopi-Wind-Service.jpg',
            description: 'Quality management certification for whg rodopi wind services'
        }
    ]

    return (
        <div>
            {/* Hero Banner */}
            <HeroBannerSection
                backgroundImage="/images/History_2.png"
                badgeText={t('badge')}
                title={t('title')}
                subtitle={t('subtitle')}
                secondaryCta={{ label: t('cta_button') }}
            />
{/* Info Company Section */}
            <InfoCompany />
            {/* New Content Section */}
            <VideoPlayer thumbnail="" videoUrl="https://youtu.be/PZAb9laaVgU" />
            <section className="w-full py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            {t('content.main_title')}
                        </h2>
                        
                        <p className="text-xl text-primary font-semibold mb-8 leading-relaxed">
                            {t('content.intro')}
                        </p>

                        {/* Milestones */}
                        <div className="mb-12">
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {t('content.development_intro')}
                            </p>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <div key={num} className="flex items-start gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {t(`content.milestone${num}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            {t('content.paragraph1')}
                        </p>

                        {/* Core Segments */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-10 mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {t('content.segments_title')}
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((num) => (
                                    <div key={num} className="flex items-center gap-3 bg-white rounded-xl p-4">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                        <p className="font-semibold text-gray-900">
                                            {t(`content.segment${num}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2025 Achievements */}
                        <div className="bg-gray-900 rounded-3xl p-8 sm:p-10 mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="w-8 h-8 text-primary" />
                                <h3 className="text-2xl font-bold text-white">
                                    {t('content.achievement_title')}
                                </h3>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((num) => (
                                    <div key={num} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                        <p className="text-lg text-white/90">
                                            {t(`content.achievement${num}`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.growth')}
                            </p>
                            <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                                {t('content.closing')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Certificates Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Award className="w-4 h-4" />
                            {aboutT('certificates_badge')}
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            {aboutT('certificates_title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {aboutT('certificates_subtitle')}
                        </p>
                    </div>

                    {/* Certificates Carousel - responsive */}
                    {/* Mobile: single-card horizontal scroll */}
                    <div className="md:hidden">
                        <div
                            className="overflow-x-auto scroll-smooth"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            <div className="flex gap-6">
                                {certificates.map((certificate) => (
                                    <div
                                        key={certificate.id}
                                        className="shrink-0 w-80"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <div
                                            className="group cursor-pointer"
                                            onClick={() => setSelectedCertificate(certificate)}
                                        >
                                            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 h-full">
                                                <div className="relative h-56 mb-6 rounded-2xl overflow-hidden bg-gray-50">
                                                    <Image
                                                        src={certificate.image}
                                                        alt={certificate.title}
                                                        fill
                                                        loading="lazy"
                                                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <ArrowRight className="w-5 h-5 text-primary" />
                                                    </div>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    {certificate.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {certificate.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop/Tablet: grouped by 3 with controls */}
                    <div className="relative hidden md:block">
                        {/* Controls */}
                        <button
                            type="button"
                            aria-label="Previous certificates"
                            onClick={handleCertificatesPrev}
                            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 hidden md:flex items-center justify-center hover:bg-gray-50"
                        >
                            <ArrowLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next certificates"
                            onClick={handleCertificatesNext}
                            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 hidden md:flex items-center justify-center hover:bg-gray-50"
                        >
                            <ArrowRight className="w-5 h-5 text-gray-700" />
                        </button>

                        <div
                            ref={certificatesScrollRef}
                            className="overflow-x-auto scroll-smooth"
                            style={{ scrollSnapType: 'x mandatory' }}
                        >
                            <div className="flex gap-8 lg:gap-10">
                                {Array.from({ length: Math.ceil(certificates.length / 3) }, (_, groupIdx) => (
                                    <div
                                        key={groupIdx}
                                        className="shrink-0 w-full"
                                        style={{ scrollSnapAlign: 'start' }}
                                    >
                                        <div className="grid grid-cols-3 gap-8 lg:gap-10">
                                            {certificates
                                                .slice(groupIdx * 3, groupIdx * 3 + 3)
                                                .map((certificate) => (
                                                    <div
                                                        key={certificate.id}
                                                        className="group cursor-pointer"
                                                        onClick={() => setSelectedCertificate(certificate)}
                                                    >
                                                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 h-full">
                                                            <div className="relative h-64 mb-6 rounded-2xl overflow-hidden bg-gray-50">
                                                                <Image
                                                                    src={certificate.image}
                                                                    alt={certificate.title}
                                                                    fill
                                                                    loading="lazy"
                                                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                                                />
                                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                                                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                    <ArrowRight className="w-5 h-5 text-primary" />
                                                                </div>
                                                            </div>
                                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                                {certificate.title}
                                                            </h3>
                                                            <p className="text-gray-600 leading-relaxed">
                                                                {certificate.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden">
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="relative h-[60vh] bg-gray-50">
                            <Image
                                src={selectedCertificate.image}
                                alt={selectedCertificate.title}
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        <div className="p-6 border-t border-gray-200">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {selectedCertificate.title}
                            </h3>
                            <p className="text-gray-600">
                                {selectedCertificate.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HistoryPage
