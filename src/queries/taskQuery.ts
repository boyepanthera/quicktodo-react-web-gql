import { gql } from '@apollo/client';

const GET_TASKS = gql`
  query {
    user(id: "633c4ddc2e1104f3a4c8c805") {
      id
      firstName
      email
      tasks {
        completed
        id
        title
      }
    }
  }
`;

export default GET_TASKS;
