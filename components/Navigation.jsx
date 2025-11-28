'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, BUSINESS_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticLogo from './MagneticLogo';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/50 py-2'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container-custom">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <MagneticLogo />
                        <div className="flex flex-col">
                            <h1 className="font-heading font-bold text-xl tracking-wide text-white group-hover:text-gold-400 transition-colors">
                                COMBAT SERVICES
                            </h1>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-300 transition-colors">
                                Premium Visa Consultancy
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAVIGATION_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium tracking-wide transition-all hover:text-gold-400 ${pathname === link.href ? 'text-gold-400' : 'text-slate-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="btn btn-primary px-6 py-2.5 text-sm rounded-full"
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#020617] border-t border-slate-800"
                    >
                        <div className="container-custom py-8 flex flex-col gap-4">
                            {NAVIGATION_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium py-2 ${pathname === link.href ? 'text-gold-400' : 'text-slate-300'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn btn-primary w-full mt-4"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
