'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/lib/validations';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form data:', data);
            setSubmitStatus('success');
            reset();

            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-xl p-8"
        >
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Send us a Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="form-label">
                        Full Name *
                    </label>
                    <input
                        {...register('name')}
                        type="text"
                        id="name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="Enter your full name"
                    />
                    {errors.name && (
                        <p className="form-error">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="form-label">
                        Email Address *
                    </label>
                    <input
                        {...register('email')}
                        type="email"
                        id="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="your.email@example.com"
                    />
                    {errors.email && (
                        <p className="form-error">{errors.email.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="form-label">
                        Phone Number *
                    </label>
                    <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+92-333-5101981"
                    />
                    {errors.phone && (
                        <p className="form-error">{errors.phone.message}</p>
                    )}
                </div>

                {/* Visa Type */}
                <div>
                    <label htmlFor="visaType" className="form-label">
                        Visa Type *
                    </label>
                    <select
                        {...register('visaType')}
                        id="visaType"
                        className={`form-input ${errors.visaType ? 'error' : ''}`}
                    >
                        <option value="">Select visa type</option>
                        <option value="student">Student Visa</option>
                        <option value="immigration">Immigration Visa</option>
                        <option value="visit">Visit/Tourist Visa</option>
                        <option value="business">Business Visa</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.visaType && (
                        <p className="form-error">{errors.visaType.message}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="form-label">
                        Message *
                    </label>
                    <textarea
                        {...register('message')}
                        id="message"
                        rows={5}
                        className={`form-input resize-none ${errors.message ? 'error' : ''}`}
                        placeholder="Tell us about your visa requirements..."
                    />
                    {errors.message && (
                        <p className="form-error">{errors.message.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full btn-large disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <span className="animate-pulse">Sending...</span>
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send size={20} />
                        </>
                    )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                    >
                        <CheckCircle size={20} />
                        <p className="font-medium">Message sent successfully! We'll get back to you soon.</p>
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                    >
                        <AlertCircle size={20} />
                        <p className="font-medium">Failed to send message. Please try again.</p>
                    </motion.div>
                )}
            </form>
        </motion.div>
    );
}
