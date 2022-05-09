import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_CATEGORIES = gql`
query categories {
  categories {
    _id
    category_name
  }
}
`;

export const QUERY_GAUGES = gql`
query gauges {
  gauges {
    _id
    gauge_name
    category {
      _id
      category_name
    }
    current_inventory
    quantity_borrowed
    inhouse_PN
    createdAt
  }
}
`;


export const QUERY_SINGLE_GAUGE = gql`
  query getSingleGauge($gaugeName: String!) {
  gauge(gauge_name: $gaugeName) {
    gauge_name
    category {
      _id
      category_name
    }
    current_inventory
    quantity_borrowed
    inhouse_PN
    createdAt
  }
}
`;

// export const QUERY_SINGLE_THOUGHT = gql`
//   query getSingleThought($thoughtId: ID!) {
//     thought(thoughtId: $thoughtId) {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//       comments {
//         _id
//         commentText
//         commentAuthor
//         createdAt
//       }
//     }
//   }
// `;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
      }
    }
  }
`;
