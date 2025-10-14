# Bullock Interactive Reconstruction

A modern React TypeScript application built with Vite, featuring React Router, Tailwind CSS, Storybook, and Google Analytics integration.

## 🚀 Features

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **React Router v6** for client-side routing
- **Tailwind CSS** for utility-first styling
- **Storybook** for component documentation and testing
- **Google Analytics 4** for analytics tracking
- **ESLint + Prettier** for code quality and formatting
- **Vercel** deployment ready

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

Start Storybook:

```bash
npm run storybook
```

## 🧪 Testing

Run Vitest tests:

```bash
npm run test
```

Run Storybook tests:

```bash
npx vitest --project=storybook
```

## 🔧 Code Quality

Lint the code:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

Format code with Prettier:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

## 🌍 Environment Variables

Copy the example environment file and configure your variables:

```bash
cp .env.example .env.local
```

### Required Variables

- `VITE_GA_TRACKING_ID`: Your Google Analytics 4 tracking ID (format: G-XXXXXXXXXX)

## 🚀 Deployment

### Vercel Deployment

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel dashboard:
   - Go to your project settings
   - Add `VITE_GA_TRACKING_ID` as an environment variable

### Manual Build

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx
│   └── *.stories.tsx   # Storybook stories
├── hooks/              # Custom React hooks
│   └── usePageTracking.ts
├── pages/              # Route components
│   ├── Home.tsx
│   └── About.tsx
├── utils/              # Utility functions
│   └── analytics.ts    # Google Analytics utilities
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## 🛠️ Technologies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React GA4](https://github.com/codler/react-ga4)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
