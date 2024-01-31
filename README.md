# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Create ".env" file in root directory with the following Stripe environment variables and enter the keys as strings:
`VITE_STRIPE_PUBLISHABLE_KEY=""`

`STRIPE_SECRET_KEY=""`

This will help test payments in netlify-cli.

Run: `netlify dev`
