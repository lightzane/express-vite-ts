# Express Vite TypeScript

All-in-one app for Express with Vite dev server to serve static html and TS files.

If you want to quickly build tests/mini POC/demo between client and server (Node.js / Express) but still want to use TypeScript then this is the right setup for you!

This setup enables you to share TypeScript files (_e.g. general utils_) seamlessly between the client and server. When sharing code, ensure it uses only JavaScript features that are available in both browser and Node.js environments. For example, avoid using Node.js-specific objects like `Buffer` or browser-specific objects like `window` in shared files.

## Getting Started

```bash
pnpm install
pnpm dev
```
