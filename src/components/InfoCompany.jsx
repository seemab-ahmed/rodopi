'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Users, Lightbulb, ShieldCheck, Target, Globe, BarChart, TrendingUp, Award, Star, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const values = [
    { icon: <Lightbulb className="w-6 h-6 text-primary" />, label: 'Innovation', description: 'Pioneering new solutions' },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, label: 'Safety', description: 'Your security first' },
    { icon: <Globe className="w-6 h-6 text-primary" />, label: 'Sustainability', description: 'Green energy future' },
    { icon: <Target className="w-6 h-6 text-primary" />, label: 'Customer Focus', description: 'Your success matters' },
    { icon: <BarChart className="w-6 h-6 text-primary" />, label: 'Integrity', description: 'Trust and reliability' },
]

const leadership = [
    {
        name: 'Ercan Kara Osman',
        position: 'Managing Director',
        image: '/images/ercan_kara_osman.jpg',
        description: 'Leading strategic vision and growth across Europe',
        // experience: '15+ years',
        expertise: 'Strategic Planning, Business Development'
    },
    {
        name: 'Achmet Gkaroglou',
        position: 'Managing Director',
        image: '/images/achmet_gokaroglou.jpg',
        description: 'Driving operational excellence and innovation',

        expertise: 'Operations, Technology'
    }
]

const stats = [
    { target: 1000, label: 'projects', suffix: '+' },
    { target: 15, label: 'countries', suffix: '+' },
    { target: 500, label: 'offshore', suffix: '+' }
]

const InfoCompany = () => {
    const t = useTranslations('InfoCompany')
    const [counts, setCounts] = useState([0, 0, 0])
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        const statsSection = document.getElementById('stats-section')
        if (statsSection) {
            observer.observe(statsSection)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (isVisible) {
            const duration = 2000 // 2 seconds
            const steps = 60
            const stepDuration = duration / steps

            const intervals = stats.map((stat, index) => {
                return setInterval(() => {
                    setCounts(prev => {
                        const newCounts = [...prev]
                        const current = newCounts[index]
                        const increment = Math.ceil(stat.target / steps)

                        if (current < stat.target) {
                            newCounts[index] = Math.min(current + increment, stat.target)
                        }
                        return newCounts
                    })
                }, stepDuration)
            })

            return () => intervals.forEach(interval => clearInterval(interval))
        }
    }, [isVisible])

    return (
        <section className=" w-full my-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Star className="w-4 h-4" />
                        About RODOPI
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* History Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                {t('history_title')}
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                {t('history_text')}
                            </p>
                        </div>

                        {/* Key Milestones */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                                <span className="text-gray-700">Founded in 2006</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                                <span className="text-gray-700">Became RODOPI GmbH in 2010</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                                <span className="text-gray-700">Expanded across Europe</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-2xl">
                            <div className="grid grid-cols-2 gap-6">
                                {values.slice(0, 4).map((value, idx) => (
                                    <div key={idx} className="text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow h-[180px]">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            {value.icon}
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{value.label}</h3>
                                        <p className="text-sm text-gray-600">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Section */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {t('leadership_title')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Meet the visionary leaders driving RODOPI's success across Europe
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {leadership.map((leader, idx) => (
                            <div key={idx} className="group relative w-full">
                                <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                                        <div className="relative flex-shrink-0">
                                            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
                                                <Image
                                                    src={leader.image}
                                                    alt={leader.name}
                                                    width={160}
                                                    height={160}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-center lg:text-left">
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                                                {leader?.name}
                                            </h3>
                                            <p className="text-primary font-semibold text-lg mb-4">
                                                {t('leadership_subtitle')}
                                            </p>
                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {leader?.description}
                                            </p>
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-center lg:justify-start gap-2">
                                                    {/* <div className="w-2 h-2 bg-primary rounded-full"></div> */}
                                                    {/* <span className="text-sm text-gray-600">{leader.experience} experience</span> */}
                                                </div>
                                                <div className="flex items-center justify-center lg:justify-start gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    <span className="text-sm text-gray-600">{leader.expertise}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div id="stats-section" className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Impact</h2>
                            <p className="text-xl text-white/90">Driving sustainable energy across Europe</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {stats?.map((stat, index) => (
                                <div key={index} className="text-center group">
                                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 transition-all duration-300 group-hover:scale-110">
                                        {counts[index]}{stat.suffix}
                                    </div>
                                    <div className="text-lg text-white/90 font-medium capitalize">
                                        {t(`stats.${stat.label}`)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 mb-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Target className="w-4 h-4" />
                            Our Mission
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Leading the Energy Transition
                        </h2>
                        <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                            To lead the transition to sustainable energy through innovative surface coatings, wind turbine services, and
                            photovoltaic solutions, creating a cleaner, more efficient world for future generations.
                        </p>
                    </div>
                </div>

                {/* Awards Section */}
                {/* <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                        Recognized for excellence in renewable energy and sustainable practices
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {[1, 2, 3, 4, 5].map((_, idx) => (
                            <div key={idx} className="group">
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Award className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Award {idx + 1}</h3>
                                    <p className="text-sm text-gray-600">Excellence in Innovation</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default InfoCompany
