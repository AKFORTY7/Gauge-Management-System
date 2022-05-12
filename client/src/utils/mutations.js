import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        isAdmin
      }
    }
  }
`;

export const LOGIN_ADMIN = gql`
  mutation adminlogin($adminEmail: String!, $adminPassword: String!) {
    adminlogin(adminEmail: $adminEmail, adminPassword: $adminPassword) {
      token
      admin {
        _id
        adminName
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GAUGE = gql`
  mutation AddGauge($gaugeName: String!, $category: ID!, $currentInventory: Int!) {
    addGauge(gauge_name: $gaugeName, category: $category, current_inventory: $currentInventory) {
      _id
      gauge_name
      category {
       _id
     }
    }
  }
`;

// {  "gaugeName": "M10 x 1.0 -6g",
//   "category": "627cd6673dd5721c609edc64",
//   "currentInventory": 3
// }

export const ADD_CATEGORY = gql`
  mutation addCategory($categoryName: String!) {
    addCategory(category_name: $categoryName) {
      _id
      category_name
    }
  }
`;

// {
//   "categoryName": "bolts"
// }





export const BORROW_GAUGE = gql`
  mutation addThought($gaugeText: String!) {
    addgauge(gaugeText: $gaugeText) {
      _id
      gauge_name
      category
      current_inventory
      inhouse_PN
    }
  }
`;



export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
