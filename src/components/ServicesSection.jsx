'use client'
import { useTranslations } from 'next-intl'
import { Wrench, Users, Sun, Plane, Shield, Truck, GraduationCap, HardHat, ArrowRight } from 'lucide-react'

const services = [
    {
        id: 'turbine_maintenance',
        icon: <Wrench className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600'
    },
    {
        id: 'skilled_teams',
        icon: <Users className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600'
    },
    {
        id: 'solar_projects',
        icon: <Sun className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-yellow-600'
    },
    {
        id: 'aviation_coating',
        icon: <Plane className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-purple-600'
    },
    {
        id: 'corrosion_protection',
        icon: <Shield className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-red-600'
    },
    {
        id: 'onsite_corrosion',
        icon: <Truck className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-orange-600'
    },
    {
        id: 'industry_training',
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-indigo-600'
    },
    {
        id: 'workwear_safety',
        icon: <HardHat className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-teal-600'
    }
]

const ServicesSection = () => {
    const t = useTranslations('ServicesSection')

    return (
        <section className="w-full ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Wrench className="w-4 h-4" />
                        Our Services
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
                    {services.map((service, idx) => (
                        <div key={service.id} className="group">
                            <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20`}>
                                <div className="flex flex-col h-full">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                                            {t(`services.${service.id}.title`)}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {t(`services.${service.id}.description`)}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="flex items-center justify-between">
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Contact our expert team to discuss your project requirements and discover how we can help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Contact Us
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection 