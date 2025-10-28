# OceanEdge - Modern Next.js Website Template

A super modern, smooth, and stunning Next.js website template featuring glassmorphism design, smooth animations, and beautiful gradients.

## 🚀 Features

- **Modern Design**: Glassmorphism and gradient effects
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive**: Mobile-first responsive design
- **Fast Performance**: Optimized Next.js with automatic code splitting
- **TypeScript**: Fully typed with TypeScript
- **Tailwind CSS**: Utility-first CSS framework
- **SEO Friendly**: Next.js built-in SEO optimizations
- **Dark Mode**: Beautiful dark theme with cyan accents

## 🛠️ Tech Stack

- **Next.js 14**: React framework
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Lucide React**: Icons

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
oceanedgemedia/
├── components/          # Reusable components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   └── index.tsx
├── styles/             # Global styles
│   └── globals.css
├── public/             # Static assets
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## 📝 Available Scripts

- **`npm run dev`**: Start development server
- **`npm run build`**: Build for production
- **`npm run start`**: Start production server
- **`npm run lint`**: Run ESLint
- **`npm run type-check`**: Run TypeScript type checker

## 🎨 Customization

### Colors
Edit the theme colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f172a',
  secondary: '#1e293b',
  accent: '#06b6d4',
}
```

### Content
- Update component text in `components/` directory
- Modify page content in `pages/index.tsx`
- Update footer links in `components/Footer.tsx`

### Animations
- Adjust animation delays and durations in component `transition` props
- Customize animation keyframes in `tailwind.config.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms
```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips

- Use the smooth scroll behavior for better UX
- Customize the gradient text by modifying `.gradient-text` class
- Add more icons from `lucide-react` library
- Extend animations with Framer Motion documentation

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Support

For support, please open an issue on GitHub or contact us.

---

Built with ❤️ by OceanEdge Media
