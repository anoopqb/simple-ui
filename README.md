# @anoopqb/simple-ui

A simple React UI component library built with TypeScript and Rollup.

## Installation

```bash
npm install @anoopqb/simple-ui
```

## Usage

```tsx
import { Header } from '@anoopqb/simple-ui';
import '@anoopqb/simple-ui/dist/index.css'; // Import styles

function App() {
  return (
    <Header 
      logoSrc="https://example.com/mylogo.png" 
      menuItems={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' }
      ]} 
    />
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
