# Business Portal - React Web App

A responsive React web application built with React Router v6, Context API for state management, and Bootstrap 5 for styling.

## Features

✅ **Responsive Design** - Mobile-first approach using Bootstrap 5
✅ **Client-side Routing** - React Router v6 for seamless navigation
✅ **State Management** - Context API + useReducer for global state
✅ **Clean Architecture** - Well-organized folder structure for scalability
✅ **Static Homepage** - Beautiful landing page with features showcase
✅ **Fast Development** - Vite build tool for quick dev server startup
✅ **Browser-Ready** - Auto-opens in default browser on startup

## Tech Stack

- **React 18** - JavaScript library for building UIs
- **React Router v6** - Client-side routing
- **Vite** - Lightning-fast build tool and dev server
- **Bootstrap 5** - Responsive CSS framework
- **Context API** - Global state management
- **useReducer** - State management hook

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page with static content
│   └── NotFound.jsx    # 404 page
├── context/            # State management
│   ├── AppContext.jsx  # Global context provider
│   └── appReducer.js   # Reducer logic
├── hooks/              # Custom hooks
│   └── useAppContext.js # Hook for using app context
├── styles/             # Styling
│   └── App.css         # App-level styles
├── App.jsx             # Main App component with routing
├── index.css           # Global styles
└── main.jsx            # Application entry point

public/
├── index.html          # HTML entry point
```

## Installation

1. **Clone the repository** (or extract the project files)
   ```bash
   cd biswajit-business-portal-pilot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will automatically open in your default browser at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Global State Management

The app uses Context API + useReducer for state management. Access the global state using the `useAppContext` hook:

```javascript
import { useAppContext } from './hooks/useAppContext';

function MyComponent() {
  const { state, dispatch } = useAppContext();

  // Use state and dispatch actions
  return <div>{state.user}</div>;
}
```

## Routing

Routes are configured in `App.jsx`:

- `/` - Home page
- `*` - 404 Not Found page

Add new routes by:
1. Create a new page component in `src/pages/`
2. Import it in `App.jsx`
3. Add a new `<Route>` in the `<Routes>` component

## Responsive Design

The app is fully responsive using Bootstrap's grid system:

- **Large screens (>992px)** - Full layout with side-by-side content
- **Medium screens (768-992px)** - Adjusted spacing and layout
- **Small screens (<768px)** - Mobile-optimized with collapsible navbar

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Add more pages and routes
- Integrate with backend API
- Add authentication system
- Implement advanced state management patterns
- Add unit and integration tests
- Optimize bundle size
- Add PWA capabilities

## License

This project is created for the Business Portal Pilot.

## Support

For issues or questions, please contact the development team.
