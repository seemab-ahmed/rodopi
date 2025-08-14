import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Company Info Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">

                                    <Image src="https://www.rodopi.de/wp-content/uploads/2024/02/rodopi-logo-r-23.svg" alt="Rodopi Logo" width={32} height={32} />

                                </div>
                                <div>
                                    <div className="text-xl font-bold text-white">Rodopi</div>
                                    <div className="text-xs text-gray-400 uppercase tracking-wide">Rodopi Group</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 inline-block">
                                Real People | Real Work
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            Your general contractor for complex issues and demanding engineering services.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-300">Tel.: +49 (0)211-909 972-27</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-300">Mail: info@rodopi.de</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://www.linkedin.com/company/rodopi/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@rodopi3290" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/rodopigmbh/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white">MENU</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Industries</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">References</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">career</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white">LEGAL</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">imprint</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-primary transition-colors text-sm">Data protection</a></li>
                        </ul>
                    </div>

                    {/* Whistleblower Section */}
                    {/* <div className="lg:col-span-1"> */}
                    {/* <h3 className="text-lg font-semibold mb-6 text-white">WHISTLEBLOWER PROTECTION</h3> */}
                    {/* <p className="text-gray-300 text-sm mb-4">
                            Want to share a tip?<br />
                            Simply scan the QR code.
                        </p> */}

                    {/* QR Code */}
                    {/* <div className="w-24 h-24 bg-white p-2 rounded"> */}
                    {/* <div className="w-full h-full bg-black relative"> */}
                    {/* QR Code Pattern - Simplified representation */}
                    {/* <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
                                    {Array.from({ length: 64 }, (_, i) => (
                                        <div
                                            key={i}
                                            className={`${
                                                // Create a pattern that looks like a QR code
                                                [0, 1, 2, 6, 7, 8, 14, 16, 22, 24, 30, 32, 38, 40, 46, 48, 54, 56, 57, 58, 62, 63].includes(i)
                                                    ? 'bg-black'
                                                    : Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                                                }`}
                                        />
                                    ))}
                                </div> */}
                    {/* </div> */}
                {/* </div> */}
                    {/* </div> */}
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="text-center text-gray-400 text-sm">
                        © 2025 Rodopi Group . All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
