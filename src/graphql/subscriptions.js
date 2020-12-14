/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateStudents = /* GraphQL */ `
  subscription OnCreateStudents {
    onCreateStudents {
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
export const onUpdateStudents = /* GraphQL */ `
  subscription OnUpdateStudents {
    onUpdateStudents {
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
export const onDeleteStudents = /* GraphQL */ `
  subscription OnDeleteStudents {
    onDeleteStudents {
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
export const onCreateCourseByProf = /* GraphQL */ `
  subscription OnCreateCourseByProf {
    onCreateCourseByProf {
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
export const onUpdateCourseByProf = /* GraphQL */ `
  subscription OnUpdateCourseByProf {
    onUpdateCourseByProf {
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
export const onDeleteCourseByProf = /* GraphQL */ `
  subscription OnDeleteCourseByProf {
    onDeleteCourseByProf {
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
