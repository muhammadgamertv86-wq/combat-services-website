'use client';

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, NAVIGATION_LINKS } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#020617] border-t border-slate-800 pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-700 group-hover:border-gold-500/50 transition-colors">
                                    <img src="/images/logo.png" alt="Combat Services" className="w-full h-full object-cover" />
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-white">
                                    COMBAT <span className="text-gold-500">SERVICES</span>
                                </h2>
                            </div>
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Leading visa consultancy specializing in student visas, immigration, and tourist visas with a 98% success rate.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-black transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-slate-400 hover:text-gold-500 transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {['Student Visas', 'Immigration Visas', 'Visit/Tourist Visas', 'Work Permits', 'Business Visas'].map((service) => (
                                <li key={service}>
                                    <Link href="/services" className="text-slate-400 hover:text-gold-500 transition-colors">
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="shrink-0 text-gold-500 mt-1" size={18} />
                                <span>{BUSINESS_INFO.contact.address.full}</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="shrink-0 text-gold-500" size={18} />
                                <a href={`tel:${BUSINESS_INFO.contact.phone}`} className="hover:text-white transition-colors">
                                    {BUSINESS_INFO.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="shrink-0 text-gold-500" size={18} />
                                <a href={`mailto:${BUSINESS_INFO.contact.email}`} className="hover:text-white transition-colors">
                                    {BUSINESS_INFO.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {currentYear} Combat Services. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
