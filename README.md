# Bullock Interactive Reconstruction

An interactive web application showcasing the Reconstruction era in Texas, built with React, TypeScript, and Tailwind CSS.

## Features

### Three Main Screens

1. **Pullscreen** (`/`) - The landing page with:
   - Purple gradient background
   - Three animated woodblocks (Education, Politics, Community Leadership)
   - Main title "RECOUNTING RECONSTRUCTION"
   - Subtitle and description text
   - START button to proceed to Screen2
   - Spanish language toggle button

2. **Screen2** (`/screen2`) - Category selection page with:
   - Same purple background
   - Animated woodblocks that slide out when navigating from Pullscreen
   - Five category buttons: CommunityLeadership, Agriculture, Politics, Education, Entrepreneurship
   - Navigation buttons (HOME, Español)
   - Woodblocks only animate when coming from previous screen, not from back button

3. **Screen3** (`/screen3`) - Detailed content page with:
   - Expandable text options (New Opportunities, Challenges and Dangers, View Artifact)
   - Dynamic content based on selected category
   - Woodblock background (only when coming from previous screen)
   - Navigation buttons (HOME, BACK, Español)
   - Expandable content with images and detailed descriptions

### Technical Implementation

- **CSS View Transitions**: Smooth fade-in/fade-out transitions between pages
- **Woodblock Animations**: Custom animations for woodblocks sliding out of frame
- **State Management**: React state to track navigation flow and expanded content
- **Responsive Design**: Tailwind CSS for responsive layouts
- **TypeScript**: Full type safety throughout the application

### Navigation Flow

1. Start at Pullscreen (`/`)
2. Click START → Navigate to Screen2 (`/screen2`) with woodblocks animation
3. Select category → Navigate to Screen3 (`/screen3`) with category-specific content
4. Use BACK button → Return to Screen2 without woodblocks animation
5. Use HOME button → Return to Pullscreen

### Key Features

- **Smart Woodblock Animation**: Woodblocks only animate when navigating forward, not when using back button
- **Expandable Content**: Click on options in Screen3 to expand detailed content
- **Category-Specific Content**: Different content based on selected category
- **CSS View Transitions**: Smooth page transitions using modern CSS View Transitions API
- **Responsive Design**: Works on desktop and mobile devices

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- React Router DOM
- CSS View Transitions API
- Vite (build tool)
- Google Analytics 4 (gtag.js) - See [Google Analytics Documentation](src/GoogleAnalytics.mdx) for implementation details

## Browser Support

- Modern browsers with CSS View Transitions support
- Chrome 111+
- Firefox 103+
- Safari 18+

## Project Structure

```text
src/
├── pages/
│   ├── Pullscreen.tsx    # Landing page
│   ├── Screen2.tsx       # Category selection
│   ├── Screen3.tsx       # Detailed content
│   ├── Home.tsx          # Original home page
│   └── About.tsx         # About page
├── components/
│   └── Navigation.tsx    # Navigation component
├── hooks/
│   └── usePageTracking.ts # Analytics tracking
├── utils/
│   └── analytics.ts      # Google Analytics setup
└── App.tsx               # Main app component
```
