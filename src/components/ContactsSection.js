import React from 'react'
import Image from 'next/image'

const ContactsSection = () => {
    return (
        <div className='w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12 flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-between'>
            <div className='w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 px-2 sm:pl-4'>
                <p className='text-sm sm:text-base font-semibold text-primary'>Still questions?</p>
                <p className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight'>Let's get to the point</p>
                <p className='text-xs sm:text-sm text-secondary mt-2 sm:mt-4 leading-relaxed'>Do you need answers, support, or solutions? We're here for you – clear, direct, and straightforward. Contact us, and we'll take care of your concerns.</p>
                <div className='flex gap-3 sm:gap-4 flex-col mt-3 sm:mt-4 text-xs sm:text-sm'>
                    <p className="flex items-center gap-3 sm:gap-4">
                        {/* Phone Icon */}
                        <svg className="w-6 sm:w-8 h-5 sm:h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="break-all">+49 (0) 40 / 75 66 33 0</span>
                    </p>
                    <p className="flex items-center gap-3 sm:gap-4">
                        {/* Email Icon */}
                        <svg className="w-6 sm:w-8 h-5 sm:h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="break-all">info@krebsgruppe.de</span>
                    </p>
                    <div
                        className="w-fit mt-4 sm:mt-6 bg-primary text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium cursor-pointer hover:bg-primary/90 transition-all"
                        style={{
                            clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
                        }}
                    >
                        To the contact page
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[4/5]">
                    <Image
                        src="https://www.krebsgruppe.de/wp-content/uploads/2025/02/krebsgruppe-ansprechpartner-sarah.webp"
                        alt="Contacts Section"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactsSection
