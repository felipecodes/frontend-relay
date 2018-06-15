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
      query BooksQuery($count: Int, $cursor: String) {
        ...BookList_query
      }
    `}
    // location.path can be /books/programming/python
    variables={{ cursor: null, count: 1 }}
    render={({ error, props }) => {
      if (error) return <div>Error</div>;

      if (!props) return <div>Loading...</div>;

      return (
        <Fragment>
          {/* <CategoryNavigation categories={renderProps.categories} /> */}
          <BookList query={props} />
        </Fragment>
      );
    }}
  />
);

export default Books;
