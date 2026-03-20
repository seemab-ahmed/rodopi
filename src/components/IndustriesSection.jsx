'use client'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Wind, Sun, Factory, Building2, GraduationCap, Settings, ArrowRight, Zap } from 'lucide-react'

const industries = [
    {
        id: 'wind_energy',
        icon: <Wind className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        link: 'wind_energy'
    },
    {
        id: 'solar_energy',
        icon: <Sun className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-yellow-600',
        gradient: 'from-yellow-500 to-yellow-600',
        link: 'solar_energy'
    },
    {
        id: 'factory_support',
        icon: <Factory className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-green-600',
        gradient: 'from-green-500 to-green-600',
        link: 'factory_support'
    },
    {
        id: 'infrastructure_services',
        icon: <Building2 className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-gray-600',
        gradient: 'from-gray-500 to-gray-600',
        link: 'infrastructure_services'
    },
    {
        id: 'rodopi_academy',
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-purple-600',
        gradient: 'from-purple-500 to-purple-600',
        link: 'rodopi_academy_industries'
    },
    {
        id: 'specialized_services',
        icon: <Settings className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-red-600',
        gradient: 'from-red-500 to-red-600',
        link: 'specialized_services'
    },
    {
        id: 'duerener_korrosionsschutz',
        icon: <Zap className="w-8 h-8 text-primary" />,
        color: 'from-primary/5 to-primary/10',
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        gradient: 'from-primary to-secondary',
        link: 'duerener_korrosionsschutz'
    }
]

const IndustriesSection = () => {
    const t = useTranslations('IndustriesSection')
    const params = useParams()
    const locale = params.locale

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

                                    {/* Arrow Link */}
                                    <div className="flex items-center justify-between mt-6">
                                        <Link 
                                            href={`/${locale}/industries/${industry.link}`}
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                                        >
                                            <ArrowRight className="w-5 h-5 text-primary hover:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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
                        <Link 
                            href={`/${locale}/services`}
                            className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            Explore Services
                        </Link>
                        <Link 
                            href={`/${locale}/contact`}
                            className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustriesSection