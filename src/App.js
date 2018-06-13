import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import BookList from './containers/BookList';
import CategoryList from './containers/CategoryList';

const App = () => (
  <Router>
    <div>
      <Header />
      <CategoryList />
      <Link to="/books">books hehe</Link>
      <Route exact path="/" component={Welcome} />
      <Route path="/books" component={BookList} />
    </div>
  </Router>
);

export default App;
