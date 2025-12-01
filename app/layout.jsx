import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BUSINESS_INFO } from '@/lib/constants';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap'
});

export const metadata = {
    title: {
        default: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`,
        template: `%s | ${BUSINESS_INFO.name}`
    },
    description: BUSINESS_INFO.description,
    keywords: [
        'visa consultancy',
        'student visa',
        'immigration visa',
        'tourist visa',
        'visa services Pakistan',
        'Rawalpindi visa consultant',
        'study abroad',
        'immigration services',
        'visa application help'
    ],
    authors: [{ name: BUSINESS_INFO.name }],
    creator: BUSINESS_INFO.name,
    publisher: BUSINESS_INFO.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://combatservices.pk',
        siteName: BUSINESS_INFO.name,
        title: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`,
        description: BUSINESS_INFO.description,
    },
    twitter: {
        card: 'summary_large_image',
        title: `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`,
        description: BUSINESS_INFO.description,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

import AuraCursor from '@/components/AuraCursor';

import ScrollProgress from '@/components/ScrollProgress';

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
            <body className="bg-background text-text antialiased selection:bg-gold-500/30 selection:text-gold-200" suppressHydrationWarning>
                <ScrollProgress />
                <AuraCursor />
                <Navigation />
                <main className="relative z-10 min-h-screen flex flex-col">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
