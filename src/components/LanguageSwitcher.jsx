"use client"
import { usePathname, useRouter } from 'next/navigation'
import { useTransition, useState, useRef, useEffect } from 'react'

const languages = [
    {
        code: 'en',
        label: 'English',
        flag: <span className="text-xl">🇬🇧</span>,
    },
    {
        code: 'de',
        label: 'Deutsch',
        flag: <span className="text-xl"> 🇩🇪</span>,
    },
]

const LanguageSwitcher = () => {
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
        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')
        setOpen(false)
        startTransition(() => {
            router.push(newPath)
        })
    }

    return (
        <div
            ref={ref}
            className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-2 sm:gap-3 md:gap-4"
        >
            {/* Floating Button */}
            <button
                className="flex items-center justify-center gap-2 w-16 h-16 rounded-full shadow-xl bg-white text-gray-800 hover:bg-primary hover:text-white transition-all duration-200 border border-gray-300 focus:outline-none"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle language switcher"
            >
                {languages.find((l) => l.code === currentLocale)?.flag}
            </button>

            {/* Dropdown */}
            {open && (
                <div className="w-44 rounded-xl shadow-xl bg-white text-gray-800 border border-gray-200 py-2 backdrop-blur-sm transition-all duration-200 animate-[fade-in-up_0.2s_ease-out]">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-gray-100 transition-all duration-150 ${lang.code === currentLocale ? 'font-semibold text-primary' : ''}`}
                            onClick={() => handleChange(lang.code)}
                            disabled={isPending}
                        >
                            {lang.flag}
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LanguageSwitcher