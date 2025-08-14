'use client'
import { useTranslations } from 'next-intl'
import { Wind, Sun, Factory, Building2, GraduationCap, Settings, ArrowRight, Zap } from 'lucide-react'

const industries = [
    {
        id: 'wind_energy',
        icon: <Wind className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600'
    },
    {
        id: 'solar_energy',
        icon: <Sun className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-yellow-600',
        gradient: 'from-yellow-500 to-yellow-600'
    },
    {
        id: 'factory_support',
        icon: <Factory className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-green-600',
        gradient: 'from-green-500 to-green-600'
    },
    {
        id: 'infrastructure_services',
        icon: <Building2 className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-gray-600',
        gradient: 'from-gray-500 to-gray-600'
    },
    {
        id: 'rodopi_academy',
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-purple-600',
        gradient: 'from-purple-500 to-purple-600'
    },
    {
        id: 'specialized_services',
        icon: <Settings className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-red-600',
        gradient: 'from-red-500 to-red-600'
    }
]

const IndustriesSection = () => {
    const t = useTranslations('IndustriesSection')

    return (
        <section className=" w-full my-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Zap className="w-4 h-4" />
                        Our Industries
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-20">
                    {industries.map((industry, idx) => (
                        <div key={industry.id} className="group">
                            <div className={`bg-gradient-to-br ${industry.color} rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 relative overflow-hidden`}>
                                {/* Background Pattern */}
                               
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${industry.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {industry.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                            {t(`industries.${industry.id}.title`)}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {t(`industries.${industry.id}.description`)}
                                        </p>

                                        {/* Services List */}
                                        <div className="space-y-2">
                                            {t(`industries.${industry.id}.services`).split(', ').map((service, serviceIdx) => (
                                                <div key={serviceIdx} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                    <span className="text-sm text-gray-700">{service}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics Section */}
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">6</div>
                            <div className="text-lg text-white/90 font-medium">Industries Served</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">15+</div>
                            <div className="text-lg text-white/90 font-medium">European Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">500+</div>
                            <div className="text-lg text-white/90 font-medium">Projects Completed</div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Ready to Power Your Industry?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Discover how our expertise across multiple industries can help you achieve your goals and drive sustainable growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
                            Explore Services
                        </button>
                        <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustriesSection 