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
    const tc = useTranslations('Common')
    const { locale } = React.use(params)
    const messages = locale === 'de' ? de : en
    const rodopiTeam = messages?.AboutPage?.ContactTeam
    const stats = [
        { target: 600, label: 'employees', suffix: '+' },
        { target: 550, label: 'technicians', suffix: '+' },
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

            {/* Team Tree Structure — Full Cards */}
            <section className="w-full py-10 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight">
                        {t('team_tree_heading')}
                    </h2>

                    {/* ── Helper: reusable member card ── */}
                    {(() => {
                        const MemberCard = ({ member }) => (
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
                                {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-[300px] object-cover" />
                                ) : (
                                    <img src="/images/user(1).png" alt="placeholder" className="w-full h-[300px] object-cover bg-gray-100" />
                                )}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
                                    {member.role && <p className="text-sm font-bold text-gray-500 mb-2">{member.role}</p>}
                                    {member.description && (
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{member.description}</p>
                                    )}
                                    <p className="text-sm text-blue-900"><strong>{tc('email_label')}:</strong> {member.email}</p>
                                    <p className="text-sm text-gray-500"><strong>{tc('language_label')}:</strong> {member.language}</p>
                                    <button
                                        onClick={() => setSelectedMember(member)}
                                        className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition self-start"
                                    >
                                        {tc('view_details')}
                                    </button>
                                </div>
                            </div>
                        );

                        const TierLabel = ({ label }) => (
                            <div className="flex flex-col items-center w-full mb-8">
                                <div className="inline-flex items-center justify-center px-10 py-2.5 bg-primary/10 rounded-xl" style={{ borderTop: '5px solid #8cc43f' }}>
                                    <span className="font-extrabold text-secondary uppercase tracking-widest text-base">{label}</span>
                                </div>
                            </div>
                        );

                        const Connector = () => (
                            <div className="flex flex-col items-center w-full my-2">
                                <div className="w-0.5 h-10 bg-primary/40"></div>
                            </div>
                        );

                        const execNames     = ["Ercan Kara Osman", "Kristof Krull"];
                        const advisoryNames = ["Kyriakos Kosmidis", "Achmet Gkaroglou", "Stefan Scholemann"];
                        const fixedNames    = new Set([...execNames, ...advisoryNames].map(n => n.trim().toLowerCase()));
                        // Management = all remaining members in JSON order (reflects any JSON reordering)
                        const mgmtMembers   = (rodopiTeam?.members || []).filter(
                            m => !fixedNames.has(m.name.trim().toLowerCase())
                        );

                        return (
                            <div className="flex flex-col items-center w-full">

                                {/* LEVEL 1 — Executive Management */}
                                <TierLabel label={t('tier_managing_directors')} />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">
                                    {execNames.map((name, i) => {
                                        const m = findMemberByName(name);
                                        return m ? <MemberCard key={i} member={m} /> : null;
                                    })}
                                </div>

                                <Connector />

                                {/* LEVEL 2 — Advisory Board */}
                                <TierLabel label={t('tier_advisory_board')} />
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                                    {advisoryNames.map((name, i) => {
                                        const m = findMemberByName(name);
                                        return m ? <MemberCard key={i} member={m} /> : null;
                                    })}
                                </div>

                                <Connector />

                                {/* LEVEL 3 — Management */}
                                <TierLabel label={t('tier_management')} />
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                                    {mgmtMembers.map((m, i) => (
                                        <MemberCard key={i} member={m} />
                                    ))}
                                </div>

                            </div>
                        );
                    })()}

                    {/* Modal */}
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
                                    <img src={selectedMember.image} alt={selectedMember.name} className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20 shadow-lg" />
                                ) : (
                                    <img src="/images/user(1).png" alt="placeholder" className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20 shadow-lg bg-gray-100" />
                                )}
                                <h3 className="text-2xl font-bold text-primary mb-2 text-center">{selectedMember.name}</h3>
                                {selectedMember.role && (
                                    <p className="text-base font-semibold text-gray-600 mb-2 text-center">{selectedMember.role}</p>
                                )}
                                {selectedMember.description && (
                                    <p className="text-sm text-gray-700 mb-4 text-center">{selectedMember.description}</p>
                                )}
                                <div className="w-full flex flex-col gap-2 mb-2">
                                    {selectedMember.email && (
                                        <p className="text-sm text-blue-900"><strong>{tc('email_label')}:</strong> {selectedMember.email}</p>
                                    )}
                                    {selectedMember.phone && (
                                        <p className="text-sm text-gray-700"><strong>{tc('phone_label')}:</strong> {selectedMember.phone}</p>
                                    )}
                                    {selectedMember.language && (
                                        <p className="text-sm text-gray-700"><strong>{tc('language_label')}:</strong> {selectedMember.language}</p>
                                    )}
                                </div>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
                                >
                                    {tc('close')}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <VideoPlayer  videoUrl="https://www.youtube.com/shorts/qXALHNZN9SU" />

            
        </div>
    )
}

export default TeamPage
