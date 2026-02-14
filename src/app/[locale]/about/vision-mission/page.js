'use client'
import { useTranslations } from 'next-intl'
import MissionVision from '@/components/MissionVision'
import { HeroBannerSection } from '@/components/BannerSection'
import { Target, TrendingUp, Users, Cpu, Award, CheckCircle } from 'lucide-react'

const VisionMissionPage = () => {
    const t = useTranslations('VisionMissionPage')

    return (
        <div>
            {/* Hero Banner */}
            <HeroBannerSection
                backgroundImage="/images/engineer-and-operator-inspecting-wind-turbine-for-2025-03-08-23-14-14-utc.jpg"
                badgeText={t('badge')}
                title={t('title')}
                subtitle={t('subtitle')}
                secondaryCta={{ label: t('cta_button') }}
            />

            {/* Mission Vision Component */}
            <MissionVision />
            {/* New Content Section */}
            <section className="w-full py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Vision Section */}
                    <div className="mb-20">
                        <div className="max-w-7xl">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {t('content.vision_title')}
                            </h2>
                            <p className="text-xl sm:text-2xl text-primary font-semibold mb-6 leading-relaxed">
                                {t('content.vision_text')}
                            </p>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                {t('content.vision_paragraph1')}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.vision_paragraph2')}
                            </p>
                        </div>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 lg:p-16">
                        <div className="max-w-7xl">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {t('content.mission_title')}
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                                {t('content.mission_intro')}
                            </p>

                            {/* Four Pillars */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Pillar 1 */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Target className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                {t('content.pillar1_title')}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {t('content.pillar1_text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pillar 2 */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <TrendingUp className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                {t('content.pillar2_title')}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {t('content.pillar2_text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pillar 3 */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Users className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                {t('content.pillar3_title')}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {t('content.pillar3_text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pillar 4 */}
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Cpu className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                {t('content.pillar4_title')}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {t('content.pillar4_text')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Section */}
                    <div className="mt-16 max-w-7xl">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-6">
                                <Award className="w-8 h-8 text-primary" />
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {t('content.compliance_title')}
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <p className="font-semibold text-gray-900">
                                        {t('content.compliance1')}
                                    </p>
                                </div>
                                <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <p className="font-semibold text-gray-900">
                                        {t('content.compliance2')}
                                    </p>
                                </div>
                                <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <p className="font-semibold text-gray-900">
                                        {t('content.compliance3')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default VisionMissionPage
