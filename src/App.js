import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './views/Home';
import Books from './views/Books';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={Books} />
    </div>
  </Router>
);

export default App;
