'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Users, Lightbulb, ShieldCheck, Target, Globe, BarChart, TrendingUp, Award, Star, CheckCircle } from 'lucide-react'
import StatsSection from './StatsSection'

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



const InfoCompany = () => {
    const t = useTranslations('InfoCompany')

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
            </div>
        </section>
    )
}

export default InfoCompany