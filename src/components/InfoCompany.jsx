'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Users, Lightbulb, ShieldCheck, Target, Globe, BarChart, TrendingUp, Award, Star, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

const valueKeys = ['innovation', 'safety', 'sustainability', 'customer_focus', 'integrity']

const leadership = [
    {
        name: 'Ercan Kara Osman',
        position: 'Managing Director',
        image: '/images/ercan_kara_osman.jpg',
        description: 'Leading strategic vision and growth across Europe',
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
    { target: 5, label: 'countries', suffix: '+' },
    { target: 6, label: 'offshore', suffix: '+' }
]

const InfoCompany = () => {
    const t = useTranslations('InfoCompany')
    const [counts, setCounts] = useState([0, 0, 0])
    const [isVisible, setIsVisible] = useState(false)

    const valueIcons = [
        <Lightbulb className="w-6 h-6 text-primary" />,
        <ShieldCheck className="w-6 h-6 text-primary" />,
        <Globe className="w-6 h-6 text-primary" />,
        <Target className="w-6 h-6 text-primary" />,
        <BarChart className="w-6 h-6 text-primary" />
    ]

    const values = valueKeys.map((key, idx) => ({
        icon: valueIcons[idx],
        label: t(`values.${key}.label`),
        description: t(`values.${key}.description`)
    }))

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
            const duration = 2000
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

                {/* Stats Section */}
                <div id="stats-section" className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('impact_title')}</h2>
                            <p className="text-xl text-white/90">{t('impact_subtitle')}</p>
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
            </div>
        </section>
    )
}

export default InfoCompany