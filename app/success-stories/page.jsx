import Hero from '@/components/Hero';
import TestimonialCard from '@/components/TestimonialCard';
import { TESTIMONIALS, BUSINESS_INFO } from '@/lib/constants';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

export const metadata = {
    title: 'Success Stories',
    description: `Read success stories from our satisfied clients. ${BUSINESS_INFO.stats.totalVisas}+ visas approved with ${BUSINESS_INFO.stats.successRate}% success rate.`,
};

export default function SuccessStoriesPage() {
    return (
        <>
            <Hero
                title="Success Stories"
                subtitle="Real stories from real clients who achieved their visa goals with Combat Services"
                primaryCTA={{ text: 'Share Your Story', href: '/contact' }}
            />

            {/* Stats Section */}
            <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <TrendingUp size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.successRate}%</div>
                            <div className="text-sm text-gray-200">Success Rate</div>
                        </div>
                        <div>
                            <Award size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.totalVisas.toLocaleString()}+</div>
                            <div className="text-sm text-gray-200">Visas Approved</div>
                        </div>
                        <div>
                            <Users size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">15,000+</div>
                            <div className="text-sm text-gray-200">Happy Clients</div>
                        </div>
                        <div>
                            <Globe size={40} className="mx-auto mb-4 text-secondary" />
                            <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.countriesCovered}+</div>
                            <div className="text-sm text-gray-200">Countries</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Testimonials */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Hear directly from clients who trusted us with their visa applications
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Success by Category */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Success Across All Visa Types
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Our expertise spans all visa categories
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Student Visas',
                                successRate: 99,
                                count: '8,000+',
                                description: 'Students successfully placed in top universities worldwide',
                                countries: ['USA', 'UK', 'Canada', 'Australia']
                            },
                            {
                                title: 'Immigration Visas',
                                successRate: 97,
                                count: '7,500+',
                                description: 'Families and professionals who achieved permanent residence',
                                countries: ['Canada', 'Australia', 'New Zealand']
                            },
                            {
                                title: 'Visit/Tourist Visas',
                                successRate: 98,
                                count: '4,500+',
                                description: 'Travelers who explored the world with our assistance',
                                countries: ['Schengen', 'UK', 'USA', 'Dubai']
                            }
                        ].map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2">
                                <div className="text-center mb-6">
                                    <div className="text-5xl font-bold gradient-text mb-2">{category.successRate}%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>

                                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 text-center">
                                    {category.title}
                                </h3>

                                <div className="text-center mb-4">
                                    <div className="text-3xl font-bold text-secondary mb-1">{category.count}</div>
                                    <p className="text-sm text-gray-600">{category.description}</p>
                                </div>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {category.countries.map((country) => (
                                        <span
                                            key={country}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                                        >
                                            {country}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-r from-secondary-dark to-secondary text-white">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                            Ready to Write Your Success Story?
                        </h2>
                        <p className="text-lg text-gray-100 mb-8">
                            Join thousands of satisfied clients who achieved their visa goals with Combat Services
                        </p>
                        <a href="/contact" className="btn bg-white text-secondary hover:bg-gray-100 btn-large">
                            Start Your Journey Today
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
