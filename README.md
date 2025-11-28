# Combat Services Visa Consultancy Website

A complete, production-ready visa consultancy website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **6 Complete Pages**: Home, About, Services, Success Stories, FAQ, Contact
- **Premium Design**: Deep blue and gold color scheme with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive metadata and semantic HTML
- **Form Validation**: React Hook Form with Zod schema validation
- **Smooth Animations**: Framer Motion animations throughout
- **98% Success Rate**: Showcasing Combat Services' proven track record

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to project directory
cd combat-services-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
combat-services-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── faq/              # FAQ page
│   ├── services/         # Services page
│   ├── success-stories/  # Success Stories page
│   ├── layout.jsx        # Root layout
│   ├── page.jsx          # Home page
│   └── globals.css       # Global styles
├── components/            # Reusable React components
│   ├── Navigation.jsx    # Header navigation
│   ├── Footer.jsx       # Footer component
│   ├── Hero.jsx         # Hero section
│   ├── StatsCounter.jsx # Animated statistics
│   ├── ServiceCard.jsx  # Service cards
│   ├── TestimonialCard.jsx # Client testimonials
│   ├── ProcessSteps.jsx # Process timeline
│   ├── ContactForm.jsx  # Contact form
│   └── FAQAccordion.jsx # FAQ accordion
├── lib/                  # Utility functions and data
│   ├── constants.js     # Business data and content
│   ├── validations.js   # Form validation schemas
│   └── animations.js    # Animation variants
└── public/              # Static assets
```

## 🎨 Design System

### Colors

- **Primary**: Deep Blue (#1e3a8a) - Trust and professionalism
- **Secondary**: Gold (#d97706) - Premium and success
- **Success**: Green (#10b981) - Achievement
- **Trust**: Sky Blue (#0ea5e9) - Reliability

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Key Features

- Custom CSS animations
- Glassmorphism effects
- Gradient backgrounds
- Smooth transitions
- Responsive breakpoints

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📄 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts to complete deployment

### Alternative: GitHub + Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Import repository on [vercel.com](https://vercel.com)

## 📞 Business Information

- **Company**: Combat Services
- **Location**: House No. 12B, Shaheed Officers Colony, Sabzazar, Rawalpindi, Pakistan
- **Success Rate**: 98%
- **Visas Approved**: 20,000+
- **Experience**: 15+ years

## 🎯 Services

1. **Student Visas** - Expert guidance for studying abroad
2. **Immigration Visas** - Permanent residence and citizenship
3. **Visit/Tourist Visas** - Fast and reliable tourist visa services

## 📝 Pages Overview

### Home Page
- Hero section with CTAs
- Animated stats counter
- Service overview
- Why choose us
- Process steps
- Testimonials
- Contact form

### About Us
- Company story
- Mission & vision
- Core values
- Office location

### Services
- Detailed service descriptions
- Features and benefits
- Country coverage
- Process timeline

### Success Stories
- Client testimonials
- Success statistics
- Category breakdown

### FAQ
- Categorized questions
- Accordion interface
- Quick links

### Contact
- Contact form
- Business information
- Map integration
- Multiple contact methods

## 🔧 Customization

### Update Business Information

Edit `/lib/constants.js` to update:
- Company details
- Contact information
- Services
- Testimonials
- FAQs

### Modify Design

Edit `/app/globals.css` and `/tailwind.config.js` to customize:
- Colors
- Typography
- Spacing
- Animations

### Add New Pages

Create new page in `/app/your-page/page.jsx`:

```jsx
export default function YourPage() {
  return (
    <div>Your content here</div>
  );
}
```

## 📊 Performance

- **Next.js 14**: Latest features and optimizations
- **App Router**: Improved performance and SEO
- **Optimized Fonts**: Google Fonts with display swap
- **Responsive Images**: Automatic optimization
- **Code Splitting**: Automatic by Next.js

## 🤝 Support

For questions or support, contact:
- **Email**: info@combatservices.pk
- **Phone**: +92-51-XXXXXXX

## 📄 License

This project is proprietary and confidential. All rights reserved by Combat Services.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
