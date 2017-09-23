import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'routes/Home';
import Details from 'routes/Details';
import Footer from 'components/Footer';

const App = () => (
  <main>
    <Header />

    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/movies/details/:id" exact component={Details} />
    </Switch>

    <Footer />
  </main>
);

export default App;
