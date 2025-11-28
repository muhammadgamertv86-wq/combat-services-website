'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

function FAQItem({ question, answer, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: index * 0.05 }}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
            >
                <span className="font-semibold text-gray-900 pr-4">{question}</span>
                <ChevronDown
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    size={20}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed bg-gray-50">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQAccordion({ faqs, category }) {
    const filteredFAQs = category
        ? faqs.filter(faq => faq.category === category)
        : faqs;

    return (
        <div className="space-y-3">
            {filteredFAQs.map((faqGroup, groupIndex) => (
                <div key={faqGroup.category}>
                    {!category && (
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 mt-8 first:mt-0">
                            {faqGroup.category}
                        </h3>
                    )}
                    <div className="space-y-3">
                        {faqGroup.questions.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.q}
                                answer={faq.a}
                                index={groupIndex * 10 + index}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
