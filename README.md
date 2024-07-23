# Marine Research Company - Offshore Exploration Landing Page

<p align="center">
  <a href="https://yourcompanywebsite.com"><img src="public/assets/images/marine-research-banner.png" alt="Marine Research Company banner"></a>
</p>

🚀 A landing page for a marine research company specializing in offshore exploration, built with Next.js, Tailwind CSS, and TypeScript.

### Features

- 🌊 **Next.js** for Static Site Generation
- 🎨 **Tailwind CSS** for modern and responsive design
- ✅ **TypeScript** for type safety and better development experience
- 🔍 **SEO-friendly** with metadata and Open Graph tags
- ✨ **Smooth transitions and effects** for an engaging user experience
- 🌈 **Customizable color scheme** to match your brand
- 📱 **Responsive design** for seamless viewing on any device
- 💼 **Modern menu with dropdowns** for easy navigation
- 💻 Developer tools: ESLint, Prettier, Husky, Lint-Staged, and VSCode configuration
- 🚀 Easy deployment with Vercel or Netlify

### Included Components

- Navbar with dropdown menu
- Hero Section with engaging visuals
- Features Section highlighting key offerings
- Call-to-Action (CTA) Banner
- Footer with contact information

### Menu Details

- **Logo and Branding**: A prominent logo on the top left, representing the company's brand.
- **Navigation Links**: Includes links to "Map", "Ports", "Containers", "News", and "About".
- **Mobile Menu**: A collapsible menu for mobile devices, providing easy access to navigation links.
- **Dropdown Items**: Subsections such as "Our Fleet", "Windstaller Alliance", "Chartering | Spot", "Investors", "Sustainability", "Job Opportunities", "Safety Management", "Our Story", "News and Media", and "Contact".
- **Search Bar**: A search bar at the top of the dropdown menu for easy access to different sections of the website.
- **Social Media Links**: Icons linking to social media profiles at the bottom of the dropdown menu.

### Project Structure

```bash
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
│   └── assets
│       └── images       # Image assets for the template
├── src
│   ├── components       # Atomic components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── CtaBanner.tsx
│   │   └── Footer.tsx
│   ├── pages            # Next.js pages
│   │   └── index.tsx
│   ├── styles           # Tailwind CSS styles
│   │   └── globals.css
│   └── utils            # Utility functions
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration