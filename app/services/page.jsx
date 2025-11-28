import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProcessSteps from '@/components/ProcessSteps';
import { SERVICES, PROCESS_STEPS } from '@/lib/constants';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Our Services',
    description: 'Comprehensive visa services including student visas, immigration visas, and tourist visas with expert guidance and 98% success rate.',
};

export default function ServicesPage() {
    return (
        <>
            <Hero
                title="Comprehensive Visa Services"
                subtitle="Expert guidance for all your visa needs - from student visas to permanent immigration"
                primaryCTA={{ text: 'Book Consultation', href: '/contact' }}
            />

            {/* Services Overview */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Our Visa Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tailored solutions for every visa type, backed by expertise and proven success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICES.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service Sections */}
            {SERVICES.map((service, index) => (
                <section
                    key={service.id}
                    id={service.id}
                    className={`section-padding ${index % 2 === 0 ? 'bg-gradient-to-br from-gray-50 to-white' : 'bg-white'}`}
                >
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                {/* Content */}
                                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        {service.shortDesc}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex gap-4 mb-8">
                                        <div className="px-4 py-2 rounded-lg bg-green-100 text-green-700 font-semibold">
                                            {service.successRate}% Success Rate
                                        </div>
                                        <div className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold">
                                            {service.processTime}
                                        </div>
                                    </div>

                                    {/* Countries */}
                                    <div className="mb-8">
                                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-4">
                                            Countries We Cover
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {service.countries.map((country) => (
                                                <span
                                                    key={country}
                                                    className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                                                >
                                                    {country}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                                    <div className="bg-white rounded-2xl shadow-lg p-8">
                                        <h3 className="font-heading font-bold text-xl text-gray-900 mb-6">
                                            What We Offer
                                        </h3>
                                        <ul className="space-y-4">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-8 pt-8 border-t border-gray-200">
                                            <Link
                                                href="/contact"
                                                className="btn btn-primary w-full justify-center"
                                            >
                                                Get Started
                                                <ArrowRight size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Process Steps */}
            <ProcessSteps steps={PROCESS_STEPS} />

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-primary-dark to-primary text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Ready to Begin Your Visa Application?
                        </h2>
                        <p className="text-lg text-gray-100 mb-8">
                            Our expert consultants are ready to guide you through every step of the process
                        </p>
                        <Link href="/contact" className="btn bg-secondary hover:bg-secondary-dark btn-large">
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
