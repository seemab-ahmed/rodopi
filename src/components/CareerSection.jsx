'use client'
import { useTranslations } from 'next-intl'
import { Briefcase, Globe, HeartHandshake, LineChart, Users, Play, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const benefits = [
    {
        icon: <Globe className="w-6 h-6 text-primary" />,
        title: 'Global Impact, Local Collaboration',
        description: 'Work in an international environment with the benefits of close-knit teams and flat hierarchies.'
    },
    {
        icon: <HeartHandshake className="w-6 h-6 text-primary" />,
        title: 'Work-Life Balance',
        description: 'Enjoy flexibility with options for mobile working and a social day for community-focused projects.'
    },
    {
        icon: <LineChart className="w-6 h-6 text-primary" />,
        title: 'Career Growth',
        description: 'We invest in your future through continuous learning and development opportunities.'
    },
    {
        icon: <Briefcase className="w-6 h-6 text-primary" />,
        title: 'Competitive Benefits',
        description: 'Benefit from a competitive salary, flexible work options, and a supportive environment where your growth is valued.'
    }
]

const CareerSection = () => {
    const t = useTranslations('CareerSection')

    return (
        <section className="w-full mt-12 mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Users className="w-4 h-4" />
                        Join Our Team
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-20">
                    <div className="relative max-w-4xl mx-auto">
                        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.youtube.com/embed/WYkBGH3VCbw"
                                title="RODOPI Careers"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full">
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Join RODOPI */}
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                    {t('why_join_title')}
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                    {t('why_join_description')}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    <span className="text-gray-700 font-medium">{t('benefit_1')}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    <span className="text-gray-700 font-medium">{t('benefit_2')}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                                    <span className="text-gray-700 font-medium">{t('benefit_3')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-2xl">
                                <div className="space-y-6">
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Globe className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Europe-Wide Presence</h3>
                                        </div>
                                        <p className="text-gray-600">Work across multiple European countries with diverse teams</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <HeartHandshake className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Strong Culture</h3>
                                        </div>
                                        <p className="text-gray-600">Innovation, safety, and teamwork drive everything we do</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <LineChart className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Real Impact</h3>
                                        </div>
                                        <p className="text-gray-600">Hands-on roles that make a difference in sustainable energy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            {t('cta_title')}
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            {t('cta_description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/careers"
                                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                            >
                                {t('cta_button')}
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                                {t('learn_more_button')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareerSection
