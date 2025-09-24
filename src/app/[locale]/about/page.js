'use client'
import en from '@/../messages/en.json';
import de from '@/../messages/de.json';
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState, useRef } from 'react'
import {
    Wind,
    Sun,
    Factory,
    Building2,
    GraduationCap,
    Settings,
    ArrowRight,
    ArrowLeft,
    Target,
    Eye,
    Heart,
    Lightbulb,
    ShieldCheck,
    Globe,
    Users,
    Award,
    Star,
    CheckCircle,
    PhoneCall,
    Play,
    X,
    Download
} from 'lucide-react'
import { ContactTeam } from '@/components/ContactTeam'

const AboutPage = ({ params }) => {
    const t = useTranslations('AboutPage')
    const homeT = useTranslations('HomePage')
    const generalT = useTranslations('GeneralExplanation')
    const infoT = useTranslations('InfoCompany')
    const missionT = useTranslations('MissionVision')
    const industriesT = useTranslations('IndustriesSection')
     const { locale } = params;
    const messages = locale === 'de' ? de : en;
    const rodopiTeam = messages?.AboutPage?.ContactTeam;

    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [counts, setCounts] = useState([500, 35, 4])
    const [isVisible, setIsVisible] = useState(true)

    // Certificates carousel
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

    // Industries data matching your specification
    const industries = [
        {
            id: 'wind_energy',
            icon: <Wind className="w-8 h-8 text-primary" />,
            color: 'from-blue-50 to-blue-100',
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            image: '/images/a-woman-worker-in-a-wind-farm-green-energy-techn-2024-12-10-00-41-36-utc (1).jpg'
        },
        {
            id: 'solar_energy',
            icon: <Sun className="w-8 h-8 text-primary" />,
            color: 'from-green-50 to-green-100',
            iconBg: 'bg-green-100',
            iconColor: 'text-blue-600',
            image: '/images/solar-energy.jpg'
        },
        {
            id: 'factory_support',
            icon: <Factory className="w-8 h-8 text-primary" />,
            color: 'from-blue-50 to-blue-100',
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            image: '/images/factory-support.jpg'
        },
        {
            id: 'infrastructure_services',
            icon: <Building2 className="w-8 h-8 text-primary" />,
            color: 'from-green-50 to-green-100',
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            image: '/images/infrastructure-services.JPG'
        },
        {
            id: 'rodopi_academy',
            icon: <GraduationCap className="w-8 h-8 text-primary" />,
            color: 'from-blue-50 to-blue-100',
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            image: '/images/rodopi-academy-services.jpg'
        },
        {
            id: 'specialized_services',
            icon: <Settings className="w-8 h-8 text-primary" />,
            color: 'from-green-50 to-green-100',
            iconBg: 'bg-green-100',
            iconColor: 'text-green-600',
            image: '/images/other-services.jpg'
        }
    ]

    const values = [
        { icon: <Lightbulb className="w-6 h-6 text-primary" />, label: 'Innovation', description: 'Pioneering new solutions' },
        { icon: <ShieldCheck className="w-6 h-6 text-primary" />, label: 'Safety', description: 'Your security first' },
        { icon: <Globe className="w-6 h-6 text-primary" />, label: 'Sustainability', description: 'Green energy future' },
        { icon: <Users className="w-6 h-6 text-primary" />, label: 'Customer Focus', description: 'Your success matters' },
        { icon: <Award className="w-6 h-6 text-primary" />, label: 'Integrity', description: 'Trust and reliability' }
    ]

    return (
        <div className="min-h-screen">
            {/* Hero Banner Section */}
            <section className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[800px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/engineer-and-operator-inspecting-wind-turbine-for-2025-03-08-23-14-14-utc.jpg"
                        alt="RODOPI About Hero"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Decorative background title text */}
                <div className="pointer-events-none absolute -bottom-4 sm:-bottom-2 mb-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-white/10 font-extrabold text-lg sm:text-6xl md:text-6xl lg:text-[65px] select-none">
                    <span className="inline-block animate-marquee-lr marquee-lr-inline">{t('hero_title')}</span>
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
                        <div className="max-w-5xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                {t('hero_badge')}
                            </div>
                            {/* Main Title */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
                                RODOPI<br/>{t('hero_title')}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                                {t('hero_subtitle')}
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <button className="bg-primary text-white px-7 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    {t('hero_cta_primary')}
                                </button>
                                <button className="group flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg bg-white/10 text-white border border-white/30 hover:bg-white/15 transition-all backdrop-blur">
                                    <PhoneCall className="w-5 h-5 opacity-90" />
                                    {t('hero_cta_secondary')}
                                    <ArrowRight className="w-5 h-5 opacity-90 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Short Description Section */}
            <section className="bg-gray-50 py-8 sm:py-12">
                <div className="mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            {t('description_badge')}
                        </div>

                        <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                            {t('description_title_pre')}{' '}<span className="text-primary">{t('description_title_highlight')}</span>
                        </h2>

                        <p className="text-md sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                            {t('description_body')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Animated Numbers and Map Section */}
            <section className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Animated Stats */}
                    <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5"></div>
                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('stats_title')}</h2>
                                <p className="text-xl text-white/90">{t('stats_subtitle')}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="text-center group">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 transition-all duration-300 group-hover:scale-110">
                                        500+
                                    </div>
                                    <div className="text-lg text-white/90 font-medium capitalize">
                                        {t('stats_projects')}
                                    </div>
                                </div>
                                <div className="text-center group">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 transition-all duration-300 group-hover:scale-110">
                                        5+
                                    </div>
                                    <div className="text-lg text-white/90 font-medium capitalize">
                                        {t('stats_countries')}
                                    </div>
                                </div>
                                <div className="text-center group">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 transition-all duration-300 group-hover:scale-110">
                                        4+
                                    </div>
                                    <div className="text-lg text-white/90 font-medium capitalize">
                                        {t('stats_offshore')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="relative w-full bg-gray-50 rounded-3xl overflow-hidden">
                        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                            <Image
                                src="/images/rodopi_illustration_map.jpg"
                                alt="RODOPI Services Map"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{t('map_title')}</h3>
                                <p className="text-lg text-white/90">{t('map_subtitle')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section from Mission & Vision Component */}
          

            {/* Certificates Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Award className="w-4 h-4" />
                            {t('certificates_badge')}
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            {t('certificates_title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('certificates_subtitle')}
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

            <ContactTeam data={rodopiTeam} />

            {/* Industries Section */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Star className="w-4 h-4" />
                            {t('industries_badge')}
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                            {t('industries_title')}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {t('industries_subtitle')}
                        </p>
                    </div>

                    {/* Industries Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {industries.map((industry, idx) => (
                            <div key={industry.id}>
                                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={industry.image}
                                            alt={t(`industries.${industry.id}.title`)}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                                        {/* Icon */}
                                        <div className="absolute top-4 left-4">
                                            <div className={`w-12 h-12 ${industry.iconBg} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                                                {industry.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 flex flex-col flex-1">
                                        {/* Title */}
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                                {t(`industries.${industry.id}.title`)}
                                            </h3>
                                            <div className="w-12 h-1 bg-primary rounded-full"></div>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                                            {t(`industries.${industry.id}.description`)}
                                        </p>

                                        {/* Services List */}
                                        <div className="space-y-2 mb-4">
                                            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Services</h4>
                                            <div className="space-y-1">
                                                {t(`industries.${industry.id}.services`).split(', ').map((service, serviceIdx) => (
                                                    <div key={serviceIdx} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                                                        <span className="text-xs text-gray-600">{service}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Learn More Link */}
                                        <div className="flex items-center justify-end mt-auto">
                                            <button className="flex items-center gap-2 text-primary font-medium text-sm">
                                                Learn more
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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

export default AboutPage
