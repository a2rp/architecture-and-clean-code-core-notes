# Architecture and Clean Code - Documentation

This document describes the current structure, behavior, routing, navigation, theming, responsive layout, deployment setup, and maintenance approach used in the Architecture and Clean Code - Core Notes application.

---

## Project Overview

Architecture and Clean Code - Core Notes is a React-based reference application for software architecture, clean code, design principles, code quality, scalability, and maintainability.

The application is organized as a routed documentation interface with:

- a persistent desktop sidebar
- a mobile navigation drawer
- searchable topic navigation
- independently scrollable content
- lazy-loaded topic pages
- theme switching
- route-aware scroll behavior
- reusable layout components
- Vercel SPA deployment support

---

## Main Goals

The project is designed to provide a structured and practical reference for software engineering topics while keeping the application itself maintainable and easy to extend.

The main goals are:

- keep each topic isolated as its own routed page
- keep navigation data centralized
- avoid unnecessary component coupling
- support both desktop and mobile navigation
- preserve active-route visibility
- reduce initial bundle loading through route-based lazy loading
- keep global styling predictable
- support light and dark themes
- provide clear deployment behavior for BrowserRouter routes

---

## Current Project Structure

```text
src/
│
├── components/
│   ├── footer/
│   │   ├── index.jsx
│   │   └── styled.js
│   │
│   ├── goToTop/
│   │   ├── index.jsx
│   │   └── styled.js
│   │
│   ├── layout/
│   │   ├── index.jsx
│   │   └── styled.js
│   │
│   ├── loader/
│   │   ├── index.jsx
│   │   └── styled.js
│   │
│   └── sidebar/
│       ├── index.jsx
│       └── styled.js
│
├── data/
│   └── navigation.js
│
├── pages/
│   ├── abstraction/
│   ├── architecture/
│   ├── cleanCode/
│   ├── codeReadability/
│   ├── codeSmells/
│   ├── compositionOverInheritance/
│   ├── configuration/
│   ├── couplingAndCohesion/
│   ├── dependencyManagement/
│   ├── designPrinciples/
│   ├── documentation/
│   ├── dry/
│   ├── encapsulation/
│   ├── errorHandling/
│   ├── functions/
│   ├── home/
│   ├── kiss/
│   ├── logging/
│   ├── maintainabilityChecklist/
│   ├── naming/
│   ├── projectStructure/
│   ├── refactoring/
│   ├── scalability/
│   ├── separationOfConcerns/
│   ├── solid/
│   ├── testing/
│   ├── validation/
│   └── yagni/
│
├── App.jsx
├── App.styled.js
├── index.css
├── main.jsx
└── theme.css
```

---

## Route Architecture

The application uses React Router with `BrowserRouter`.

Each major topic is represented by its own route.

Examples:

```text
/
 /architecture
 /clean-code
 /design-principles
 /solid
 /dry
 /kiss
 /yagni
 /separation-of-concerns
 /coupling-and-cohesion
 /abstraction
 /encapsulation
 /composition-over-inheritance
 /project-structure
 /naming
 /functions
 /code-readability
 /error-handling
 /validation
 /logging
 /configuration
 /documentation
 /refactoring
 /code-smells
 /testing
 /dependency-management
 /scalability
 /maintainability-checklist
```

Unknown routes are redirected back to the root route.

---

## Lazy Loading

All topic pages are lazy loaded using `React.lazy`.

This keeps route components in separate production chunks instead of loading every page in the initial bundle.

Example concept:

```jsx
const Architecture = lazy(() => import("./pages/architecture"));
```

The route content is rendered inside a `Suspense` boundary.

---

## Suspense Loader

The Suspense fallback is handled by the dedicated Loader component.

Files:

```text
src/components/loader/index.jsx
src/components/loader/styled.js
```

The loader is intentionally small and theme-aware.

It also respects reduced-motion preferences.

---

## Navigation Data

Sidebar navigation is centralized in:

```text
src/data/navigation.js
```

The sidebar does not maintain its own hardcoded topic list.

This allows the same navigation data to support:

- desktop navigation
- mobile navigation
- active-route highlighting
- topic search
- future navigation extensions

---

## Sidebar Structure

The sidebar has four main regions:

```text
Brand and Introduction
Search
Scrollable Navigation
Theme and External Links
```

The search area remains fixed while only the navigation list scrolls.

