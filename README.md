# Sample project

This project shows a minimun reproducible error for https://github.com/crxjs/chrome-extension-tools/pull/751

This is the current config

```js
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({ inject: { data: { title: "Vite React App" } } }), // comment this line in order solve the issue
    crx({ manifest }),
  ],
});
```
