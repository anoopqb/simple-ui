# @anoopqb/simple-ui

A simple React UI component library built with TypeScript and Rollup.

## Installation

```bash
npm install @anoopqb/simple-ui
```

## Usage

```tsx
import { Header, Hero } from '@anoopqb/simple-ui';
import '@anoopqb/simple-ui/dist/index.css'; // Import styles

function App() {
  return (
    <div>
      <Header 
        logoSrc="https://example.com/mylogo.png" 
        menuItems={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' }
        ]} 
      />
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
        title="Welcome to Our Site"
        subtitle="Beautiful components for modern React applications"
        ctaText="Get Started"
        onCtaClick={() => console.log('CTA clicked!')}
      />
    </div>
  );
}
```

## Components

### Header

A responsive header component with logo and navigation menu.

#### Props

- `logoSrc` (string): URL or path to the logo image
- `menuItems` (Array): Array of menu items with `label` and `href` properties

#### Example

```tsx
<Header 
  logoSrc="/path/to/logo.png"
  menuItems={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ]}
/>
```

### Hero

A full-width hero section with background image, title, subtitle, and call-to-action button.

#### Props

- `backgroundImage` (string): URL for the background image
- `title` (string): Main heading text
- `subtitle?` (string): Optional subtitle text
- `ctaText` (string): Text for the CTA button
- `ctaHref?` (string): Optional href for the CTA (renders as link)
- `onCtaClick?` (function): Optional click handler for the CTA
- `height?` (string): Custom height (default: "60vh")
- `overlay?` (boolean): Show dark overlay (default: true)
- `textAlign?` ('left' | 'center' | 'right'): Text alignment (default: 'center')

#### Example

```tsx
<Hero
  backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
  title="Welcome to Our Platform"
  subtitle="Discover amazing features and capabilities"
  ctaText="Get Started"
  onCtaClick={() => alert('Welcome!')}
  height="80vh"
  textAlign="center"
/>
```

## Development

### Building

```bash
npm run build
```

### Cleaning

```bash
npm run clean
```

## License

MIT
