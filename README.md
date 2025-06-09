# 🏭 Quantic Control System

A modern, responsive website for Quantic Control System — an ISO 9001:2015 certified company specializing in process gas and liquid analyzer solutions for industrial applications.

[View Live Demo](#) | [Documentation](#) | [Report Bug](#) | [Request Feature](#)

## ✨ Overview

Quantic Control System's official website showcases our comprehensive range of industrial solutions, products, and expertise in delivering high-precision instrumentation and analysis tools. Built with modern technologies and best practices in web development, this platform serves as a gateway to our industrial automation and control solutions.

### 🎯 Key Features

- 📱 Fully Responsive Design
- 🎨 Modern UI/UX with AOS Animations
- 🏭 Comprehensive Product Catalog
- 🔬 Industrial Solutions Showcase
- 📊 Gas & Liquid Analyzer Details
- 📞 Contact & Service Inquiry Forms
- 🎯 Industry-specific Solutions
- 👥 Expert Team Section
- 🏢 Customer Portfolio Display
- 📋 Detailed Technical Specifications

## 🛠️ Tech Stack

- **Frontend Framework:** React with TypeScript
- **Styling:**
  - Tailwind CSS for responsive design
  - Custom CSS for specialized components
- **Development Tools:**
  - Vite for fast development and building
  - TypeScript for type safety
  - ESLint for code quality
- **Key Libraries:**
  - React Router DOM for navigation
  - Swiper for image carousels
  - AOS for scroll animations
  - EmailJS for contact form handling
  - React Icons for UI icons
- **Additional Features:**
  - Responsive image optimization
  - Custom form validation
  - Interactive product catalogs
  - Industry-specific filtering

## 🗂️ Project Structure

```
src/
├── assets/                     # Static assets
│   ├── images/                # Product and industry images
│   │   ├── gas-analyzers/    # Gas analyzer product images
│   │   ├── liquid-analyzers/ # Liquid analyzer images
│   │   └── probes&filters/   # Probe and filter images
│   └── fonts/                # Custom fonts
├── components/               # Reusable UI components
│   ├── common/              # Base components (Button, Card, etc.)
│   ├── ContactForm.tsx      # Contact form component
│   ├── EstemedCustomers.tsx # Customer showcase
│   ├── Products.tsx        # Product catalog
│   └── ServiceCard.tsx     # Service information cards
├── pages/                  # Main application pages
│   ├── About.tsx          # Company information
│   ├── Products.tsx       # Product listings
│   ├── Support.tsx        # Technical support
│   └── Contact.tsx        # Contact information
├── utils/                 # Utility functions
│   └── emailjs.ts        # Email service integration
├── App.tsx               # Main application component
└── main.tsx             # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Gaurav2k50/quantic-control-system.git
   cd quantic-control-system
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start development server

   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Lint code with ESLint
- `npm run preview` - Preview production build

## 🧪 ESLint Configuration

For production applications, we recommend enabling type-aware lint rules. Update `eslint.config.js`:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
});
```

## 🔧 Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement responsive design patterns
- Write meaningful component and variable names
- Add proper TypeScript types and interfaces
- Comment complex business logic

### Best Practices

- Keep components small and focused
- Use proper image optimization
- Implement proper error handling
- Follow accessibility guidelines
- Test across different devices and browsers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Follow the code style guidelines
4. Test your changes thoroughly
5. Commit with clear messages (`git commit -m 'Add: detailed description'`)
6. Push to your branch (`git push origin feature/NewFeature`)
7. Open a detailed Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🏢 About Us

Quantic Control System is an ISO 9001:2015 certified company and MSME organization based in Jamshedpur. We specialize in:

- Process Gas Analyzers
- Continuous Emission Monitoring Systems (CEMS)
- Sample Handling Systems
- Liquid Analyzers
- Steam and Water Analysis Systems (SWAS)
- Industrial Automation Solutions

## 🎯 Industries We Serve

- Power Generation Plants
- Steel Manufacturing
- Chemical Plants
- Air Separation Units
- R&D Facilities
- Petrochemical Industries
- Cement Industries
- Paper & Pulp Industries

## 📞 Contact

- Website: [quanticcontrolsystem.com](#)
- Email: info@quanticcontrolsystem.com
- Location: Shantiniketan Jamshedpur Jharkhand-832108

---

Made with dedication by Quantic Control System Team
