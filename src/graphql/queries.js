/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      note
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        note
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        professor
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchNotes = /* GraphQL */ `
  query SearchNotes(
    $filter: SearchableNoteFilterInput
    $sort: SearchableNoteSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchNotes(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        note
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
export const searchCourses = /* GraphQL */ `
  query SearchCourses(
    $filter: SearchableCourseFilterInput
    $sort: SearchableCourseSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchCourses(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        professor
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
    }
  }
`;
