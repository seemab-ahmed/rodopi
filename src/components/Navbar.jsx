'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect, useTransition } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'

// Inline Language Switcher Component
const InlineLanguageSwitcher = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    const currentLocale = pathname.split('/')[1] || 'en'
 
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false)
        }
        if (open) document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [open])

    const handleChange = (newLocale) => {
        if (newLocale === currentLocale) return setOpen(false)
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPath = segments.join('/');
        setOpen(false);
        startTransition(() => {
            router.push(newPath);
        })
    }

    const languages = [
        { code: 'en', label: 'EN', flag: '🇬🇧' },
        { code: 'de', label: 'DE', flag: '🇩🇪' },
    ]

    return (
        <div ref={ref} className=" sticky top-0 z-50">
            <button
                className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 hover:text-primary transition-colors rounded"
                onClick={() => setOpen(!open)}
                aria-label="Toggle language switcher"
            >
                <span className="text-sm">{languages.find((l) => l.code === currentLocale)?.flag}</span>
                <span className="text-xs font-medium">{languages.find((l) => l.code === currentLocale)?.label}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <div className="absolute top-full right-0 mt-1 w-20 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`flex items-center space-x-2 w-full px-3 py-1 text-sm text-left hover:bg-gray-50 transition-colors ${lang.code === currentLocale ? 'text-primary font-medium' : 'text-gray-700'
                                }`}
                            onClick={() => handleChange(lang.code)}
                            disabled={isPending}
                        >
                            <span className="text-sm">{lang.flag}</span>
                            <span className="text-xs">{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const dropdownRef = useRef(null)
    const t = useTranslations('navigation')
    const pathname = usePathname();
    const currentLocale = pathname.split('/')[1] || 'en';

    const menuItems = [
        { key: 'home', href: '#', hasDropdown: false },
        {
            key: 'industries',
            href: '#',
            hasDropdown: true,
            submenu: [
                { key: 'wind_energy', href: '#' },
                { key: 'solar_energy', href: '#' },
                { key: 'factory_support', href: '#' },
                { key: 'infrastructure_services', href: '#' },
                { key: 'rodopi_academy', href: '#' },
                { key: 'specialized_services', href: '#' }
            ]
        },
        {
            key: 'services',
            href: '#',
            hasDropdown: true,
            submenu: [
                { key: 'wind_maintenance', href: `/${currentLocale}/services/wind_maintenance` },
                { key: 'skilled_teams', href: `/${currentLocale}/services/skilled_teams` },
                { key: 'solar_projects', href: `/${currentLocale}/services/solar_projects` },
                { key: 'aviation_coating', href: `/${currentLocale}/services/aviation_coating` },
                { key: 'corrosion_protection', href: `/${currentLocale}/services/corrosion_protection` },
                { key: 'onsite_corrosion', href: `/${currentLocale}/services/onsite_corrosion` },
                { key: 'industry_training', href: `/${currentLocale}/services/industry_training` },
                { key: 'workwear_safety', href: `/${currentLocale}/services/workwear_safety` }
            ]
        },
        { key: 'about', href: '#', hasDropdown: false },
        { key: 'news', href: '#', hasDropdown: false },
        { key: 'contact', href: '#', hasDropdown: false }
    ]

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }

    return (
        <div className="w-full bg-white shadow-sm sticky top-0 z-50">
            {/* Top bar with contact info and social media - Hidden on mobile */}
            <div className="hidden sm:block bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-10 text-sm text-gray-600">
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/rodopi/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://www.youtube.com/@rodopi3290" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="https://www.instagram.com/rodopigmbh/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>

                        {/* Contact Info - Responsive */}
                        <div className="flex items-center space-x-3 lg:space-x-6">
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+49 (0)211-909 972-27</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>info@rodopi.de</span>
                            </div>
                            {/* Language Switcher */}
                            <div className="flex items-center">
                                <InlineLanguageSwitcher />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Contact Bar - Visible only on mobile */}
            <div className="sm:hidden bg-gray-50 border-b border-gray-200">
                <div className="px-4 py-2">
                    <div className="flex justify-between items-center text-xs text-gray-600">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+49 (0) 40 / 75 66 33 - 0</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Email</span>
                            </div>
                        </div>
                        {/* Mobile Language Switcher */}
                        <div className="flex items-center">
                            <InlineLanguageSwitcher />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16">
                    {/* Logo - Responsive sizing */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <Image src="/images/rodopi_logo.png" alt="Rodopi Logo" width={100} height={50} />
                        </div>
                    </div>

                    {/* Navigation Menu - Hidden on mobile */}
                    <nav className="hidden md:flex space-x-6 lg:space-x-8" ref={dropdownRef}>
                        {menuItems.map((item) => (
                            <div key={item.key} className="relative group">
                                <button
                                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${item.key === 'home'
                                        ? 'text-primary border-b-2 border-primary'
                                        : 'text-gray-700 hover:text-primary'
                                        }`}
                                    onClick={() => item.hasDropdown && handleDropdownToggle(item.key)}
                                >
                                    <span>{t(item.key)}</span>
                                    {item.hasDropdown && (
                                        <svg
                                            className={`w-4 h-4 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>

                                {/* Desktop Dropdown */}
                                {item.hasDropdown && (
                                    <div className={`absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${activeDropdown === item.key ? 'opacity-100 visible' : ''}`}>
                                        <div className="py-2">
                                            {item.submenu.map((subItem) => (
                                                <a
                                                    key={subItem.key}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:text-primary hover:bg-green-50 transition-colors"
                                                >
                                                    {t(`${item.key}_submenu.${subItem.key}`)}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-2 space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.key}>
                                <button
                                    className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors ${item.key === 'home'
                                        ? 'text-primary bg-green-50 border-l-4 border-primary'
                                        : 'text-gray-700 hover:text-primary hover:bg-green-50'
                                        }`}
                                    onClick={() => item.hasDropdown && handleDropdownToggle(item.key)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{t(item.key)}</span>
                                        {item.hasDropdown && (
                                            <svg
                                                className={`w-4 h-4 transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </div>
                                </button>

                                {/* Mobile Submenu */}
                                {item.hasDropdown && activeDropdown === item.key && (
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.submenu.map((subItem) => (
                                            <a
                                                key={subItem.key}
                                                href={subItem.href}
                                                className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-green-50 transition-colors"
                                            >
                                                {t(`${item.key}_submenu.${subItem.key}`)}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
