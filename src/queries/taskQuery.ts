import { gql } from '@apollo/client';

export const GET_TASKS = gql`
  query ($userId: String) {
    getTasks(userId: $userId) {
      completed
      id
      title
    }
  }
`;

export const CREATE_TASK = gql`
  mutation ($userId: String!, $title: String!) {
    createTask(userId: $userId, title: $title) {
      completed
      id
      title
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation ($id: String, $title: String, $completed: Boolean) {
    updateTask(
      UpdateTaskInput: { title: $title, id: $id, completed: $completed }
    ) {
      completed
      id
      title
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($taskId: String!) {
    deleteTask(taskId: $taskId) {
      completed
      id
      title
    }
  }
`;
