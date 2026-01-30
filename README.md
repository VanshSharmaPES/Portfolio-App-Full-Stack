# 🚀 Vansh Sharma - Portfolio Website

A modern, animated portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features stunning visual effects, smooth animations, and a responsive design that works perfectly on all devices.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8)

## ✨ Features

### 🎨 Visual Effects
- **Animated Background Blobs** - Floating gradient orbs with pulse animations
- **Gradient Text Effects** - Dynamic color transitions on headings
- **Glow Effects** - Pulsing glows behind icons and elements
- **Shimmer Animations** - Light sweep effects on underlines
- **Hover Interactions** - Scale, rotate, and color transitions
- **Continuous Animations** - Subtle breathing effects throughout

### 🎭 Page Animations
- **Entrance Animations** - Smooth slide-in effects using Framer Motion
- **Staggered Loading** - Elements appear in sequence
- **Scroll Animations** - Content animates as you scroll
- **Interactive Elements** - Buttons with shine effects and icon animations

### 📱 Responsive Design
- **Mobile-First** - Optimized for all screen sizes
- **Touch-Friendly** - 44px minimum touch targets
- **Adaptive Layout** - Content reflows perfectly on any device
- **Cross-Browser** - Works on all modern browsers

### 🎯 Modern UI/UX
- **Glass Morphism** - Backdrop blur effects
- **Gradient Backgrounds** - Multi-layered visual depth
- **Micro-Interactions** - Delightful hover and click effects
- **Professional Typography** - Inter font with perfect spacing
- **Consistent Design System** - Cohesive color palette and spacing

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16.0.7](https://nextjs.org/)** - React framework with SSG/SSR
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4.1.17](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

### Icons & Assets
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Optimized image loading
- **Custom Animations** - CSS keyframes and transforms

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vanshsharma2006asr/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio-website/
├── public/                 # Static assets
│   ├── image.jpg          # Profile image
│   ├── favicon.svg        # Site icon
│   └── Vansh_Sharma_Resume.pdf
├── src/
│   ├── components/        # Reusable components
│   │   └── Layout.tsx     # Main layout with header/footer
│   ├── data/             # Static data
│   │   └── portfolioData.ts
│   ├── pages/            # Next.js pages
│   │   ├── api/          # API routes
│   │   ├── index.tsx     # Landing page
│   │   ├── home.tsx      # Home page
│   │   ├── about.tsx     # About page
│   │   ├── projects.tsx  # Projects showcase
│   │   └── contact.tsx   # Contact form
│   ├── styles/           # Global styles
│   │   └── globals.css   # Tailwind + custom CSS
│   └── types.d.ts        # TypeScript definitions
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Colors
The portfolio uses a cyber-dev theme with these colors:
```css
--color-primary-dark: #170F25;  /* Deep Purple/Black */
--color-accent: #4ade80;        /* Neon Green */
--color-surface-light: #2E2344; /* Muted Purple */
--color-neutral-text: #f3f4f6;  /* Cool Gray */
```

### Content
Update your information in `src/data/portfolioData.ts`:
```typescript
export const PORTFOLIO_DATA = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  about: "Your bio...",
  skills: ["Skill 1", "Skill 2"],
  projects: [...],
  contact: {
    email: "your.email@example.com",
    github: "yourusername",
    linkedin: "yourusername"
  }
};
```

### Animations
Customize animations in `src/styles/globals.css`:
```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Excellent
- **Build Time**: ~4 seconds
- **Bundle Size**: Optimized with Next.js
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based splitting

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag & drop the `out` folder after `npm run build && npm run export`
- **GitHub Pages**: Use `next export` for static deployment
- **AWS S3**: Upload build files to S3 bucket

## 📧 Contact

**Vansh Sharma**
- 📧 Email: [vanshsharma2006asr@gmail.com](mailto:vanshsharma2006asr@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/vansh-sharma-pesu](https://linkedin.com/in/vansh-sharma-pesu)
- 🐙 GitHub: [github.com/VanshSharmaPES](https://github.com/VanshSharmaPES)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **Vercel** - For hosting and deployment

## 📈 Roadmap

- [ ] Add dark/light mode toggle
- [ ] Implement blog section
- [ ] Add more interactive animations
- [ ] Create mobile app version
- [ ] Add multi-language support

---

<div align="center">

**Built with ❤️ by [Vansh Sharma](https://github.com/VanshSharmaPES)**

⭐ Star this repo if you found it helpful!

</div>