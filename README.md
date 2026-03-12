
# React Core Concepts

React is the library for web and native user interfaces. Build user  interfaces out of individual pieces called components written in JavaScript.

## Project Structure
```
React-Core-Concept/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, fonts, etc.
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   ├── index.css                # Global styles
│   ├── conditional-Rendering.jsx
│   ├── library.jsx
│   └── Todo.jsx
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Essential React Concepts to Learn
### **Fundamentals**
1. **Components** - Building blocks of React apps (Functional & Class components)
2. **JSX** - JavaScript XML syntax
3. **Props** - Pass data from parent to child components
4. **State** - Manage dynamic data within components
5. **Events** - Handle user interactions (onClick, onChange, etc.)

### **React Hooks**
6. **useState** - Manage state in functional components
7. **useEffect** - Handle side effects (data fetching, subscriptions)
8. **useRef** - Access DOM elements or persist values
9. **useContext** - Share data without prop drilling
10. **useReducer** - Complex state management
11. **useMemo** - Optimize performance by memoizing values
12. **useCallback** - Memoize functions to prevent re-renders

### **Important Concepts**
13. **Conditional Rendering** - Show/hide components based on conditions
14. **Lists & Keys** - Render arrays of data with unique keys
15. **Forms & Controlled Components** - Handle form inputs with state
16. **Component Lifecycle** - Understanding mounting, updating, unmounting
17. **Event Handling** - Binding and handling events properly
18. **Props Destructuring** - Cleaner way to use props
19. **Children Props** - Pass components as children

### **Advanced Concepts**
20. **Context API** - Global state management
21. **Custom Hooks** - Create reusable hook logic
22. **Higher-Order Components (HOC)** - Wrap components for reusability
23. **React Router** - Navigation and routing in SPA
24. **React Fragments** - Group elements without extra DOM nodes
25. **Portal** - Render children outside parent DOM hierarchy
26. **Error Boundaries** - Catch JavaScript errors in components
27. **Code Splitting** - Lazy loading components with React.lazy()
28. **Refs & Forward Refs** - Access child components imperatively

### **Performance Optimization**
29. **Memoization** - React.memo() to prevent unnecessary re-renders
30. **Virtual DOM** - Understanding how React updates efficiently
31. **Reconciliation** - How React compares and updates DOM
32. **Pure Components** - Components that don't re-render on same props

### **Modern Practices**
33. **Functional Components over Class Components**
34. **React DevTools** - Debug and inspect React apps
35. **Component Composition over Inheritance**
36. **Lifting State Up** - Share state between components
37. **Prop Types / TypeScript** - Type checking for props
38. **CSS Modules / Styled Components** - Component-level styling
39. **Environment Variables** - Manage configurations
40. **Strict Mode** - Identify potential problems in development

