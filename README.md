# Diff-Summary

Summarize diff using AI

## Tech Stack

- **React 19** - Modern React with the latest features
- **Vite** - Fast build tool with Hot Module Replacement (HMR)
- **ESLint** - Code linting for code quality

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Building for Production

Build the application:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
diff-summary/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── App.jsx      # Main App component
│   ├── App.css      # App styles
│   ├── main.jsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Dependencies and scripts
└── vite.config.js   # Vite configuration
```
