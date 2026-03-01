'use client'
import en from '@/../messages/en.json'
import Image from 'next/image'
import de from '@/../messages/de.json'
import { useTranslations } from 'next-intl'
import { ContactTeam } from '@/components/ContactTeam'
import { HeroBannerSection } from '@/components/BannerSection'
import { CheckCircle } from 'lucide-react'
import StatsSection from '@/components/StatsSection'
import { VideoPlayer } from '@/components/VideoPlayer'

import React from 'react'
const TeamPage = ({ params }) => {
    const t = useTranslations('TeamPage')
    const { locale } = React.use(params)
    const messages = locale === 'de' ? de : en
    const rodopiTeam = messages?.AboutPage?.ContactTeam
    
    const stats = [
        { target: 500, label: 'employees', suffix: '+' },
        { target: 450, label: 'technicians', suffix: '+' },
        { target: 10, label: 'languages', suffix: '+' },
        { target: 5, label: 'headcount_churn', suffix: '%', prefix: '<' }
    ]

    return (
        <div>
            {/* Hero Banner */}
            <HeroBannerSection
                backgroundImage="/images/IMG_4552.JPG"
                mobileImage="/images/rodopi-team-mobile.jpeg"
                badgeText={t('badge')}
                title={t('title')}
                subtitle={t('subtitle')}
                secondaryCta={{ label: t('cta_button') }}
            />

            {/* New Content Section */}
            <section className="w-full pt-16 sm:pt-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                            {t('content.main_title')}
                        </h2>
                        
                        <div className="space-y-6 mb-12">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph1')}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph2')}
                            </p>
                        </div>

                        {/* Characteristics Box */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-10 mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {t('content.characteristics_title')}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char1')}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char2')}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char3')}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char4')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph3')}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph4')}
                            </p>
                            {/* <p className="text-xl font-semibold text-primary text-center mt-8">
                                {t('content.closing')}
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection stats={stats} />

            <section className="w-full py-4 sm:pt-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Image
                        src="/images/organization-chart.jpeg"
                        alt="Team Image"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                    />
                    </div>
            </section>
            {/* Team Section */}
            <ContactTeam data={rodopiTeam} />
            <VideoPlayer  videoUrl="https://youtube.com/shorts/j6-OoGUVuXA" />

            
        </div>
    )
}

export default TeamPage
