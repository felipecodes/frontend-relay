import React from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../../environment';

export default () => (
  <QueryRenderer
    environment={environment}
    query={graphql`
      query BookListQuery {
        books {
          edges {
            cursor
            node {
              title
            }
          }
        }
      }
    `}
    variables={{}}
    render={({ error, props }) => {
      if (error) return <div>Error!</div>;
      if (!props) return <div>Loading...</div>;
      return <div>{JSON.stringify(props)}</div>;
    }}
  />
);
