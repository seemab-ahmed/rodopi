'use client'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

const StatsSection = ({ stats }) => {
    const t = useTranslations('InfoCompany')
    const [counts, setCounts] = useState(stats.map(() => 0))
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
    }, [isVisible, stats])

    return (
        <div className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
            <div id="stats-section" className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 mb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('impact_title')}</h2>
                        <p className="text-xl text-white/90">{t('impact_subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats?.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 transition-all duration-300 group-hover:scale-110">
                                    {stat.prefix || ''}{counts[index]}{stat.suffix}
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
    )
}

export default StatsSection
