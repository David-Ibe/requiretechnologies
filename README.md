# Require Technologies Limited - Corporate Website

A modern, responsive corporate website for Require Technologies Limited, showcasing AI-driven software development services for the Nigerian market.

## Features

- **Modern Design**: Clean, professional design with mobile-first responsive layout
- **AI-Focused Branding**: Subtle emphasis on AI-enhanced solutions without explicit tool mentions
- **Nigerian Market Optimized**: WhatsApp integration, Paystack payment processing, local contact information
- **Performance Optimized**: Fast loading, SEO-friendly, and accessible
- **Interactive Components**: Contact forms, payment integration, and social media links

## Technology Stack

- **Framework**: Next.js 15+ with React 19
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Payment**: Paystack integration
- **Communication**: WhatsApp integration

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── portfolio/       # Portfolio page
│   ├── blog/            # Blog page
│   └── contact/         # Contact page
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Hero section
│   ├── ServiceCard.tsx  # Service display card
│   ├── ContactForm.tsx  # Contact form
│   ├── PaystackButton.tsx # Payment integration
│   └── WhatsAppButton.tsx # WhatsApp integration
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Paystack Integration
Update the Paystack public key in `src/components/PaystackButton.tsx`:
```typescript
key: 'pk_live_your_actual_paystack_public_key'
```

### WhatsApp Integration
Update the phone number in `src/components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = "2341234567890" // Your actual WhatsApp number
```

### Contact Information
Update contact details in:
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## Brand Guidelines

- **Primary Color**: #1e3a8a (Dark Blue)
- **Accent Color**: #22c55e (Green)
- **Secondary Color**: #f59e0b (Gold)
- **Typography**: Inter font family
- **Design**: Clean, professional, mobile-first

## Features Overview

### Home Page
- Hero section with company value proposition
- Services overview with feature highlights
- Why choose us section
- Call-to-action sections

### About Page
- Company mission and vision
- Core values
- Team information
- Company story

### Services Page
- Detailed service descriptions
- Process overview
- Additional services
- Service benefits

### Portfolio Page
- Project showcase
- Client testimonials
- Technology stack display
- Results and impact metrics

### Blog Page
- Article listings
- Category filtering
- Newsletter subscription
- Popular topics

### Contact Page
- Contact form with Paystack integration
- Multiple contact methods
- Business hours
- FAQ section

## SEO Optimization

- Meta tags and descriptions
- Open Graph tags
- Structured data
- Mobile optimization
- Fast loading times

## Support

For technical support or questions about this website, contact:
- Email: info@requiretech.ng
- Phone: +234 123 456 7890
- WhatsApp: +234 123 456 7890

## License

© 2025 Require Technologies Limited. All rights reserved.
