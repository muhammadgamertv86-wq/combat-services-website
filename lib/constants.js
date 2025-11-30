// Business constants for Combat Services
export const BUSINESS_INFO = {
    name: 'Combat Services',
    tagline: 'Your Trusted Visa Consultancy Partner',
    description: 'Leading visa consultancy in Rawalpindi, Pakistan, specializing in student visas, immigration visas, and tourist visas with a 98% success rate.',

    contact: {
        phone: '+92-51-XXXXXXX',
        email: 'info@combatservices.pk',
        whatsapp: '+92-3XX-XXXXXXX',
        address: {
            street: 'House No. 12B, Shaheed Officers Colony',
            area: 'Sabzazar',
            city: 'Rawalpindi',
            country: 'Pakistan',
            full: 'House No. 12B, Shaheed Officers Colony, Sabzazar, Rawalpindi, Pakistan'
        }
    },

    stats: {
        successRate: 98,
        totalVisas: 10000,
        yearsExperience: 15,
        countriesCovered: 50
    },

    socialMedia: {
        facebook: 'https://facebook.com/combatservices',
        instagram: 'https://instagram.com/combatservices',
        linkedin: 'https://linkedin.com/company/combatservices',
        twitter: 'https://twitter.com/combatservices'
    },

    businessHours: {
        weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM',
        saturday: 'Saturday: 10:00 AM - 4:00 PM',
        sunday: 'Sunday: Closed'
    }
};

export const SERVICES = [
    {
        id: 'student-visa',
        title: 'Student Visas',
        shortDesc: 'Expert guidance for studying abroad in top universities worldwide',
        icon: 'GraduationCap',
        features: [
            'University selection assistance',
            'Application preparation',
            'Document verification',
            'Interview preparation',
            'Scholarship guidance',
            'Post-arrival support'
        ],
        countries: ['USA', 'UK', 'Canada', 'Australia', 'Germany', 'New Zealand'],
        processTime: '4-8 weeks',
        successRate: 99
    },
    {
        id: 'immigration-visa',
        title: 'Immigration Visas',
        shortDesc: 'Comprehensive immigration solutions for permanent residence and citizenship',
        icon: 'Plane',
        features: [
            'Skilled worker programs',
            'Family sponsorship',
            'Investment immigration',
            'Express entry assistance',
            'Points assessment',
            'Settlement support'
        ],
        countries: ['Canada', 'Australia', 'New Zealand', 'UK', 'USA'],
        processTime: '6-12 months',
        successRate: 97
    },
    {
        id: 'visit-visa',
        title: 'Visit/Tourist Visas',
        shortDesc: 'Fast and reliable tourist visa services for leisure and business travel',
        icon: 'Palmtree',
        features: [
            'Tourist visa processing',
            'Business visa assistance',
            'Family visit visas',
            'Document preparation',
            'Interview coaching',
            'Quick processing'
        ],
        countries: ['Schengen', 'UK', 'USA', 'Canada', 'Dubai', 'Malaysia'],
        processTime: '2-4 weeks',
        successRate: 98
    }
];

export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Ahmed Hassan',
        visaType: 'Student Visa - Canada',
        rating: 5,
        text: 'Combat Services made my dream of studying in Canada a reality. Their expert guidance throughout the application process was invaluable. Highly recommended!',
        location: 'Rawalpindi'
    },
    {
        id: 2,
        name: 'Fatima Khan',
        visaType: 'Immigration Visa - Australia',
        rating: 5,
        text: 'Professional, reliable, and trustworthy. The team handled our family immigration case with utmost care and we got approved in just 8 months!',
        location: 'Islamabad'
    },
    {
        id: 3,
        name: 'Usman Ali',
        visaType: 'Student Visa - UK',
        rating: 5,
        text: 'Excellent service! They helped me secure admission to my dream university and guided me through the entire visa process. Thank you Combat Services!',
        location: 'Lahore'
    },
    {
        id: 4,
        name: 'Sarah Ahmed',
        visaType: 'Visit Visa - Schengen',
        rating: 5,
        text: 'Quick and efficient service. Got my Schengen visa in just 2 weeks. The team was very responsive and helpful throughout.',
        location: 'Karachi'
    },
    {
        id: 5,
        name: 'Bilal Mahmood',
        visaType: 'Immigration Visa - Canada',
        rating: 5,
        text: 'Best visa consultancy in Pakistan! Their expertise in Canadian immigration is unmatched. Got my PR approved on first attempt.',
        location: 'Rawalpindi'
    },
    {
        id: 6,
        name: 'Ayesha Malik',
        visaType: 'Student Visa - USA',
        rating: 5,
        text: 'Combat Services helped me achieve my American dream. Their interview preparation was exceptional. Forever grateful!',
        location: 'Faisalabad'
    }
];

