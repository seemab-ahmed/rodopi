'use client'
import { useTranslations } from 'next-intl'
import { Target, Eye, Heart, Lightbulb, ShieldCheck, Globe, Users, Award } from 'lucide-react'

const values = [
    { icon: <Lightbulb className="w-6 h-6 text-primary" />, label: 'Innovation', description: 'Pioneering new solutions' },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, label: 'Safety', description: 'Your security first' },
    { icon: <Globe className="w-6 h-6 text-primary" />, label: 'Sustainability', description: 'Green energy future' },
    { icon: <Users className="w-6 h-6 text-primary" />, label: 'Customer Focus', description: 'Your success matters' },
    { icon: <Award className="w-6 h-6 text-primary" />, label: 'Integrity', description: 'Trust and reliability' },
]

const MissionVision = () => {
    const t = useTranslations('MissionVision')

    return (
        <section className=" w-full ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Heart className="w-4 h-4" />
                        Our Purpose
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Vision Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                                <Eye className="w-4 h-4" />
                                {t('vision_title')}
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                {t('vision_text')}
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Driven by innovation, quality and deep expertise, we are committed to shaping the future of sustainable energy.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Globe className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">European Leadership</h3>
                                    <p className="text-sm text-gray-600">Leading the energy transition across Europe</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Target className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Sustainable Solutions</h3>
                                        </div>
                                        <p className="text-gray-600">Advancing renewable energy and infrastructure across Europe</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Lightbulb className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Innovation Driven</h3>
                                        </div>
                                        <p className="text-gray-600">Pioneering new technologies and approaches</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Award className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Quality & Expertise</h3>
                                        </div>
                                        <p className="text-gray-600">Deep technical knowledge and proven track record</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 rounded-3xl">
                                <div className="space-y-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Users className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Employer of Choice</h3>
                                        </div>
                                        <p className="text-gray-600">Preferred workplace in renewable energy and infrastructure</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Heart className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Empowering People</h3>
                                        </div>
                                        <p className="text-gray-600">Supporting our team and partners to succeed</p>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Globe className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="font-semibold text-gray-900">Cleaner Future</h3>
                                        </div>
                                        <p className="text-gray-600">Shaping a more resilient and sustainable world</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                <Target className="w-4 h-4" />
                                {t('mission_title')}
                            </div>
                            <h2 className="text-xl sm:text-xl font-bold text-gray-900 leading-tight">
                                {t('mission_text')}
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Empowering our people and partners to shape a cleaner, more resilient future through sustainable practices and innovative solutions.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">People First</h3>
                                    <p className="text-sm text-gray-600">Empowering our team and partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 lg:p-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Heart className="w-4 h-4" />
                            {t('values_title')}
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                            {t('values_text')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('values_description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {values.map((value, idx) => (
                            <div key={idx} className="group text-center">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        {value.icon}
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2">{value.label}</h3>
                                    <p className="text-sm text-gray-600">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVision 