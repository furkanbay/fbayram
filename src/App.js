import React from 'react';
import './style/app.sass';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop.js'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <ScrollToTop> 
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/hakkimizda" exact strict component={About} />

          <Route component={Error} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