export const FAQS = [
    {
        category: 'General',
        questions: [
            {
                q: 'What makes Combat Services different from other visa consultancies?',
                a: 'We have a proven track record with a 98% success rate, over 10,000 visas approved, and 15 years of experience. Our personalized approach and expert team ensure the highest chances of approval.'
            },
            {
                q: 'How long does the visa process typically take?',
                a: 'Processing times vary by visa type and country. Tourist visas typically take 2-4 weeks, student visas 4-8 weeks, and immigration visas 6-12 months. We provide accurate timelines during consultation.'
            },
            {
                q: 'Do you offer a money-back guarantee?',
                a: 'We offer a refund policy for our service fees (not government fees) if your visa is rejected due to our error or negligence. Terms and conditions apply.'
            },
            {
                q: 'Can I track my application status?',
                a: 'Yes! We provide regular updates throughout the process and you can contact us anytime for status updates on your application.'
            }
        ]
    },
    {
        category: 'Student Visa',
        questions: [
            {
                q: 'What documents are required for a student visa?',
                a: 'Typically: valid passport, university acceptance letter, proof of funds, academic transcripts, language proficiency test scores (IELTS/TOEFL), and medical certificates. Requirements vary by country.'
            },
            {
                q: 'Can you help with university admissions?',
                a: 'Yes! We provide comprehensive university selection and admission assistance, including application preparation, document verification, and scholarship guidance.'
            },
            {
                q: 'What is the success rate for student visas?',
                a: 'Our student visa success rate is 99%, one of the highest in Pakistan. We ensure all documentation is perfect before submission.'
            }
        ]
    },
    {
        category: 'Immigration Visa',
        questions: [
            {
                q: 'Which countries do you handle immigration visas for?',
                a: 'We specialize in Canada, Australia, New Zealand, UK, and USA immigration programs, including skilled worker, family sponsorship, and investment immigration.'
            },
            {
                q: 'How do I know if I qualify for immigration?',
                a: 'We offer free initial assessments to evaluate your eligibility based on factors like education, work experience, language skills, and age. Book a consultation to find out.'
            },
            {
                q: 'What is the Express Entry program?',
                a: 'Express Entry is Canada\'s immigration system for skilled workers. We provide complete assistance with profile creation, documentation, and submission to maximize your CRS score.'
            }
        ]
    },
    {
        category: 'Visit/Tourist Visa',
        questions: [
            {
                q: 'How quickly can I get a tourist visa?',
                a: 'Most tourist visas are processed within 2-4 weeks. We also offer expedited services for urgent travel needs.'
            },
            {
                q: 'What is the difference between tourist and business visas?',
                a: 'Tourist visas are for leisure travel, while business visas are for attending meetings, conferences, or business activities. We handle both types.'
            },
            {
                q: 'Can you help with visa extensions?',
                a: 'Yes, we assist with visa extensions and renewals for various countries. Contact us with your specific requirements.'
            }
        ]
    },
    {
        category: 'Process & Fees',
        questions: [
            {
                q: 'What are your consultation fees?',
                a: 'Initial consultations are FREE. Our service fees vary based on visa type and complexity. We provide transparent pricing with no hidden charges.'
            },
            {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, bank transfers, and online payments. Payment plans are available for immigration cases.'
            },
            {
                q: 'Do I need to visit your office in person?',
                a: 'While we prefer in-person consultations for better service, we also offer online consultations via video call for clients outside Rawalpindi.'
            }
        ]
    }
];

export const PROCESS_STEPS = [
    {
        step: 1,
        title: 'Free Consultation',
        description: 'Book a free consultation to discuss your visa requirements and eligibility assessment',
        icon: 'MessageSquare'
    },
    {
        step: 2,
        title: 'Documentation',
        description: 'We guide you through document preparation and verification to ensure everything is perfect',
        icon: 'FileText'
    },
    {
        step: 3,
        title: 'Application Submission',
        description: 'We prepare and submit your application with complete accuracy and attention to detail',
        icon: 'Send'
    },
    {
        step: 4,
        title: 'Interview Preparation',
        description: 'Comprehensive interview coaching and preparation to boost your confidence',
        icon: 'Users'
    },
    {
        step: 5,
        title: 'Visa Approval',
        description: 'Track your application status and receive your visa approval with our support',
        icon: 'CheckCircle'
    },
    {
        step: 6,
        title: 'Post-Visa Support',
        description: 'Continued assistance with travel arrangements and settlement guidance',
        icon: 'Heart'
    }
];

export const WHY_CHOOSE_US = [
    {
        title: '98% Success Rate',
        description: 'Industry-leading approval rate backed by expertise and experience',
        icon: 'TrendingUp'
    },
    {
        title: '10,000+ Visas Approved',
        description: 'Trusted by thousands of clients for their visa needs',
        icon: 'Award'
    },
    {
        title: 'Expert Team',
        description: '15+ years of combined experience in immigration and visa services',
        icon: 'Users'
    },
    {
        title: 'Personalized Service',
        description: 'Tailored solutions for each client\'s unique requirements',
        icon: 'Heart'
    },
    {
        title: 'Transparent Process',
        description: 'Clear communication and honest guidance at every step',
        icon: 'Shield'
    },
    {
        title: 'Fast Processing',
        description: 'Efficient handling to minimize waiting times',
        icon: 'Zap'
    }
];

export const NAVIGATION_LINKS = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Countries', href: '/countries' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
];
