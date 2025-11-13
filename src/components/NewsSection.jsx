'use client'
import { useTranslations } from 'next-intl'
import { CalendarDays, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

const NewsSection = () => {
    const t = useTranslations('NewsSection')
    const params = useParams()
    const locale = params.locale

    // Get news items dynamically from translations
    const news = [0, 1, 2].map(index => ({
        title: t(`news.${index}.title`),
        description: t(`news.${index}.description`),
        date: t(`news.${index}.date`),
        image: t(`news.${index}.image`),
        link: t(`news.${index}.link`)
    }))

    return (
        <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-neutral-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <p className="text-primary font-semibold uppercase text-sm sm:text-base">{t('badge')}</p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mt-2">{t('title')}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {news.map((item, index) => (
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
                                <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                                    <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                    {item.date}
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-2 sm:mb-3 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                                    {item.description}
                                </p>
                                <a
                                    href={item.link}
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

                <div className="text-center mt-8 sm:mt-12">
                    <Link
                        href={`/${locale}/news`}
                        className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium hover:bg-primary/90 transition-colors duration-300 rounded-md inline-block"
                    >
                        {t('view_all_button')}
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NewsSection