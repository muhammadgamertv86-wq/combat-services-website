import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { BUSINESS_INFO } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
    title: 'Contact Us',
    description: `Get in touch with ${BUSINESS_INFO.name} for visa consultancy services. Visit our office in Rawalpindi or contact us via phone, email, or WhatsApp.`,
};

export default function ContactPage() {
    return (
        <>
            <Hero
                title="Get in Touch"
                subtitle="Ready to start your visa journey? Contact our expert consultants today for a free consultation"
                primaryCTA={{ text: 'Call Us Now', href: `tel:${BUSINESS_INFO.contact.phone}` }}
            />

            {/* Contact Information Cards */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {/* Office Address */}
                        <div className="card text-center hover:shadow-glow-blue">
                            <MapPin className="mx-auto mb-4 text-primary" size={40} />
                            <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-sm text-gray-600">{BUSINESS_INFO.contact.address.full}</p>
                        </div>

                        {/* Phone */}
                        <div className="card text-center hover:shadow-glow-blue">
                            <Phone className="mx-auto mb-4 text-primary" size={40} />
                            <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Call Us</h3>
                            <a
                                href={`tel:${BUSINESS_INFO.contact.phone}`}
                                className="text-sm text-primary hover:text-secondary transition-colors font-medium"
                            >
                                {BUSINESS_INFO.contact.phone}
                            </a>
                        </div>

                        {/* Email */}
                        <div className="card text-center hover:shadow-glow-blue">
                            <Mail className="mx-auto mb-4 text-primary" size={40} />
                            <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">Email Us</h3>
                            <a
                                href={`mailto:${BUSINESS_INFO.contact.email}`}
                                className="text-sm text-primary hover:text-secondary transition-colors font-medium break-all"
                            >
                                {BUSINESS_INFO.contact.email}
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="card text-center hover:shadow-glow-blue">
                            <MessageCircle className="mx-auto mb-4 text-primary" size={40} />
                            <h3 className="font-heading font-bold text-lg text-gray-900 mb-2">WhatsApp</h3>
                            <a
                                href={`https://wa.me/${BUSINESS_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:text-secondary transition-colors font-medium"
                            >
                                Chat with us
                            </a>
                        </div>
                    </div>

                    {/* Main Contact Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <div id="contact-form">
                            <ContactForm />
                        </div>

                        {/* Additional Information */}
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                                Why Contact Us?
                            </h2>
                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0 text-xl">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Free Initial Consultation</h4>
                                        <p className="text-gray-600">
                                            Get expert advice on your visa options with no obligation
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0 text-xl">
                                        ⚡
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Quick Response Time</h4>
                                        <p className="text-gray-600">
                                            We respond to all inquiries within 24 hours
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0 text-xl">
                                        🎯
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Personalized Guidance</h4>
                                        <p className="text-gray-600">
                                            Tailored solutions for your unique visa requirements
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0 text-xl">
                                        🏆
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">98% Success Rate</h4>
                                        <p className="text-gray-600">
                                            Proven track record of successful visa applications
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <Clock className="text-primary" size={24} />
                                    <h3 className="font-heading font-bold text-lg text-gray-900">Business Hours</h3>
                                </div>
                                <div className="space-y-2 text-gray-600">
                                    <p>{BUSINESS_INFO.businessHours.weekdays}</p>
                                    <p>{BUSINESS_INFO.businessHours.saturday}</p>
                                    <p className="font-semibold">{BUSINESS_INFO.businessHours.sunday}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                            Find Us on the Map
                        </h2>
                        <p className="text-gray-600">
                            Located in the heart of Rawalpindi, easily accessible from all major areas
                        </p>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
                        <div className="text-center text-white p-8">
                            <MapPin size={64} className="mx-auto mb-4 text-secondary" />
                            <h3 className="text-2xl font-heading font-bold mb-2">
                                {BUSINESS_INFO.name}
                            </h3>
                            <p className="text-gray-200 max-w-md">
                                {BUSINESS_INFO.contact.address.full}
                            </p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.contact.address.full)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-secondary hover:bg-secondary-dark mt-6 inline-flex"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
