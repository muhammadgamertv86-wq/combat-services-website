import { z } from 'zod';

// Contact Form Validation Schema
export const contactFormSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),

    email: z.string()
        .email('Please enter a valid email address')
        .min(5, 'Email is required')
        .max(100, 'Email must be less than 100 characters'),

    phone: z.string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(20, 'Phone number must be less than 20 characters')
        .regex(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number'),

    visaType: z.string()
        .min(1, 'Please select a visa type'),

    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be less than 1000 characters')
});

// Newsletter Subscription Schema
export const newsletterSchema = z.object({
    email: z.string()
        .email('Please enter a valid email address')
        .min(5, 'Email is required')
});

// Consultation Booking Schema
export const consultationSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters'),

    email: z.string()
        .email('Please enter a valid email address'),

    phone: z.string()
        .min(10, 'Phone number is required'),

    preferredDate: z.string()
        .min(1, 'Please select a preferred date'),

    preferredTime: z.string()
        .min(1, 'Please select a preferred time'),

    serviceType: z.string()
        .min(1, 'Please select a service type')
});
