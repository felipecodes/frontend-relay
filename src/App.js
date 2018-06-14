import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import BookList from './containers/BookList';
import CategoryNavigation from './containers/CategoryNavigation';

const App = () => (
  <Router>
    <div>
      <Header />
      <CategoryNavigation />
      <Route exact path="/" component={Welcome} />
      <Route path="/books" component={BookList} />
    </div>
  </Router>
);

export default App;
