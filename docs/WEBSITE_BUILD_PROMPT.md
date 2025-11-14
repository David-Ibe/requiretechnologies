# Website Building Prompt for Require Technologies Limited

## Complete Next.js Website Development Prompt

Generate a complete Next.js website with Tailwind CSS for **Require Technologies Limited**, a Nigerian software development company focused on innovative technology solutions. The website should reflect our comprehensive service offerings and position us as Africa's premier technology partner.

### Project Requirements

**Framework & Technology Stack:**
- Next.js 15+ with React 19
- TypeScript for type safety
- Tailwind CSS for styling
- Mobile-first responsive design
- SEO optimized with meta tags

**Design Specifications:**
- **Color Scheme**: 
  - Primary: #1e3a8a (Dark Blue - trust and professionalism)
  - Accent: #22c55e (Green - innovation and growth)
  - Secondary: #f59e0b (Gold - excellence and premium quality)
- **Typography**: Inter font family for modern, readable design
- **Layout**: Clean, professional design with glass-effect cards and smooth animations

### Required Pages & Structure

#### 1. Home Page (`src/app/page.tsx`)
- **Hero Section**: 
  - Headline: "Transforming Businesses with Innovative Technology"
  - Subheading: "We deliver comprehensive technology solutions including custom software, digital platforms, data insights, cloud services, cybersecurity, and IoT solutions that drive success in Nigeria and beyond."
  - CTA Buttons: "Start Your Journey" and "View Our Work"
  - Trust indicators: Project count, client count, years of experience

- **Services Preview**: Display all 7 services with icons and brief descriptions
- **Why Choose Us**: 4 key differentiators with icons
- **Call-to-Action Section**: Final conversion section

#### 2. About Page (`src/app/about/page.tsx`)
- **Hero Section**: Company introduction
- **Mission & Vision**: Detailed company mission and vision statements
- **Core Values**: 4 key values with descriptions
- **Team Section**: Overview of our skilled professionals
- **Company Story**: Brief history and growth trajectory

#### 3. Services Page (`src/app/services/page.tsx`)
- **Hero Section**: "Our Services" with comprehensive overview
- **Main Services Grid**: All 7 services with detailed descriptions and features
- **Additional Services**: Maintenance, optimization, security, analytics
- **Process Section**: 4-step development process
- **Call-to-Action**: Contact and portfolio links

#### 4. Portfolio Page (`src/app/portfolio/page.tsx`)
- **Hero Section**: "Our Portfolio" with impact statement
- **Filter Section**: Category filtering for projects
- **Projects Grid**: 6+ sample projects with:
  - Project images (placeholder)
  - Technology stack used
  - Results achieved
  - Client testimonials
- **Stats Section**: Company impact metrics
- **Testimonials**: Client feedback section

#### 5. Blog Page (`src/app/blog/page.tsx`)
- **Hero Section**: "Our Blog" with insights statement
- **Featured Article**: Latest post with full description
- **Articles Grid**: 5+ blog posts with:
  - Category tags
  - Publication dates
  - Read time estimates
  - Excerpts
- **Newsletter Signup**: Email subscription form
- **Popular Topics**: Category overview

#### 6. Contact Page (`src/app/contact/page.tsx`)
- **Hero Section**: "Contact Us" with engagement message
- **Contact Form**: Comprehensive form with:
  - Personal information fields
  - Service selection dropdown (all 7 services)
  - Project details textarea
  - Form validation
- **Contact Information**: Multiple contact methods
- **Business Hours**: Operating schedule
- **FAQ Section**: Common questions and answers
- **Call-to-Action**: Final engagement section

### Required Components

#### 1. Header Component (`src/components/Header.tsx`)
- **Logo**: "Require Technologies" with hover effects
- **Navigation**: All 6 pages with hover states
- **CTA Button**: "Get a Quote" prominently displayed
- **Mobile Menu**: Responsive hamburger menu
- **Sticky Header**: Fixed positioning with shadow

#### 2. Footer Component (`src/components/Footer.tsx`)
- **Company Info**: Brief description and contact details
- **Quick Links**: Navigation links
- **Contact Information**: Email, phone, address
- **Social Media**: LinkedIn, Twitter/X, WhatsApp links with icons
- **Copyright**: 2025 Require Technologies Limited

#### 3. Hero Component (`src/components/Hero.tsx`)
- **Dynamic Content**: Acceptable title, subtitle, and CTA props
- **Gradient Background**: Primary to blue-900 gradient
- **Trust Indicators**: Metrics display section
- **Responsive Design**: Mobile-optimized layout

#### 4. ServiceCard Component (`src/components/ServiceCard.tsx`)
- **Props**: title, description, icon, features array
- **Hover Effects**: Scale and shadow animations
- **Feature Lists**: Bullet points with checkmark icons
- **Learn More Link**: Contact page navigation

