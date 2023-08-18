import { gql } from '@apollo/client';

export const GET_USERS = gql`
query{
    login(email: asds, password: safsdf){
        id
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;