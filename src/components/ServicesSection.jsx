'use client'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Wrench, Users, Sun, Plane, Shield, Truck, GraduationCap, HardHat, ArrowRight } from 'lucide-react'

const services = [
    {
        id: 'turbine_maintenance',
        icon: <Wrench className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
        link: 'wind_maintenance'
    },
    {
        id: 'skilled_teams',
        icon: <Users className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
        link: 'skilled_teams'
    },
    {
        id: 'solar_projects',
        icon: <Sun className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-yellow-600',
        link: 'solar_projects'
    },
    {
        id: 'industry_training',
        icon: <Plane className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-purple-600',
        link: 'rodopi_academy'
    },
    {
        id: 'corrosion_protection',
        icon: <Shield className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-red-600',
        link: 'corrosion_protection'
    },
    {
        id: 'aviation_coating',
        icon: <GraduationCap className="w-8 h-8 text-primary" />,
        color: 'from-blue-50 to-blue-100',
        iconBg: 'bg-blue-100',
        iconColor: 'text-indigo-600',
        link: 'aviation_coating'
    },
     {
        id: 'onsite_corrosion',
        icon: <Truck className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-orange-600',
        link: 'onsite_corrosion'
    },
    {
        id: 'workwear_safety',
        icon: <HardHat className="w-8 h-8 text-primary" />,
        color: 'from-green-50 to-green-100',
        iconBg: 'bg-green-100',
        iconColor: 'text-teal-600',
        link: 'workwear_safety'
    }
]

const ServicesSection = () => {
    const t = useTranslations('ServicesSection')
    const params = useParams()
    const locale = params.locale

    return (
        <section className="w-full ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Wrench className="w-4 h-4" />
                        {t('badge')}
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
                    {services.map((service, idx) => {
                        // Alternate colors: even = blue, odd = green
                        const color = idx % 2 === 0 ? 'from-blue-50 to-blue-100' : 'from-green-50 to-green-100';
                        const iconBg = idx % 2 === 0 ? 'bg-blue-100' : 'bg-green-100';
                        const iconColor = idx % 2 === 0 ? 'text-blue-600' : 'text-[#8CC43F]';
                        // Clone the icon with the correct color
                        const IconComponent = service.icon.type;
                        return (
                            <div key={service.id} className="group">
                                <div className={`bg-gradient-to-br ${color} rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-primary/20`}>
                                    <div className="flex flex-col h-full">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className={`w-8 h-8 ${iconColor}`} />
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

                                        {/* Arrow Link */}
                                        <div className="flex items-center justify-between">
                                            <Link 
                                                href={`/${locale}/services/${service.link}`}
                                                className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
                                            >
                                                <ArrowRight className="w-4 h-4 text-primary hover:translate-x-1 transition-transform duration-300" />
                                            </Link>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

              
            </div>
        </section>
    )
}

export default ServicesSection