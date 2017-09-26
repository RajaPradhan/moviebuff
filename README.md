# The Movie Buff : A Single-page Progressive Web App (PWA) built using React, Redux, Service Worker, Workbox, Webpack3, Express and NodeJS.

[Live Demo](https://themoviebuff.herokuapp.com/ "The Movie Buff")

## Key concepts used in the application
+ PRPL pattern with minimal application core
+ Route based chunking with React Router 4 and import()
+ Automatic common chunk bundling
+ CSS Modules
+ Service Workers management using Workbox
+ Webpack 3

## Lighthouse audit score
![Screenshot of Lighthouse audit](/docs/lighthouse_audit.PNG)

## Webpack performance budgets
There is a webpack configuration to warn us if any of the chunk exceeds 300kB, thereby impacting user experience:
```javascript
performance: {
  maxAssetSize: 300000,
  maxEntrypointSize: 300000,
  hints: 'warning'
}
```
![Screenshot of Performance Budget](/docs/performance_budgets.PNG)

