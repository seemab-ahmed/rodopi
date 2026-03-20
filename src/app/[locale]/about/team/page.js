'use client'
import en from '@/../messages/en.json'
import Image from 'next/image'
import de from '@/../messages/de.json'
import { useTranslations } from 'next-intl'
import { ContactTeam } from '@/components/ContactTeam'
import { HeroBannerSection } from '@/components/BannerSection'
import { CheckCircle } from 'lucide-react'
import StatsSection from '@/components/StatsSection'
import { VideoPlayer } from '@/components/VideoPlayer'

import React, { useState } from 'react'
const TeamPage = ({ params }) => {
    const t = useTranslations('TeamPage')
    const { locale } = React.use(params)
    const messages = locale === 'de' ? de : en
    const rodopiTeam = messages?.AboutPage?.ContactTeam
    const stats = [
        { target: 500, label: 'employees', suffix: '+' },
        { target: 450, label: 'technicians', suffix: '+' },
        { target: 10, label: 'languages', suffix: '+' },
        { target: 5, label: 'headcount_churn', suffix: '%', prefix: '<' }
    ]

    // Modal state for team member popup
    const [selectedMember, setSelectedMember] = useState(null);

    // Helper: find member by name (case-insensitive, trimmed)
    const findMemberByName = (name) => {
        if (!rodopiTeam?.members) return null;
        return rodopiTeam.members.find(m => m.name.trim().toLowerCase() === name.trim().toLowerCase());
    };

    return (
        <div>
            {/* Hero Banner */}
            <HeroBannerSection
                backgroundImage="/images/IMG_4552.JPG"
                mobileImage="/images/rodopi-team-mobile.jpeg"
                badgeText={t('badge')}
                title={t('title')}
                subtitle={t('subtitle')}
                secondaryCta={{ label: t('cta_button') }}
            />

            {/* New Content Section */}
            <section className="w-full pt-16 sm:pt-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
                            {t('content.main_title')}
                        </h2>
                        
                        <div className="space-y-6 mb-12">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph1')}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph2')}
                            </p>
                        </div>

                        {/* Characteristics Box */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 sm:p-10 mb-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                {t('content.characteristics_title')}
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char1')}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char2')}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char3')}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">{t('content.char4')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph3')}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t('content.paragraph4')}
                            </p>
                            {/* <p className="text-xl font-semibold text-primary text-center mt-8">
                                {t('content.closing')}
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection stats={stats} />

            {/* Organization Chart Section (Interactive) */}
            <section className="w-full py-4 sm:pt-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                    {/* Org Chart Start */}
                    {(() => {
                        // Instead of links, clicking a name opens the modal for that member
                        const OrgBox = ({ title, names = [], details = [] }) => (
                            <div className="border-2 border-primary/40 rounded-lg p-0 m-2 bg-primary/5 shadow min-w-[240px] max-w-xs flex flex-col items-center" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                                {/* Heading with bolder border and bg */}
                                <div className="w-full bg-primary/10 rounded-t-lg px-4 py-2 flex flex-col items-center" style={{ borderTop: '5px solid #8cc43f' }}>
                                    <span className="font-extrabold text-lg text-secondary text-center tracking-wide">{title}</span>
                                </div>
                                {/* Content */}
                                <div className="w-full flex flex-col items-center px-4 py-3">
                                    {details.length > 0 && (
                                        <div className="text-sm text-gray-700 text-center">
                                            {details.map((d, i) => (
                                                <div key={i}>{d}</div>
                                            ))}
                                        </div>
                                    )}
                                    {names.length > 0 && (
                                        <div className="mt-2 font-semibold text-gray-900 flex flex-wrap justify-center gap-2">
                                            {names.map((name, i) => {
                                                const member = findMemberByName(name);
                                                return member ? (
                                                    <button
                                                        key={i}
                                                        type="button"
                                                        onClick={() => setSelectedMember(member)}
                                                        className="text-secondary underline hover:text-primary transition cursor-pointer bg-transparent border-none p-0 m-0"
                                                    >
                                                        {name}
                                                    </button>
                                                ) : (
                                                    <p key={i}>{name}</p>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                        const OrgBoxMain = ({ title, names = [], details = [] }) => (
                            <div className="border-2 border-primary/40 rounded-lg p-0 m-2 bg-primary/5 shadow min-w-[340px] max-w-xs flex flex-col items-center" style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
                                {/* Heading with bolder border and bg */}
                                <div className="w-full bg-primary/10 rounded-t-lg px-4 py-2 flex flex-col items-center" style={{ borderTop: '5px solid #8cc43f' }}>
                                    <span className="font-extrabold text-[28px] text-secondary text-center tracking-wide">{title}</span>
                                </div>
                                {/* Content */}
                                <div className="w-full flex flex-col items-center px-4 py-3">
                                    {details.length > 0 && (
                                        <div className="text-sm text-gray-700 text-center">
                                            {details.map((d, i) => (
                                                <div key={i}>{d}</div>
                                            ))}
                                        </div>
                                    )}
                                    {names.length > 0 && (
                                        <div className="mt-2 font-semibold text-gray-900 flex flex-wrap justify-center gap-2">
                                            {names.map((name, i) => {
                                                const member = findMemberByName(name);
                                                return member ? (
                                                    <button
                                                        key={i}
                                                        type="button"
                                                        onClick={() => setSelectedMember(member)}
                                                        className="text-secondary underline hover:text-primary transition cursor-pointer bg-transparent border-none p-0 m-0"
                                                    >
                                                        {name}
                                                    </button>
                                                ) : (
                                                    <p key={i}>{name}</p>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                        return (
                            <div className="flex flex-col items-center w-full bg-primary/5 py-6 rounded-xl">
                                {/* Top Box */}
                                <OrgBoxMain
                                    title="RODOPI HOLDING"
                                    details={["Strategie – BD – Admin"]}
                                    names={["Ercan Kara Osman"]}
                                />

                                {/* Row 1 */}
                                <div className="flex flex-row justify-center  2xl:absolute right-90">
                                    <OrgBox
                                        title="ADVISORY"
                                        names={["Kyriakos Kosmidis", "Achmet Gkaroglou", "Stefan Scholemann", "Ercan Kara Osman"]}
                                    />
                                </div>

                                {/* Row 2 */}
                                <div className="flex flex-row flex-wrap justify-center mt-4 gap-4">
                                    <OrgBox
                                        title="FACTORY SERVICE"
                                        names={["Burak Dogan"]}
                                        details={[
                                            "BU Head Blades",
                                            "BU Corrosion Offshore",
                                            "BU Infrastructure Factory",
                                            "BU Dürener Korrosionsschutz",
                                        ]}
                                    />
                                    <OrgBox
                                        title="WIND SERVICE"
                                        names={["George Lampadas", "Patryk Pawłowski"]}
                                        details={[
                                            "BU Maintenance",
                                            "BU Blade Service",
                                            "Hub Greece, Hub Academy",
                                            "Hub Düsseldorf",
                                            "Hub Poland",
                                            "Hub Australia",
                                        ]}
                                    />
                                    <OrgBox
                                        title="SOLAR"
                                        names={["Rodion Enkin"]}
                                        details={["BU Solar"]}
                                    />
                                    <OrgBox
                                        title="INFRASTRUCTURE"
                                        names={["Frederik Buckenhüskes", "Henning Peels"]}
                                        details={["BU Concrete Rehabilitation", "BU Mastic Asphalt"]}
                                    />
                                </div>

                                {/* Row 3 */}
                                <div className="flex flex-row flex-wrap justify-center mt-4 gap-4">
                                    <OrgBox
                                        title="CORPORATE FUNCTIONS"
                                        details={[
                                            "Controlling/Accounting",
                                            "Office Management",
                                            "Einkauf, Warehouse",
                                            "Payroll, WMS",
                                            "Fuhrpark",
                                        ]}
                                    />
                                    <OrgBox
                                        title="PERSONAL"
                                        names={["Mafalda Viana", "Sofia Symeonidou"]}
                                        details={["Personal Service", "HR-Recruitment"]}
                                    />
                                    <OrgBox
                                        title="SALES"
                                        names={["Tolga Eren"]}
                                        details={["BU Head Sales"]}
                                    />
                                </div>
                            </div>
                        );
                    })()}
                    {/* Org Chart End */}
                    {/* Modal for Org Chart (reuse ContactTeam style) */}
                    {selectedMember && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative flex flex-col items-center">
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-4 right-4 text-gray-500 hover:text-primary text-2xl font-bold focus:outline-none"
                                    aria-label="Close"
                                >
                                    ×
                                </button>
                                {selectedMember.image ? (
                                    <img
                                        src={selectedMember.image}
                                        alt={selectedMember.name}
                                        className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20 shadow-lg"
                                    />
                                ) : (
                                    <img
                                        src="/images/user(1).png"
                                        alt="placeholder"
                                        className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20 shadow-lg bg-gray-100"
                                    />
                                )}
                                <h3 className="text-2xl font-bold text-primary mb-2 text-center">
                                    {selectedMember.name}
                                </h3>
                                {selectedMember.role && (
                                    <p className="text-base font-semibold text-gray-600 mb-2 text-center">{selectedMember.role}</p>
                                )}
                                {selectedMember.description && (
                                    <p className="text-sm text-gray-700 mb-4 text-center">
                                        {selectedMember.description}
                                    </p>
                                )}
                                <div className="w-full flex flex-col gap-2 mb-2">
                                    {selectedMember.email && (
                                        <p className="text-sm text-blue-900"><strong>Email:</strong> {selectedMember.email}</p>
                                    )}
                                    {selectedMember.phone && (
                                        <p className="text-sm text-gray-700"><strong>Phone:</strong> {selectedMember.phone}</p>
                                    )}
                                    {selectedMember.language && (
                                        <p className="text-sm text-gray-700"><strong>Language:</strong> {selectedMember.language}</p>
                                    )}
                                </div>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            {/* Team Section */}
            <ContactTeam data={rodopiTeam} />
            <VideoPlayer  videoUrl="https://youtube.com/shorts/j6-OoGUVuXA" />

            
        </div>
    )
}

export default TeamPage
