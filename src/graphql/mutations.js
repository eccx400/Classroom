/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      accountType
      description
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      accountType
      description
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      name
      accountType
      description
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudents = /* GraphQL */ `
  mutation CreateStudents(
    $input: CreateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    createStudents(input: $input, condition: $condition) {
      id
      name
      year
      credits
      courses {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        studentsincourse {
          id
          name
          year
          credits
          grade
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        owner
      }
      grade
      createdAt
      updatedAt
    }
  }
`;
export const updateStudents = /* GraphQL */ `
  mutation UpdateStudents(
    $input: UpdateStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    updateStudents(input: $input, condition: $condition) {
      id
      name
      year
      credits
      courses {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        studentsincourse {
          id
          name
          year
          credits
          grade
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        owner
      }
      grade
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudents = /* GraphQL */ `
  mutation DeleteStudents(
    $input: DeleteStudentsInput!
    $condition: ModelStudentsConditionInput
  ) {
    deleteStudents(input: $input, condition: $condition) {
      id
      name
      year
      credits
      courses {
        id
        creator
        category
        coursename
        coursedescription
        studentsenrolled
        labels
        studentsincourse {
          id
          name
          year
          credits
          grade
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        owner
      }
      grade
      createdAt
      updatedAt
    }
  }
`;
export const createCourseByProf = /* GraphQL */ `
  mutation CreateCourseByProf(
    $input: CreateCourseByProfInput!
    $condition: ModelCourseByProfConditionInput
  ) {
    createCourseByProf(input: $input, condition: $condition) {
      id
      creator
      category
      coursename
      coursedescription
      studentsenrolled
      labels
      studentsincourse {
        id
        name
        year
        credits
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
          createdAt
          updatedAt
          owner
        }
        grade
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCourseByProf = /* GraphQL */ `
  mutation UpdateCourseByProf(
    $input: UpdateCourseByProfInput!
    $condition: ModelCourseByProfConditionInput
  ) {
    updateCourseByProf(input: $input, condition: $condition) {
      id
      creator
      category
      coursename
      coursedescription
      studentsenrolled
      labels
      studentsincourse {
        id
        name
        year
        credits
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
          createdAt
          updatedAt
          owner
        }
        grade
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCourseByProf = /* GraphQL */ `
  mutation DeleteCourseByProf(
    $input: DeleteCourseByProfInput!
    $condition: ModelCourseByProfConditionInput
  ) {
    deleteCourseByProf(input: $input, condition: $condition) {
      id
      creator
      category
      coursename
      coursedescription
      studentsenrolled
      labels
      studentsincourse {
        id
        name
        year
        credits
        courses {
          id
          creator
          category
          coursename
          coursedescription
          studentsenrolled
          labels
          createdAt
          updatedAt
          owner
        }
        grade
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