The bottom controls also remain fixed.

---

## Sidebar Search

The sidebar includes live topic search.

Search behavior includes:

- case-insensitive matching
- topic-label matching
- navigation-group matching
- instant filtering
- clear button when text is present
- empty-result message
- restore full navigation after clearing

If a group name matches the search text, all topics inside that group are shown.

Example:

```text
Search: architecture
```

can surface the relevant Architecture and Maintenance group.

---

## Active Route Behavior

The active navigation item is highlighted using `NavLink`.

When the current route changes or the page is reloaded, the active item is automatically scrolled into view.

The active link is positioned near the center of the sidebar viewport using:

```js
scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
});
```

When search text is active, automatic centering is temporarily avoided so the filtered result experience remains stable.

---

## Desktop Layout

On desktop:

- the sidebar remains fixed on the left
- the content area occupies the remaining width
- the sidebar and content scroll independently
- the browser body itself does not scroll

The layout uses a dedicated full-height shell.

---

## Content Scrolling

The main content area owns its own vertical scrollbar.

This allows:

- fixed desktop navigation
- independent content scrolling
- reliable route-change scroll control
- predictable Go to Top behavior

The content element is controlled through a React ref.

---

## Route Change Scroll Behavior

Whenever the route changes, the main content container automatically scrolls back to the top.

The behavior uses smooth scrolling when motion preferences allow it.

Concept:

```js
contentElement.scrollTo({
    top: 0,
    behavior: "smooth",
});
```

---

## Go to Top

The Go to Top button is implemented as a dedicated reusable component.

Files:

```text
src/components/goToTop/index.jsx
src/components/goToTop/styled.js
```

The button becomes visible after the content area passes a standard threshold of:

```text
300px
```

Clicking the button smoothly returns the content area to the top.

The button is responsive and remains accessible on mobile layouts.

---

## Mobile Navigation

At smaller viewport widths, the desktop sidebar is hidden.

The application displays a fixed mobile header with a menu button.

The menu opens a slide-out navigation drawer.

Mobile navigation behavior includes:

- overlay behind the drawer
- close button
- close on overlay click
- close on Escape
- close after route navigation
- body scroll locking while the drawer is open
- automatic closing when resizing back to desktop

The mobile drawer reuses the same Sidebar component used on desktop.

---

## Footer

The footer is displayed at the bottom of the routed content area.

Files:

```text
src/components/footer/index.jsx
src/components/footer/styled.js
```

The footer stays after page content on long pages.

On shorter pages, the layout structure allows the footer to remain near the bottom of the viewport.

The footer includes:

- copyright
- author credit
- portfolio link

---

## Theme System

Theme variables are defined in:

```text
src/theme.css
```

The application supports:

```text
light
dark
```

The current theme is applied through:

```html
data-theme="light"
```

or:

```html
data-theme="dark"
```

---

## Theme Persistence

The selected theme is stored in `localStorage`.

Storage key:

```text
architecture-clean-code-theme
```

On first use, the application can use the system color preference to select the initial theme.

After the user changes the theme, the selected value is reused on later visits.

---

## Theme Variables

The application uses semantic CSS variables instead of component-specific color values.

Examples:

```css
--background-color
--surface-color
--surface-soft-color

--text-color
--text-soft-color
--text-muted-color

--border-color
--border-strong-color

--hover-color

--active-color
--active-text-color

--code-background-color
--code-text-color

--scrollbar-track-color
--scrollbar-thumb-color
```

This keeps component styling consistent across themes.

---

## Global CSS

Global styling is defined in:

```text
src/index.css
```

The reset includes:

