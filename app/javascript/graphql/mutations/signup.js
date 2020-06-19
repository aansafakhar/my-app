import gql from 'graphql-tag';
export const SIGNUP_USER = gql`
mutation($email: String!, $password: String!) {
  signUp(
    email: $email,
    password: $password
  ) {
    email
    accessToken
  }
}
`;
