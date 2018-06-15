// @flow

import React from 'react';
import { graphql, createPaginationContainer } from 'react-relay';
// eslint-disable-next-line camelcase
import { type BookList_query } from './__generated__/BookList_query.graphql';

type Props = {
  // eslint-disable-next-line camelcase
  query: BookList_query,
};

const BookList = (props: Props) => {
  if (props.query.books.edges) {
    return (
      <ul>{props.query.books.edges.map(({ node }) => <li key={node.id}>{node.title}</li>)}</ul>
    );
  }
  return null;
};

export default createPaginationContainer(
  BookList,
  graphql`
    fragment BookList_query on Query {
      books(first: $count, after: $cursor) @connection(key: "BookList_books") {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `,
  {
    direction: 'forward',
    getConnectionFromProps: props => props.query && props.query.books,
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }) {
      return {
        count,
        cursor,
      };
    },
    query: graphql`
      query BookListPaginationQuery($count: Int!, $cursor: String) {
        ...BookList_query
      }
    `,
  },
);
