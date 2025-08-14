'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const MapRodopi = () => {
    const t = useTranslations('MapRodopi.services')
    const [hoveredService, setHoveredService] = useState(null)

    // Service locations on the map (percentage positions)
    const services = [
        {
            index: 9,
            id: 'wind_repair_offshore',
            position: { top: '30%', left: '20%' },
            icon: '/images/wind-turbine.png'
        },
        {
            index: 8,
            id: 'wind_maintenance_onshore',
            position: { top: '70%', left: '15%' },
            icon: '/images/wind-turbine.png'
        },
        {
            index: 7,
            id: 'rodopi_solar',
            position: { top: '90%', left: '25%' },
            icon: '/images/solar_panel.png'
        },
        {
            index: 6,
            id: 'skilled_teams',
            position: { top: '75%', left: '35%' },
            icon: '/images/factory_workers.png'
        },
        {
            index: 5,
            id: 'corrosion_protection',
            position: { top: '20%', left: '75%' },
            icon: "/images/corrosion_protections.png"
        },
        {
            index: 4,
            id: 'rodopi_tools',
            position: { top: '55%', left: '60%' },
            icon: '/images/safety_equipment.png'
        },

        {
            index: 2,
            id: 'building_infrastructure',
            position: { top: '80%', left: '66%' },
            icon: '/images/building_maintenance.png'
        },
        {
            index: 3,
            id: 'rodopi_academy',
            position: { top: '40%', left: '85%' },
            icon: '/images/rodopi_academy.png'
        },
        {
            index: 1,
            id: 'building_infrastructure',
            position: { top: '90%', left: '90%' },
            icon: '/images/building_maintenance.png'
        }
    ]

    return (
        <div className="relative w-screen bg-gray-50">
            <div className="w-screen">
                {/* Section Title */}

                {/* Interactive Map Container */}
                <div className="relative w-screen overflow-visible">
                    {/* Background Map Image */}
                    <div className="relative w-screen" style={{ aspectRatio: '16/9' }}>
                        <Image
                            src="/images/rodopi_illustration_map.jpg"
                            alt="RODOPI Services Map"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* Service Icons */}
                        {services.map((service) => (
                            <div
                                key={`${service.id}-${service.index}`}
                                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group ${hoveredService === service.id + '-' + service.index ? 'z-[1000]' : 'z-10'}`}
                                style={{
                                    top: service.position.top,
                                    left: service.position.left
                                }}
                                onMouseEnter={() => setHoveredService(`${service.id}-${service.index}`)}
                                onMouseLeave={() => setHoveredService(null)}
                            >
                                {/* Plus Icon */}
                                <div className="relative">
                                    <div className="bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg transform transition-all duration-300 sm:group-hover:scale-110 group-hover:shadow-xl w-7 h-7 text-sm sm:w-9 sm:h-9 sm:text-base md:w-12 md:h-12 md:text-xl">
                                        +
                                    </div>

                                    {/* Service Icon */}
                                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden relative">
                                        <Image src={service?.icon} alt="" fill className="object-contain p-0.5 sm:p-1" sizes="24px" />
                                    </div>
                                </div>

                                {/* Hover Card */}
                                {hoveredService === `${service.id}-${service.index}` && (
                                    <div
                                        className={`absolute left-1/2 transform -translate-x-1/2 w-64 sm:w-80 bg-white rounded-xl shadow-2xl p-4 sm:p-6 z-[999] border border-gray-200 ${parseFloat(service.position.top) < 50 ? 'top-16' : 'bottom-16'
                                            }`}
                                        onMouseEnter={() => setHoveredService(`${service.id}-${service.index}`)}
                                        onMouseLeave={() => {
                                            // Add delay before hiding the card
                                            setTimeout(() => {
                                                setHoveredService(null)
                                            }, 300)
                                        }}
                                    >
                                        {/* Card Arrow - positioned based on card location */}
                                        <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 ${parseFloat(service.position.top) < 50 ? '-top-2' : '-bottom-2 rotate-[225deg]'
                                            }`}></div>

                                        {/* Title */}
                                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                            <div className="relative w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-white rounded-full overflow-hidden border border-gray-200">
                                                <Image src={service?.icon} alt="" fill className="object-contain p-0.5" sizes="28px" />
                                            </div>
                                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                                                {t(`${service.id}.title`)}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                                            {t(`${service.id}.description`)}
                                        </p>

                                        {/* Learn More Button */}
                                        <button className="mt-3 w-full bg-primary text-white py-1.5 px-3 rounded-md font-medium hover:bg-primary/90 transition-colors text-xs sm:text-sm">
                                            Learn More
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Service Legend */}
                {/* <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg mb-2">
                                {service.icon}
                            </div>
                            <span className="text-xs font-medium text-gray-700">
                                {t(`${service.id}.title`).split(' ')[0]}
                            </span>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default MapRodopi
