/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($owner: String!) {
    onCreateNote(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($owner: String!) {
    onUpdateNote(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($owner: String!) {
    onDeleteNote(owner: $owner) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      title
      professor
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
      id
      title
      professor
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
      id
      title
      professor
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
