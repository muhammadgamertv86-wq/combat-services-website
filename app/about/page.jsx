import Hero from '@/components/Hero';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock, Award, Users, Globe, Target } from 'lucide-react';

export const metadata = {
    title: 'About Us',
    description: `Learn about ${BUSINESS_INFO.name} - Your trusted visa consultancy partner in Rawalpindi with ${BUSINESS_INFO.stats.yearsExperience}+ years of experience and ${BUSINESS_INFO.stats.successRate}% success rate.`,
};

export default function AboutPage() {
    return (
        <>
            <Hero
                title="About Combat Services"
                subtitle="Your trusted partner for visa success with over 15 years of experience helping thousands achieve their international dreams"
                primaryCTA={{ text: 'Contact Us', href: '/contact' }}
            />

            {/* Company Story */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Founded in Rawalpindi, Pakistan, Combat Services has been a beacon of hope for thousands of individuals and families seeking to pursue their dreams abroad. With over 15 years of dedicated service in the visa consultancy industry, we have built a reputation for excellence, integrity, and unwavering commitment to our clients' success.
                                </p>
                                <p>
                                    Our journey began with a simple mission: to make the complex visa application process simple, transparent, and successful for everyone. Today, with over 20,000 visas approved and a 98% success rate, we stand as one of Pakistan's most trusted visa consultancy firms.
                                </p>
                                <p>
                                    What sets us apart is our personalized approach. We understand that every client's situation is unique, and we tailor our services to meet individual needs. Our team of experienced consultants stays updated with the latest immigration policies and requirements across 50+ countries, ensuring you receive accurate and timely guidance.
                                </p>
                                <p>
                                    Whether you're a student aspiring to study at a world-class university, a professional seeking better opportunities abroad, or a family planning to reunite with loved ones, Combat Services is here to turn your international dreams into reality.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-2xl">
                                <Award size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.successRate}%</div>
                                <div className="text-sm">Success Rate</div>
                            </div>
                            <div className="bg-gradient-to-br from-secondary-dark to-secondary text-white p-8 rounded-2xl">
                                <Users size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.totalVisas.toLocaleString()}+</div>
                                <div className="text-sm">Visas Approved</div>
                            </div>
                            <div className="bg-gradient-to-br from-trust to-blue-400 text-white p-8 rounded-2xl">
                                <Globe size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.countriesCovered}+</div>
                                <div className="text-sm">Countries</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-600 to-green-400 text-white p-8 rounded-2xl">
                                <Target size={40} className="mb-4" />
                                <div className="text-4xl font-bold mb-2">{BUSINESS_INFO.stats.yearsExperience}+</div>
                                <div className="text-sm">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white text-3xl mb-6">
                                🎯
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To provide exceptional visa consultancy services that empower individuals and families to achieve their international aspirations. We are committed to delivering personalized, transparent, and ethical guidance that ensures the highest success rates in the industry.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center text-white text-3xl mb-6">
                                👁️
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be Pakistan's most trusted and respected visa consultancy firm, recognized for our unwavering commitment to client success, ethical practices, and contribution to connecting people with global opportunities. We envision a future where borders are bridges, not barriers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Integrity',
                                description: 'We operate with complete honesty and transparency, providing accurate information and realistic expectations.',
                                emoji: '🤝'
                            },
                            {
                                title: 'Excellence',
                                description: 'We strive for perfection in every application, ensuring meticulous attention to detail and quality.',
                                emoji: '⭐'
                            },
                            {
                                title: 'Client-Centric',
                                description: 'Your success is our success. We put your needs first and work tirelessly to achieve your goals.',
                                emoji: '❤️'
                            },
                            {
                                title: 'Expertise',
                                description: 'Our team stays updated with the latest immigration policies and requirements worldwide.',
                                emoji: '📚'
                            },
                            {
                                title: 'Reliability',
                                description: 'You can count on us for consistent, dependable service throughout your visa journey.',
                                emoji: '✅'
                            },
                            {
                                title: 'Innovation',
                                description: 'We continuously improve our processes and services to provide the best experience.',
                                emoji: '💡'
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center p-6">
                                <div className="text-5xl mb-4">{value.emoji}</div>
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office Location */}
            <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                                Visit Our Office
                            </h2>
                            <p className="text-lg text-gray-100">
                                Located in the heart of Rawalpindi, we're here to serve you
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <h3 className="text-xl font-heading font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Address</h4>
                                            <p className="text-gray-100">{BUSINESS_INFO.contact.address.full}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Phone className="text-secondary flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Phone</h4>
                                            <p className="text-gray-100">{BUSINESS_INFO.contact.phone}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <Mail className="text-secondary flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h4 className="font-semibold mb-1">Email</h4>
                                            <p className="text-gray-100">{BUSINESS_INFO.contact.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <h3 className="text-xl font-heading font-bold mb-6">Business Hours</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-4">
                                        <Clock className="text-secondary flex-shrink-0" size={24} />
                                        <div>
                                            <p className="text-gray-100">{BUSINESS_INFO.businessHours.weekdays}</p>
                                            <p className="text-gray-100">{BUSINESS_INFO.businessHours.saturday}</p>
                                            <p className="text-gray-100">{BUSINESS_INFO.businessHours.sunday}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
