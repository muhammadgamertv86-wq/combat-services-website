import Hero from '@/components/Hero';
import StatsCounter from '@/components/StatsCounter';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ProcessSteps from '@/components/ProcessSteps';
import ContactForm from '@/components/ContactForm';
import Marquee from '@/components/Marquee';
import { SERVICES, TESTIMONIALS, PROCESS_STEPS, WHY_CHOOSE_US, BUSINESS_INFO } from '@/lib/constants';
import { TrendingUp, Award, Users, Heart, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const iconMap = {
    TrendingUp,
    Award,
    Users,
    Heart,
    Shield,
    Zap
};

export const metadata = {
    title: 'Home',
    description: `${BUSINESS_INFO.name} - Leading visa consultancy in Rawalpindi with ${BUSINESS_INFO.stats.successRate}% success rate. Expert guidance for student visas, immigration visas, and tourist visas.`,
};

export default function HomePage() {
    return (
        <>
            {/* Hero Section */}
            <Hero
                title="Your Trusted Partner for Visa Success"
                subtitle="Expert visa consultancy services in Rawalpindi with a 98% success rate. We help students, families, and professionals achieve their international dreams."
                primaryCTA={{ text: 'Book Free Consultation', href: '/contact' }}
                secondaryCTA={{ text: 'Explore Services', href: '/services' }}
            />

            {/* Stats Counter */}
            <StatsCounter />

            {/* Scrolling Marquee */}
            <Marquee />

            {/* Services Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Our Visa Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive visa solutions tailored to your needs, backed by expertise and proven results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                            Why Choose Combat International?
                        </h2>
                        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                            We stand out from the competition with our commitment to excellence and client success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_US.map((item, index) => {
                            const Icon = iconMap[item.icon];
                            return (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all hover:-translate-y-2"
                                >
                                    <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                                        <Icon size={28} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                                    <p className="text-gray-100">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <ProcessSteps steps={PROCESS_STEPS} />

            {/* Testimonials Section */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Success Stories
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Hear from our satisfied clients who achieved their visa goals with our expert guidance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/success-stories" className="btn btn-primary btn-large">
                            View All Success Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-secondary-dark via-secondary to-secondary-light text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Ready to Start Your Visa Journey?
                        </h2>
                        <p className="text-lg text-gray-100 mb-8">
                            Book a free consultation with our expert visa consultants and take the first step towards your international dreams
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn bg-white text-secondary hover:bg-gray-100 btn-large">
                                Book Free Consultation
                            </Link>
                            <Link href="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary btn-large">
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Have questions about our visa services? Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                                        <p className="text-gray-600">{BUSINESS_INFO.contact.address.full}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                                        <p className="text-gray-600">{BUSINESS_INFO.contact.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white flex-shrink-0">
                                        ✉️
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-600">{BUSINESS_INFO.contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}
