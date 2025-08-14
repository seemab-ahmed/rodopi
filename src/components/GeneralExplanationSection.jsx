'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const GeneralExplanationSection = () => {
    const t = useTranslations('GeneralExplanation')

    return (
        <section className="bg-gray-50 py-8 sm:py-12">
            <div className=" mx-auto px-4 sm:px-8 lg:px-16">
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {t('subtitle')}
                    </div>

                    <h2 className="text-3xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                        {t('title_pre')}{' '}<span className="text-primary">{t('title_highlight')}</span>
                    </h2>

                    <p className="text-md sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                        {t('body')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default GeneralExplanationSection
