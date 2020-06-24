import gql from 'graphql-tag';
export const SIGNUP_USER = gql`
mutation($email: String!, $password: String!,$firstName: String!,$lastName: String!) {
  signUp(
    email: $email,
    password: $password,
    firstName: $firstName,
    lastName: $lastName,
  ) {
    email
    accessToken
    firstName
    lastName
  }
}
`;
