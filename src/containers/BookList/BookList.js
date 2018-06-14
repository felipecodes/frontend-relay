// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

const BookList = (props) => {
  console.log('BookList -> ', props);
  return <div>BookList</div>;
};

const BookListContainer = createFragmentContainer(
  BookList,
  graphql`
    fragment BookList_books on Query {
      books {
        edges {
          node {
            title
          }
        }
      }
    }
  `,
);

export default BookListContainer;
