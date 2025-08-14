import React from 'react'
import Image from 'next/image'

const ServicesCard = () => {
    return (
        <div className='flex flex-col gap-3 sm:gap-4 w-full max-w-[300px] mx-auto'>
            <div className="relative w-full aspect-square">
                <Image
                    className='rounded-md object-cover'
                    src="https://www.krebsgruppe.de/wp-content/uploads/2025/03/krebsgruppe-leistung-korrosionsschutz-1280-853.webp"
                    alt="Services Card"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
            </div>
            <div className='flex flex-col gap-2 sm:gap-3 mt-2 sm:mt-4'>
                <p className='text-base sm:text-lg font-semibold text-primary'>Corrosion protection</p>
                <p className='text-xs sm:text-sm text-secondary leading-relaxed'>Ensure the longevity of your systems with our first-class corrosion protection that meets the highest standards.</p>
                <p className='text-sm sm:text-base text-primary font-semibold cursor-pointer hover:underline'>Learn more <span className='text-primary'>{">"}</span></p>
            </div>
        </div>
    )
}

export default ServicesCard
