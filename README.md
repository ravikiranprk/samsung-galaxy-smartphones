# Samsung Galaxy Smartphones Landing Page

## Overview

A premium, responsive landing page for Samsung Galaxy Smartphones built with modern web technologies. The landing page showcases the latest Galaxy devices with a sleek, dark aesthetic that emphasizes innovation and cutting-edge technology.

## Features

### ✨ Responsive Design
- Mobile-first approach with breakpoints for tablet and desktop views
- Fully responsive across all device sizes (320px to 4K displays)
- Optimized touch interactions for mobile users
- Adaptive layout using Tailwind CSS grid and flexbox

### 🎨 Sections Included

1. **Hero Section**
   - Eye-catching headline: "Galaxy Innovation Redefined"
   - Compelling subtext highlighting key features
   - Dual CTA buttons: "Explore Now" (primary) and "Learn More" (secondary)
   - Product showcase visual

2. **Features Section**
   - 6 cutting-edge features with icons
   - Grid layout (1 column on mobile, 3 on desktop)
   - Hover effects for better interactivity
   - Features include:
     - Pro Camera System (200MP AI-powered)
     - Lightning-Fast Performance
     - Galaxy AI Assistant
     - Infinity Display (120Hz AMOLED)
     - Advanced Processing
     - Enhanced Security

3. **Product Highlights**
   - Three Galaxy models: S25, S25+, S25 Ultra
   - Product cards with images and pricing
   - Scale effect on featured products
   - Quick specifications for each model

4. **Pricing Section**
   - Three pricing tiers with features comparison
   - "Most Popular" badge on S25+ plan
   - Detailed feature lists with checkmark icons
   - Clear storage and warranty information
   - Call-to-action buttons for each plan

5. **Footer**
   - Comprehensive links (Products, Support, Legal)
   - Social media icons (Twitter, LinkedIn, GitHub, Email)
   - Brand information
   - Responsive grid layout

### 🎯 Design System

- **Color Palette**: Premium dark theme with slate grays and white accents
- **Typography**: Clean, modern with Geist font family
- **Spacing**: Consistent Tailwind spacing scale
- **Shadows & Borders**: Subtle borders and hover effects
- **Animations**: Smooth transitions and scale effects on interactions

### 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui Button component
- **Icons**: Lucide React (Camera, Zap, Sparkles, etc.)
- **Language**: TypeScript/TSX

### 📁 Project Structure

\`\`\`
/components
  ├── hero-section.tsx
  ├── features-section.tsx
  ├── product-highlights.tsx
  ├── pricing-section.tsx
  └── footer.tsx
/app
  ├── page.tsx (Main landing page)
  ├── layout.tsx
  └── globals.css (Theme configuration)
\`\`\`

### 🚀 Getting Started

1. **Install dependencies**
   \`\`\`
   npm install
   \`\`\`

2. **Run development server**
   \`\`\`
   npm run dev
   \`\`\`

3. **Open in browser**
   Navigate to `http://localhost:3000`

### 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px (md breakpoint)
- **Desktop**: 1025px and above (lg breakpoint)

### ✅ Accessibility Features

- Semantic HTML elements
- ARIA-friendly color contrasts
- Keyboard navigation support
- Descriptive alt text for images
- Screen reader optimized content

### 🎨 Customization

#### Change Colors
Edit the CSS variables in `app/globals.css`:
\`\`\`css
:root {
  --background: oklch(0.11 0 0);
  --foreground: oklch(0.98 0 0);
  /* ... more variables */
}
\`\`\`

#### Modify Content
All text content is editable in the component files. Replace placeholder content with your actual product information.

#### Update Images
Images use placeholder URLs. Replace with actual Samsung Galaxy images by updating the `src` attributes.

### 📊 Performance Optimizations

- Client component usage for interactive sections
- Image optimization with Next.js Image best practices
- CSS grid and flexbox for efficient layouts
- Minimal external dependencies

### 🔄 Future Enhancements

- Add product carousel with image galleries
- Implement shopping cart functionality
- Add comparison tool between models
- Newsletter signup integration
- Customer reviews section
- Live chat support

---

**Created with v0.app** - Built for Samsung Galaxy Smartphone showcase
