import React, { useState, useEffect } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import StudentsTable from "./StudentsTable";

import {
  listCourseByProfs,
  searchCourseByProfs,
  listStudentss,
} from "../../graphql/queries";

import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import StudentForm from "./StudentForm";

export default function Cohorts() {
  useEffect(() => {
    getallStudentsToState();
  }, []);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const getallCoursesToState = async () => {
    console.log("inside courses oprn");
    const result = await API.graphql(graphqlOperation(listCourseByProfs));
    console.log("courseArrrya inside cohort", result);
  };

  const getallStudentsToState = async () => {
    console.log("inside students cohorts oprn");
    const result = await API.graphql(graphqlOperation(listStudentss));
    let studentArray = await buildStudentArray(result.data.listStudentss.items);
    setStudents(studentArray);
  };
  const buildStudentArray = async (liststudentss) => {
    return await getstudentList(liststudentss);
  };
  const getstudentList = async (studentList) => {
    return Promise.all(
      studentList.map(async (i) => {
        return getOneFormatedstudent(i);
      })
    );
  };
  const getOneFormatedstudent = async (singleStudent) => {
    console.log("getOneFormatedstudent 11", singleStudent);
    return {
      studentId: singleStudent.id,
      studentName: singleStudent.name,
      studentYear: singleStudent.year,
      studentCourse: singleStudent.courses,
      studentGrade: singleStudent.grade,
    };
  };

  return (
    <div>
      <StudentForm students={students} />
      <h2>Cohorts</h2>
      <StudentsTable students={students} />
    </div>
  );
}