```css
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

The global base font size is:

```text
16px
```

The application uses Verdana as the primary body font.

---

## Scrollbars

Custom scrollbar variables are used for both themes.

The application supports:

- standard scrollbar properties
- WebKit scrollbar styling
- hover states
- theme-aware scrollbar colors

---

## Accessibility

The interface includes several accessibility-focused behaviors:

- focus-visible outlines
- button labels
- navigation labels
- status semantics for the loader
- reduced-motion support
- Escape-key mobile drawer closing
- keyboard-accessible controls
- semantic page headers
- clear button labels

---

## Reduced Motion

The global CSS respects:

```css
@media (prefers-reduced-motion: reduce);
```

When enabled:

- smooth scrolling is disabled
- animations are reduced
- transitions are minimized

---

## Responsive Behavior

Important responsive breakpoints are handled inside component styles.

Major behavior changes occur around:

```text
900px
600px
480px
```

The desktop sidebar is replaced by mobile navigation below the desktop breakpoint.

Content padding also decreases progressively on smaller screens.

---

## Page Organization

All route-level content belongs under:

```text
src/pages/
```

Reusable interface components belong under:

```text
src/components/
```

Navigation data belongs under:

```text
src/data/
```

This keeps routed content separate from reusable UI.

---

## Page File Pattern

Most pages use:

```text
pageName/
├── index.jsx
└── styled.js
```

The JSX file contains:

- page content
- page structure
- icons
- examples
- checklists

The styled file contains:

- layout
- typography
- responsive behavior
- page-specific UI styling

---

## Styling Approach

The project uses `styled-components`.

Reusable component styles remain isolated to their components.

Page-specific styles remain inside each page folder.

Global concerns such as resets and theme variables remain in:

```text
src/index.css
src/theme.css
```

---

## Deployment

The application is configured for Vercel deployment.

The project uses BrowserRouter, so direct route requests require SPA rewriting.

The root file:

```text
vercel.json
```

contains a rewrite that serves the React application for route requests.

Example:

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

This allows direct visits and browser reloads on routes such as:

```text
/solid
/testing
/scalability
```

without returning a server-side 404.

---

## Vite Configuration

The project uses Vite without a GitHub Pages base path.

This is appropriate for root deployment on Vercel.

Production configuration includes:

- React plugin
- disabled source maps
- ES2019 build target
- disabled development CSS source maps

---

## Available Commands

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Check dependencies:

```bash
npm audit
```

---

## Production Build

The production build has been verified successfully.

The application currently builds using Vite without compile errors.

Route-level lazy loading produces separate JavaScript chunks for topic pages.

---

## Dependency Security

The dependency tree was reviewed using:

```bash
npm audit
```

Security fixes were applied through:

```bash
npm audit fix
```

The current audit result is:

```text
found 0 vulnerabilities
```

---

## Dependency Cleanup

Unused `prop-types` was removed after confirming that no source file imported or referenced it.

The unused Vite build global:

```text
__APP_BUILD_ISO__
```

was also removed after confirming that it was not referenced by application code.

---

## Content Areas

The current application covers four broad groups.

### Foundation

- Overview
- Architecture
- Clean Code

### Principles

- Design Principles
- SOLID
- DRY
- KISS
- YAGNI
- Separation of Concerns
- Coupling and Cohesion
- Abstraction
- Encapsulation
- Composition over Inheritance

### Code Quality

- Project Structure
- Naming
- Functions
- Code Readability
- Error Handling
- Validation
- Logging
- Configuration
- Documentation
- Refactoring
- Code Smells
- Testing and Testability

### Architecture and Maintenance

- Dependency Management
- Scalability
- Maintainability Checklist

---

## Maintenance Guidelines

When adding a new topic:

1. Create a new page folder under `src/pages`.
2. Add `index.jsx`.
3. Add `styled.js`.
4. Add the route using lazy loading in `src/App.jsx`.
5. Add the navigation entry in `src/data/navigation.js`.
6. Test desktop navigation.
7. Test mobile navigation.
8. Test direct route access.
9. Test browser reload on the route.
10. Run the production build.

---

## Before Committing

Recommended checks:

```bash
npm audit
npm run build
git status
```

Also verify:

- navigation search works
- active route highlights correctly
- active menu item centers on reload
- theme switching works
- theme persists after reload
- route changes scroll content to top
- Go to Top appears after scrolling
- mobile drawer opens and closes correctly
- footer appears after content
- direct routes work in deployed environments

---

## License

This project is licensed under the MIT License.

See:

```text
LICENSE
```

---

## Author

**Ashish Ranjan**

Full-Stack Web Developer

---

## Links

- Portfolio: https://www.ashishranjan.net
- GitHub: https://github.com/a2rp
- CodePen: https://codepen.io/ash1198
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
- YouTube: https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1
- Email: mailto:ash[.ranjan09@gmail.com](mailto:.ranjan09@gmail.com)

## Support

- Support: https://a2rp-donation-page.netlify.app/
- Buy Me A Coffee: https://buymeacoffee.com/a2rp
- Patreon: https://patreon.com/a2rp

## License

This project is licensed under the MIT License.
