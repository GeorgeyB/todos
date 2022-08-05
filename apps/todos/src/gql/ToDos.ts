import { gql } from '@apollo/client';

export const GET_TO_DOS = gql`
  query GetTodos {
    toDos {
      id
      body
      done
    }
  }
`;

export const CREATE_TO_DO = gql`
  mutation CreateToDo($body: String!) {
    createToDo(body: $body) {
      body
    }
  }
`;

export const UPDATE_TO_DO = gql`
  mutation UpdateToDo($id: Int!, $body: String!) {
    updateToDo(id: $id, body: $body) {
      body
    }
  }
`;

export const MARK_TO_DO_DONE = gql`
  mutation MarkToDoDone($id: Int!) {
    markToDoDone(id: $id) {
      id
      body
      done
    }
  }
`;

export const MARK_TO_DO_UNDONE = gql`
  mutation MarkToDoUndone($id: Int!) {
    markToDoUndone(id: $id) {
      id
      body
      done
    }
  }
`;
