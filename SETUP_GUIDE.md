# Portfolio Setup Guide

Your professional portfolio is ready! Follow this guide to customize it with your personal information.

## Quick Start

1. **Update Personal Information**
   - Edit [`config/site.ts`](config/site.ts) - This is your one-stop shop for all customizations

2. **Add Your Resume**
   - Place your resume PDF at `public/resume.pdf`
   - The download button in the navbar will automatically work

3. **Set up Contact Form**
   - Sign up for free at [Web3Forms](https://web3forms.com)
   - Add your access key to [`config/site.ts`](config/site.ts) (`web3formsAccessKey`)

## Detailed Customization

### 1. Personal Information ([config/site.ts](config/site.ts))

```typescript
name: "Your Name"              // Your full name
title: "Full-Stack Developer"  // Your professional title
email: "your.email@example.com"
location: "Your City, Country"
```

### 2. Professional Stats

```typescript
stats: {
  yearsExperience: "5+",
  projectsCompleted: "50+",
  happyClients: "20+",
  technologies: "20+",
}
```

### 3. About Section

```typescript
about: {
  description: [
    "First paragraph about yourself...",
    "Second paragraph about your journey...",
  ],
}
```

### 4. Skills

```typescript
skills: {
  frontend: ["React", "Next.js", "TypeScript", ...],
  backend: ["Node.js", "Express", "PostgreSQL", ...],
  tools: ["Git", "Docker", "AWS", ...],
}
```

### 5. Projects

Add your real projects:

```typescript
projects: [
  {
    title: "Your Project Name",
    description: "Brief description of the project",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-blue-600 to-cyan-600", // Choose from gradients below
    liveUrl: "https://your-project.com",   // Or "#" if not available
    githubUrl: "https://github.com/you/project", // Or "#" if not available
  },
  // Add more projects...
]
```

**Available gradient options:**
- `"from-blue-600 to-cyan-600"`
- `"from-purple-600 to-pink-600"`
- `"from-orange-600 to-red-600"`
- `"from-green-600 to-teal-600"`
- `"from-indigo-600 to-purple-600"`

### 6. Social Links

```typescript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "mailto:your.email@example.com",
}
```

### 7. SEO Configuration

```typescript
seo: {
  title: "Your Name - Full-Stack Developer Portfolio",
  description: "Portfolio showcasing...",
  url: "https://yourwebsite.com",
  image: "/og-image.jpg", // Add this image to public folder
}
```

## Adding Your Photo

1. Place your profile photo in the `public/` folder (e.g., `public/profile.jpg`)
2. Edit [`components/About.tsx`](components/About.tsx), line 30:

```tsx
// Replace this line:
<div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl" />

// With this:
<img
  src="/profile.jpg"
  alt="Your Name"
  className="aspect-square rounded-2xl shadow-2xl object-cover"
/>
```

## Contact Form Setup

1. Go to [web3forms.com](https://web3forms.com)
2. Sign up for free (no credit card required)
3. Get your Access Key
4. Add it to [`config/site.ts`](config/site.ts):

```typescript
contact: {
  web3formsAccessKey: "YOUR_ACCESS_KEY_HERE",
}
```

## Resume Download

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. The navbar button will automatically work!

## Customizing Colors

To change the color scheme, edit [`tailwind.config.ts`](tailwind.config.ts):

```typescript
theme: {
  extend: {
    colors: {
      // Add custom colors here
      primary: "#your-color",
      secondary: "#your-color",
    },
  },
}
```

## Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live in ~2 minutes!

### Environment Variables

If you added your Web3Forms access key to the config, you're all set. For production, you can also set it as an environment variable:

```bash
# In Vercel dashboard or .env.local
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

## Features

✅ Advanced Hero section with animations and particles
✅ Functional contact form (Web3Forms)
✅ Resume download
✅ Responsive design
✅ Dark mode support
✅ SEO optimized
✅ Fast performance
✅ Smooth animations with Framer Motion
✅ Centralized configuration

## Need Help?

- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Check the [Framer Motion documentation](https://www.framer.com/motion/)

## Tips

1. **Keep it updated**: Regularly update your projects and skills
2. **Test the contact form**: Send yourself a test message
3. **Optimize images**: Use WebP format for better performance
4. **Monitor analytics**: Add Google Analytics or similar
5. **Regular backups**: Keep your code in GitHub

---

**Your portfolio is ready to shine!** 🚀

Just update [`config/site.ts`](config/site.ts) with your information and deploy!
