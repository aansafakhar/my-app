import gql from 'graphql-tag';
export const SIGNIN_USER = gql`
mutation($email: String!, $password: String!) {
  signIn(
    email: $email,
    password: $password
  ) {
    email
    accessToken
  }
}
`;
