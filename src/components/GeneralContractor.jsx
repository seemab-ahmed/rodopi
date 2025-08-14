'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

export const GeneralContractorSection = () => {
    const t = useTranslations('GeneralContractor')

    return (
        <section className="bg-gray-50 py-10 sm:py-[100px] w-full">
            <div className="w-full max-w-[1216px] mx-auto px-4 xl:px-0">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2  text-primary py-2 rounded-full text-lg sm:text-xl font-semibold mb-2 md:mb-6">
                        {t('subtitle')}
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-2 md:mb-6">
                        {t('title_pre')}{' '}<span className="text-primary">{t('title_highlight')}</span>
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                        {t('body')}
                    </p>
                </div>
            </div>
        </section>
    )
}
