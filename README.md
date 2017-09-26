# The Movie Buff : A Single-page Progressive Web App (PWA) built using React, Redux, Service Worker, Workbox, Webpack3, Express and NodeJS.

[Live Demo](https://themoviebuff.herokuapp.com/ "The Movie Buff")

![Demo of the app](/docs/themoviebuff.gif?raw=true "The Movie Buff")

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

## Application architecture/ Technical stack
The REST API powering the app is hosted as a standalone application built using Express and NodeJS. [Here](https://github.com/RajaPradhan/moviebuff-api) is the code. The frontend is a SPA built using React, Redux that is served using
a bare minimum express server.

Following are the key technologies used in the frontend and backend:

### Frontend
+ [React 16.x](https://facebook.github.io/react/)
+ [Redux](http://redux.js.org/)
+ [Redux Thunk](https://github.com/gaearon/redux-thunk)
+ [React Router 4](https://reacttraining.com/react-router/)
+ [Webpack 3](https://webpack.js.org/)
+ [Workbox](https://workboxjs.org/)
+ [Prettier](https://github.com/prettier/prettier)
+ [Materialize CSS](http://materializecss.com/)
+ [PostCSS](http://postcss.org/)
+ [SASS](http://sass-lang.com/)
+ [Lodash](https://lodash.com/)

### Backend
+ [NodeJS](https://nodejs.org/)
+ [Express JS](https://expressjs.com/)

### Auditing
+ [Lighthouse](https://developers.google.com/web/tools/lighthouse/)

## Yarn scripts
```javascript
yarn install - Installs dependencies
yarn run dev - Starts the Webpack dev server
yarn run start - Starts an Express server to serve our app
yarn run build - Builds the app for deployment
yarn run lint - Lints src/
yarn run lint:fix - Lint check + Fix errors
```

## MIT Licensed

