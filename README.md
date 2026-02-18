# 🚀 Vansh Sharma - Portfolio Website

A modern, animated portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS 4**. Features a "Modern Sunset Minimal" theme, smooth animations, and an adaptive single-screen layout that works perfectly on all devices.

**🌐 Live Website**: [vanshsharma-portfolio.vercel.app](https://vanshsharma-portfolio.vercel.app)

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-orange)

## ✨ Features

### 🎨 Visual Identity ("Sunset Minimal")
-   **Orange & Yellow Theme** - A vibrant gradient palette inspired by sunset hues used for accents, text gradients, and logos.
-   **Adaptive Single-Screen Layout** - Desktop pages are fixed to the viewport height for a clean app-like feel but **automatically scroll** if content overflows (e.g., small screens).
-   **System UI Typography** - Uses native iOS/system fonts (`-apple-system`, `BlinkMacSystemFont`) for a crisp, familiar reading experience.
-   **Code Bracket Logo** - Custom SVG favicon with a solid orange stroke (`#f97316`) representing the developer identity.

### 🎭 Visual Effects
-   **Fade-In Animations** - Smooth entry transitions using **Framer Motion**.
-   **Gradient Text** - Dynamic orange-to-yellow color transitions on headings and stats.
-   **Glass Elements** - Subtle borders and backdrops (`bg-surface-light`) for depth.
-   **Interactive Cards** - Hover effects with lift, shadow, and border highlights.

### 📱 Responsive Design
-   **Mobile-First** - Full vertical scrolling on mobile devices with `min-h` logic.
-   **Smart Footer** - Automatically positions itself at the bottom of content, accessible via scroll on all devices.
-   **Touch-Friendly** - Optimized touch targets and spacing.

## 🛠️ Tech Stack

### Frontend
-   **[Next.js 16.0.7](https://nextjs.org/)** - React framework with App Router & Server Actions support.
-   **[TypeScript](https://www.typescriptlang.org/)** - Static typing for robust code.
-   **[Tailwind CSS 4.1.17](https://tailwindcss.com/)** - Next-gen utility-first CSS engine.
-   **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library.

### Icons & Assets
-   **[Lucide React](https://lucide.dev/)** - Consistent, lightweight icon set.
-   **[Next/Image](https://nextjs.org/docs/api-reference/next/image)** - Performance-optimized image rendering.

## 🚀 Getting Started

### Prerequisites
-   Node.js 18+
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/VanshSharmaPES/Portfolio-App-Full-Stack.git
    cd Portfolio-App-Full-Stack
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── image.jpg          # Profile photo
│   ├── favicon.svg        # Custom Orange Code Bracket Logo
│   └── Vansh_Sharma_Resume.pdf
├── src/
│   ├── components/
│   │   └── Layout.tsx     # Main layout wrapper
│   ├── data/
│   │   └── portfolioData.ts # Centralized content management
│   ├── pages/
│   │   ├── _app.tsx       # Global app configuration
│   │   ├── index.tsx      # Landing page
│   │   ├── home.tsx       # Home section
│   │   ├── projects.tsx   # Projects grid
│   │   ├── about.tsx      # Bio & Skills
│   │   └── contact.tsx    # Contact form
│   ├── styles/
│   │   └── globals.css    # Tailwind @theme configuration
```

## 🎨 Customization

### Colors
The theme uses CSS variables defined in `src/styles/globals.css`:

```css
:root {
  --color-primary-dark: #0a0a0a;   /* Deep Black/Gray Background */
  --color-text: #ededed;           /* Off-White Text */
  --color-text-muted: #a1a1aa;     /* Muted Gray Text */
  --color-accent: #f97316;         /* Orange (Primary Brand) */
  --color-accent-secondary: #facc15; /* Yellow (Gradient End) */
  --color-surface-light: #171717;  /* Card Backgrounds */
}
```

### Content
Modify `src/data/portfolioData.ts` to update your personal information, projects, and skills without touching the UI code.

## 📧 Contact

**Vansh Sharma**
-   📧 [vanshsharma2006asr@gmail.com](mailto:vanshsharma2006asr@gmail.com)
-   💼 [LinkedIn](https://linkedin.com/in/vansh-sharma-pesu)
-   🐙 [GitHub](https://github.com/VanshSharmaPES)

---

<div align="center">
  <b>Built by Vansh Sharma</b>
</div>