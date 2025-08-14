'use client'
import Image from 'next/image'
import { BadgeCheck } from "lucide-react"

const QualitySection = () => {
    return (
        <section className="w-full py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12">

                {/* Left image */}
                <div className="flex-1 w-full">
                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            src="https://www.krebsgruppe.de/wp-content/uploads/2025/03/krebsgruppe-leistung-korrosionsschutz-1280-853.webp"
                            alt="Inspection"
                            fill
                            className="rounded-md object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Right content */}
                <div className="flex-1 w-full flex flex-col gap-4 sm:gap-6">
                    <div>
                        <p className="text-primary font-semibold text-sm sm:text-base">Expertise and quality</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mt-2 sm:mt-3">Trust in quality</h2>
                        <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            Our certificates represent the highest quality standards – from safety to efficiency.
                            Trust in our proven expertise.
                        </p>
                    </div>

                    {/* Certifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-3 sm:mt-4">
                        {/* ISO 9001 */}
                        <div className="flex flex-col items-start gap-3 sm:gap-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white flex items-center justify-center rounded-md">
                                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">Quality management – ISO 9001</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                                    This certification stands for efficient workflows, clear processes, and the highest quality.
                                    With structured quality management, we ensure customer satisfaction and continuous improvement.
                                </p>
                            </div>
                        </div>

                        {/* ISO 45001 */}
                        <div className="flex flex-col items-start gap-3 sm:gap-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white flex items-center justify-center rounded-md">
                                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">Occupational health and safety – ISO 45001</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                                    The safety of our employees is our top priority. The ISO 45001 certification confirms our commitment to
                                    a safe working environment and continuous improvement in occupational health and safety.
                                </p>
                            </div>
                        </div>

                        {/* ISO 14001 */}
                        <div className="flex flex-col items-start gap-3 sm:gap-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white flex items-center justify-center rounded-md">
                                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">Environmental management – ISO 14001</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                                    We take responsibility for the environment. The ISO 14001 certification confirms our systematic approach
                                    to environmental protection and sustainable business practices.
                                </p>
                            </div>
                        </div>

                        {/* ISO 3834 */}
                        <div className="flex flex-col items-start gap-3 sm:gap-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary text-white flex items-center justify-center rounded-md">
                                <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">Welding quality – ISO 3834</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                                    Our welding work meets the highest standards. The ISO 3834 certification guarantees consistently high
                                    quality in all welding processes and comprehensive quality assurance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div
                        className="w-fit  mt-6 bg-primary text-white px-8 py-3 font-medium cursor-pointer hover:bg-primary/90 transition-all"
                        style={{
                            clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)'
                        }}
                    >
                        Learn more
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualitySection
