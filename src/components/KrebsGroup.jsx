'use client'
import { useTranslations } from 'next-intl'
import { CalendarDays, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const KrebsData = [
    {
        title: 'About Us',
        description: 'Discover our journey, mission, and the values that drive RODOPI to deliver excellence across the wind energy sector.',
        image: '/images/IMG_4552.JPG',
    },
    {
        title: 'Services',
        description: 'Officially recognised by the Global Wind Organisation, reinforcing RODOPI’s role as a trusted partner in safety and blade repair training.',
        image: '/images/rodopi_illustration_map.jpg',
    },
    {
        title: 'Industries',
        description: 'Proudly serving diverse industries with certified expertise, from wind energy to corrosion protection and advanced maintenance.',
        image: '/images/lower-view-of-two-engineers-or-technician-workers-2025-03-06-17-00-13-utc.jpg',
    }
]

export const KrebsGroupSection = () => {
    const t = useTranslations('KrebsGroup')

    return (
        <section className="w-full bg-neutral-50 py-[60px] md:py-[140px]">
            <div className="max-w-[1216px] w-full px-4 xl:px-0 mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                     <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-3 md:mb-6">
                        {t('title_pre')}{' '}<span className="text-primary">{t('title_highlight')}</span>
                    </h2>
                    <p className="text-black w-full md:max-w-[600px] mx-auto font-semibold text-base sm:text-lg">{t('body')}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {KrebsData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2 sm:mb-3 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                                    {item.description}
                                </p>
                                <a
                                    href=""
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-primary font-medium text-xs sm:text-sm hover:underline cursor-pointer"
                                >
                                    {t('read_more')}
                                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

