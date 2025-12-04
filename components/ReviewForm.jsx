'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, User, Mail, MapPin } from 'lucide-react';

export default function ReviewForm() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        visaType: '',
        review: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // Reset form after 3 seconds
            setTimeout(() => {
                setFormData({ name: '', email: '', location: '', visaType: '', review: '' });
                setRating(0);
                setSubmitSuccess(false);
            }, 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 md:p-12"
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                        Share Your Experience
                    </h3>
                    <p className="text-slate-300 text-lg">
                        Help others by sharing your visa success story
                    </p>
                </div>

                {submitSuccess ? (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                        <p className="text-slate-300">Your review has been submitted successfully.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Star Rating */}
                        <div className="text-center">
                            <label className="block text-white font-semibold mb-3 text-lg">
                                Rate Your Experience
                            </label>
                            <div className="flex justify-center gap-2 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <motion.button
                                        key={star}
                                        type="button"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="focus:outline-none"
                                    >
                                        <Star
                                            size={40}
                                            className={`transition-all ${star <= (hoveredRating || rating)
                                                ? 'fill-gold-500 text-gold-500'
                                                : 'text-slate-600'
                                                }`}
                                        />
                                    </motion.button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-gold-500 font-semibold"
                                >
                                    {rating === 5 && "Excellent! ⭐"}
                                    {rating === 4 && "Great! 👍"}
                                    {rating === 3 && "Good 👌"}
                                    {rating === 2 && "Fair 😐"}
                                    {rating === 1 && "Poor 😞"}
                                </motion.p>
                            )}
                        </div>

                        {/* Name */}
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                <User className="inline w-4 h-4 mr-2" />
                                Your Name *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                <Mail className="inline w-4 h-4 mr-2" />
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                <MapPin className="inline w-4 h-4 mr-2" />
                                Your Location *
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
                                placeholder="e.g., Rawalpindi, Islamabad"
                            />
                        </div>

                        {/* Visa Type */}
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                Visa Type *
                            </label>
                            <select
                                name="visaType"
                                value={formData.visaType}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-500 transition-colors"
                            >
                                <option value="">Select visa type</option>
                                <option value="Student Visa - USA">Student Visa - USA</option>
                                <option value="Student Visa - UK">Student Visa - UK</option>
                                <option value="Student Visa - Canada">Student Visa - Canada</option>
                                <option value="Student Visa - Australia">Student Visa - Australia</option>
                                <option value="Immigration Visa - Canada">Immigration Visa - Canada</option>
                                <option value="Immigration Visa - Australia">Immigration Visa - Australia</option>
                                <option value="Visit Visa - Schengen">Visit Visa - Schengen</option>
                                <option value="Visit Visa - UK">Visit Visa - UK</option>
                                <option value="Visit Visa - USA">Visit Visa - USA</option>
                                <option value="Visit Visa - Dubai">Visit Visa - Dubai</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Review Text */}
                        <div>
                            <label className="block text-white font-semibold mb-2">
                                Your Review *
                            </label>
                            <textarea
                                name="review"
                                value={formData.review}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                placeholder="Share your experience with Combat International..."
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting || rating === 0}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 ${isSubmitting || rating === 0
                                ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-gold-500 to-gold-600 text-white hover:from-gold-600 hover:to-gold-700 shadow-lg hover:shadow-xl'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Submit Review
                                </>
                            )}
                        </motion.button>

                        {rating === 0 && (
                            <p className="text-center text-slate-400 text-sm">
                                Please select a star rating before submitting
                            </p>
                        )}
                    </form>
                )}
            </motion.div>
        </div>
    );
}