#### 5. ContactForm Component (`src/components/ContactForm.tsx`)
- **Form Fields**: Name, email, phone, company, service selection, message
- **Validation**: Required field validation
- **Service Dropdown**: All 7 services as options
- **Submit Handling**: Form submission logic
- **Paystack Integration**: Demo booking button

#### 6. PaystackButton Component (`src/components/PaystackButton.tsx`)
- **Payment Integration**: Paystack inline payment
- **Demo Booking**: ₦10,000 demo session booking
- **Loading States**: Processing indicators
- **Error Handling**: Payment failure management

#### 7. WhatsAppButton Component (`src/components/WhatsAppButton.tsx`)
- **Fixed Position**: Bottom-right floating button
- **WhatsApp Link**: Direct messaging integration
- **Hover Effects**: Scale animation
- **Accessibility**: Proper ARIA labels

### Content Requirements

#### Service Offerings (7 Core Services)
1. **Custom Software Development**: Enterprise applications, industry-specific solutions
2. **Digital Platforms**: Websites and mobile applications
3. **Data & Insights**: Analytics and business intelligence
4. **Cloud Services**: Migration and infrastructure management
5. **Cybersecurity**: Security audits and compliance solutions
6. **Digital Marketing Technology**: SEO and marketing automation tools
7. **IoT Solutions**: Smart systems and operational optimization

#### Company Information
- **Mission**: "To empower companies with innovative, tailored technology solutions that deliver measurable results"
- **Vision**: "To be Africa's premier technology partner, driving digital transformation and creating sustainable value"
- **Values**: Innovation, Excellence, Client Focus, Adaptability, Integrity
- **Contact**: info@requiretech.ng, +234 123 456 7890, Lagos, Nigeria

### Technical Features

#### SEO Optimization
- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema markup for business information
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine crawling instructions

#### Performance Optimization
- **Image Optimization**: Next.js Image component usage
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Component and image lazy loading
- **Compression**: Gzip compression for assets
- **Caching**: Static generation where possible

#### Mobile Optimization
- **Responsive Design**: Mobile-first approach
- **Touch Optimization**: Touch-friendly buttons and forms
- **Fast Loading**: Optimized for slower connections
- **Progressive Web App**: PWA capabilities

#### Accessibility
- **ARIA Labels**: Proper accessibility attributes
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG compliant color ratios
- **Screen Reader**: Compatible with assistive technologies

### Integration Requirements

#### Payment Integration
- **Paystack**: Nigerian payment processing
- **Demo Booking**: ₦10,000 consultation booking
- **Security**: PCI compliance considerations
- **Error Handling**: Payment failure management

#### Communication Integration
- **WhatsApp**: Direct messaging integration
- **Contact Forms**: Email form submissions
- **Social Media**: LinkedIn, Twitter/X links
- **Phone**: Direct calling functionality

### Content Guidelines

#### Tone & Voice
- **Professional**: Business-focused and authoritative
- **Innovative**: Forward-thinking and technology-focused
- **Trustworthy**: Reliable and credible
- **Local**: Nigerian market understanding

#### Key Messages
- **Comprehensive Solutions**: Full-service technology partner
- **Local Expertise**: Nigerian market knowledge
- **Innovation Focus**: Cutting-edge technology implementation
- **Client Success**: Results-driven approach

### Deployment Requirements

#### Production Setup
- **Vercel Deployment**: Optimized for Vercel platform
- **Custom Domain**: Support for requiretech.ng
- **SSL Certificate**: HTTPS enforcement
- **CDN**: Global content delivery

#### Environment Configuration
- **Environment Variables**: API keys and configuration
- **Build Optimization**: Production build settings
- **Error Handling**: 404 and error pages
- **Analytics**: Google Analytics integration ready

### File Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── blog/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ContactForm.tsx
│   ├── PaystackButton.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   └── utils.ts
└── types/
    └── index.ts
```

### Success Criteria
- **Mobile-First**: Fully responsive on all devices
- **Performance**: Lighthouse score 90+ on all metrics
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Optimized for Nigerian market search terms
- **User Experience**: Intuitive navigation and clear CTAs
- **Professional**: Corporate-grade design and functionality

### Deliverables
1. **Complete Codebase**: All files with proper structure
2. **Documentation**: README with setup instructions
3. **Configuration**: All necessary config files
4. **Deployment**: Vercel-ready deployment configuration
5. **Testing**: Basic functionality testing completed

---

**Note**: This prompt is designed to create a comprehensive, professional website that positions Require Technologies Limited as a leading technology solutions provider in Nigeria and Africa. The focus is on showcasing our diverse service offerings while maintaining a professional, trustworthy appearance that appeals to business clients seeking innovative technology solutions.
