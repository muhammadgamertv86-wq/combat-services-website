'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function TestimonialCard({ testimonial, index = 0 }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="card h-full flex flex-col"
        >
            {/* Quote Icon */}
            <div className="mb-4">
                <Quote className="text-secondary opacity-20" size={48} />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                "{testimonial.text}"
            </p>

            {/* Client Info */}
            <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.visaType}</p>
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
