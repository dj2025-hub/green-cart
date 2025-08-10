# GreenCart Frontend README

## Overview

GreenCart is an eco-responsible e-commerce platform designed to connect local producers with engaged consumers, promoting short circuits and reducing food waste. The frontend is built using React.js with Tailwind CSS, ensuring a responsive, accessible, and sober digital experience. This README provides detailed instructions on setting up, developing, and deploying the frontend application.

The project aligns with principles of digital sobriety (optimized images, minimal JS/CSS), accessibility (WCAG AA compliance), and modern UI/UX for consumers, producers, and administrators.

Key features:
- User authentication and personalized dashboards.
- Product catalog with filters (category, region, DLC, price).
- Shopping cart, order history, and payment integration.
- AI-driven insights for producers (sales forecasts, client clustering).
- Admin dashboard for key metrics.

## Prerequisites

Before starting, ensure you have the following installed:
- Node.js (version 18 or higher recommended).
- npm or Yarn as package manager.
- Git for version control.

## Installation

1. **Clone the Repository**:
    - Run `git clone https://github.com/your-repo/greencart-frontend.git` (replace with actual repo URL).
    - Navigate to the project directory: `cd greencart-frontend`.

2. **Install Dependencies**:
    - Use `npm install` or `yarn install` to fetch all required packages, including React.js, Tailwind CSS, and any additional libraries (e.g., React Router for navigation, Axios for API calls).

3. **Configure Environment Variables**:
    - Create a `.env` file in the root directory.
    - Add the necessary variables, such as:
      ```
      REACT_APP_API_URL=http://localhost:5000/api  # Back-end API endpoint
      REACT_APP_STRIPE_PUBLIC_KEY=pk_test_...     # Stripe integration key
      REACT_APP_GOOGLE_ANALYTICS_ID=UA-...       # For analytics tracking
      ```
    - Ensure sensitive keys are not committed to version control (use `.gitignore`).

4. **Set Up Tailwind CSS**:
    - Tailwind is pre-configured in `tailwind.config.js`.
    - Customize themes (e.g., colors: green-soft `#A8DADC`, beige `#E9EDC9`, light-brown `#D4A373`, white `#FFFFFF`) as per the project charter.

## Development

1. **Start the Development Server**:
    - Run `npm start` or `yarn start`.
    - The app will be available at `http://localhost:3000`.
    - Hot reloading is enabled for efficient development.

2. **Project Structure**:
    - `src/`:
        - `components/`: Reusable UI elements (e.g., ProductCard, FilterBar, DashboardChart).
        - `pages/`: Main views (e.g., Home, Catalog, UserDashboard, ProducerDashboard, AdminDashboard).
        - `services/`: API utilities (e.g., authService.js for JWT handling, productService.js for catalog fetching).
        - `assets/`: Optimized images and icons (use lazy loading via React's `Suspense` or libraries like `react-lazy-load-image-component`).
        - `styles/`: Tailwind configurations and global CSS.
        - `App.js`: Root component with routing (using React Router v6).
        - `index.js`: Entry point.
    - `public/`: Static files, including index.html and favicon.

3. **Key Development Guidelines**:
    - **Responsiveness**: Use Tailwind's responsive utilities (e.g., `md:`, `lg:`) to ensure compatibility across mobile, tablet, and desktop.
    - **Accessibility (WCAG AA)**: Implement ARIA attributes, keyboard navigation (e.g., via `react-aria`), and sufficient color contrast (test with tools like WAVE or Lighthouse).
    - **Digital Sobriety**: Minimize bundle size (use code splitting with `React.lazy`), optimize images (compress via tools like ImageOptim), and limit third-party scripts.
    - **State Management**: Use React Context or Redux for global state (e.g., user auth, cart items).
    - **API Integration**: Connect to back-end API (REST/GraphQL) for data fetching. Example using Axios:
      ```jsx
      import axios from 'axios';
 
      const fetchProducts = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
          return response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
      ```
    - **Authentication**: Implement JWT-based auth with protected routes (using `react-router-dom` guards).

4. **Feature Breakdown**:
    - **Consumer Features**:
        - Account creation/login.
        - Filtered catalog (implement with React hooks like `useState` for filters).
        - Product details, cart management (localStorage or Redux persist).
        - Dashboard: Display carbon footprint and savings using charts (e.g., Chart.js or Recharts).
    - **Producer Features**:
        - Product management (CRUD operations via API).
        - AI Dashboard: Integrate sales predictions and clustering visuals (fetch data from back-end IA modules).
    - **Admin Features**:
        - Metrics dashboard: Use libraries like Recharts for visualizations of sales, unsold items, and geographic zones.

## Testing

1. **Unit and Integration Tests**:
    - Use Jest and React Testing Library: `npm test` or `yarn test`.
    - Cover components, hooks, and API interactions. Example test:
      ```jsx
      import { render, screen } from '@testing-library/react';
      import ProductCard from './components/ProductCard';
 
      test('renders product name', () => {
        render(<ProductCard name="Apple" price={1.5} />);
        expect(screen.getByText(/Apple/i)).toBeInTheDocument();
      });
      ```

2. **Accessibility Tests**:
    - Run automated audits with `react-axe` or Lighthouse in Chrome DevTools.
    - Manual tests: Keyboard navigation, screen reader compatibility (e.g., VoiceOver or NVDA).

3. **Performance Tests**:
    - Use React DevTools Profiler to identify bottlenecks.
    - Ensure page load < 3s, with lazy loading for images and components.

## Deployment

1. **Build the Application**:
    - Run `npm run build` or `yarn build` to create an optimized production build in the `build/` folder.

2. **Hosting Options**:
    - Deploy to eco-friendly providers like OVHcloud or Scaleway (configure HTTPS via Let's Encrypt).
    - Use Netlify, Vercel, or AWS for CI/CD: Connect Git repo for automatic builds.
    - Example Netlify deployment: Drag `build/` folder or link repo.

3. **Environment Configuration **:
    - Set production env vars on the hosting platform.
    - Enable security: HTTPS enforcement, CORS for API.

## Contributing

1. **Guidelines**:
    - Follow Agile sprints: Use Trello/Notion for task management.
    - Code style: ESLint with Prettier (run `npm run lint`).
    - Commit conventions: Use semantic commits (e.g., "feat: add cart functionality").

2. **Pull Requests**:
    - Fork the repo, create a branch (`git checkout -b feature/new-feature`).
    - Submit PR with detailed description and tests.

## License

This project is licensed under the MIT License. See `LICENSE` file for details.

## Contact

For questions, contact the project lead: Lucie (founder) at [email protected].

This README is part of the GreenCart MVP documentation. For full project specs, refer to the "Cahier des charges complet – Projet GreenCart.pdf".