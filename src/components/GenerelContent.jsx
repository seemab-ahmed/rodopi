import React from 'react'

const GenerelContent = () => {
    return (
        <div className='w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-8 sm:py-12'>
            <div className='w-full lg:w-2/3 xl:w-1/2 flex flex-col gap-3 sm:gap-4'>
                <p className='text-base sm:text-lg font-semibold text-primary'>We are where you are</p>
                <p className='text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight sm:leading-relaxed'>General contractor for <span className='text-primary'>demanding</span> engineering services</p>
                <p className='text-sm sm:text-base font-thin leading-relaxed'>Every industry has its unique technical challenges. With over 75 years of experience, we know exactly what matters: We understand your individual requirements and, with our expertise and modern fleet, offer customized, innovative solutions that lead your projects to success efficiently and reliably.</p>
            </div>
        </div>
    )
}

export default GenerelContent
