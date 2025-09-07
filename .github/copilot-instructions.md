This is a Create React App project using a custom Bootstrap-based theme. It combines modern React with some legacy jQuery plugins. Here's a guide to help you navigate the codebase.

### Architecture

The application is built with React, but it integrates a significant amount of jQuery-based plugins, especially for tables (DataTables) and other UI elements. The overall structure is a mix of a traditional multi-page admin template and a single-page application.

- **Main Entry Point**: `src/index.js` renders the main `App` component.
- **App Shell**: `src/app.jsx` is the core layout component. It sets up the main structure including the header, sidebar, and content area.
- **Routing**: Routing is handled by `react-router-dom`. The routes are defined in `src/config/app-route.jsx`.
- **Styling**: The project uses Sass for styling, with a main entry file at `src/scss/styles.scss`. The theme is heavily customized and built on top of Bootstrap.
  - To change theme colors, fonts, or other global styles, edit the variables in `src/scss/_variables.scss` and `src/scss/_variables-dark.scss`.
- **jQuery Integration**: The project uses jQuery. You'll find its usage for plugins that don't have a native React equivalent in this template. Be mindful of how React and jQuery interact, especially regarding DOM manipulation.

### Developer Workflow

- **Installation**: Run `npm install` to get all the dependencies.
- **Development**: Use `npm start` to run the app in development mode.
- **Building**: Use `npm run build` to create a production build.

### Key Files and Directories

- `src/components/`: Contains reusable React components that are used across the application (e.g., `Header`, `Sidebar`, `Footer`).
- `src/pages/`: These are the main views for each route.
- `src/config/`: This directory is for application-level configuration.
  - `app-menu.jsx`: Defines the navigation links for the sidebar. To add or remove items from the sidebar, you should edit this file.
  - `app-route.jsx`: Defines all the application routes.
- `src/scss/`: This is where all the custom styles live. The file structure is modular, with different parts of the UI styled in separate files.
- `public/`: Static assets are placed here.

### Conventions

- **Component Structure**: Components are typically in their own folder with a JSX file (e.g., `src/components/card/card.jsx`).
- **Styling**: Follow the existing Sass structure. For component-specific styles, you can create a new `.scss` file and import it into a relevant higher-level file.
- **State Management**: The project primarily uses React's component state. For global state, it uses React's Context API, which you can see in action in `src/app.jsx`.
