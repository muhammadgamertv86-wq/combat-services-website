import Hero from '@/components/Hero';
import FAQAccordion from '@/components/FAQAccordion';
import { FAQS } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about visa applications, processing times, requirements, and our services.',
};

export default function FAQPage() {
    return (
        <>
            <Hero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our visa services and the application process"
                primaryCTA={{ text: 'Contact Us', href: '/contact' }}
            />

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                                Common Questions
                            </h2>
                            <p className="text-lg text-gray-600">
                                Everything you need to know about our visa services
                            </p>
                        </div>

                        <FAQAccordion faqs={FAQS} />
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                        <div className="text-5xl mb-6">❓</div>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Can't find the answer you're looking for? Our expert consultants are here to help. Book a free consultation or send us a message.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-large">
                                Book Free Consultation
                            </Link>
                            <Link href="/contact#contact-form" className="btn btn-secondary btn-large">
                                Send a Message
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                            Explore More
                        </h2>
                        <p className="text-gray-600">Learn more about our services and success stories</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Link
                            href="/services"
                            className="card text-center group hover:border-primary border-2 border-transparent transition-all"
                        >
                            <div className="text-5xl mb-4">📋</div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                Our Services
                            </h3>
                            <p className="text-gray-600">
                                Explore our comprehensive visa services
                            </p>
                        </Link>

                        <Link
                            href="/success-stories"
                            className="card text-center group hover:border-primary border-2 border-transparent transition-all"
                        >
                            <div className="text-5xl mb-4">⭐</div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                Success Stories
                            </h3>
                            <p className="text-gray-600">
                                Read testimonials from satisfied clients
                            </p>
                        </Link>

                        <Link
                            href="/about"
                            className="card text-center group hover:border-primary border-2 border-transparent transition-all"
                        >
                            <div className="text-5xl mb-4">🏢</div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                About Us
                            </h3>
                            <p className="text-gray-600">
                                Learn about our company and values
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
