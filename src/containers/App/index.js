import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'routes/Home';
import Footer from 'components/Footer';

const App = () => (
  <main>
    <Header />

    <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>

    <Footer />
  </main>
);

export default App;
