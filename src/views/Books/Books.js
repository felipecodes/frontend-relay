import React, { Fragment } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
// import CategoryNavigation from '../../containers/CategoryNavigation';
import BookList from '../../containers/BookList';
import environment from '../../environment';

// location is a property from react-router-dom
const Books = () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query BooksQuery {
        ...BookList_books
      }
    `}
    // location.path can be /books/programming/python
    variables={{}}
    render={({ error, props }) => {
      if (error) return <div>Error</div>;

      if (!props) return <div>Loading...</div>;

      return (
        <Fragment>
          {/* <CategoryNavigation categories={renderProps.categories} /> */}
          <BookList />
        </Fragment>
      );
    }}
  />
);

export default Books;
