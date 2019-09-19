import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const WHO_AM_I = gql`
  query whoAmI @client {
    me {
      id,
      email,
      name
    }
  }
`;

export default function () {
  return (
    <Query query={WHO_AM_I}>
      {(data) => (
        <div>
          {data && data.name
            ? `Logged in is ${data.name}.`
            : 'Not logged in.'}
        </div>
      )}
    </Query>
  );
}
