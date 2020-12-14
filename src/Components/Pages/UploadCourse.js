import React, { useState, useEffect } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { createCourseByProf } from "../../graphql/mutations";
import awsExports from "../../aws-exports";
import "./UploadCourse.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function UploadCourse(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [creator, setCreator] = useState("");
  const [coursename, setCourseName] = useState("");
  const [coursedescription, setCourseDescription] = useState("");
  const [category, setCategory] = useState("");
  const [studentsenrolled, setStudentsEnrolled] = useState("");
  const [labels, setLabels] = useState("");

  const handleOnFileChange = (e) => {
    let selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);
    console.log("handlefileschange", selectedFile);
  };

  const sendImageToDB = async (image) => {
    console.log("inside db write", image);
    try {
      await API.graphql(graphqlOperation(createCourseByProf, { input: image }));
    } catch (err) {
      console.log("db write error");
    }
  };

  const handleFormSubmit = (e) => {
    console.log("inside handleFormSubmit");
    e.preventDefault();
    console.log("{selectedFile}", selectedFile);
    console.log("{filename}", selectedFile.name);
    let fileWithExtn = selectedFile.name;
    let extn = fileWithExtn.split(".").pop();
    let extractedContentType = "application/octet-stream";
    if (extn === "html") extractedContentType = "text/html";
    if (extn === "css") extractedContentType = "text/css";
    if (extn === "js") extractedContentType = "application/javascript";
    if (extn === "png" || extn === "jpg" || extn === "gif")
      extractedContentType = "image/" + extn;
    console.log("contentType ", extractedContentType);

    //storing image in S3
    Storage.put(selectedFile.name, selectedFile, {
      // contentType: "image/png",
      contentType: extractedContentType,
    }).then((result) => {
      const image = {
        // name: selectedFile.name,
        file: {
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
          key: selectedFile.name,
        },
        creator: creator,
        category: category,
        coursename: coursename,
        coursedescription: coursedescription,
        studentsenrolled: studentsenrolled,
        labels: labels,
      };
      console.log("image payload", image);
      //setAlert(true);
      sendImageToDB(image);
    });
  };

  return (
    <div className="jumbotron ">
      <Form onSubmit={handleFormSubmit}>
        <h1> Create Course Here </h1>
        <FormGroup>
          <Label for="creator">Created By</Label>
          <Input
            type="text"
            value={creator}
            placeholder=""
            onChange={({ target }) => setCreator(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="CourseName">Course Title</Label>
          <Input
            type="text"
            value={coursename}
            placeholder=""
            onChange={({ target }) => setCourseName(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Course Description">Course Description</Label>
          <Input
            type="textarea"
            value={coursedescription}
            placeholder=""
            onChange={({ target }) => setCourseDescription(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="creator">Category</Label>
          <Input
            type="text"
            value={category}
            placeholder=""
            onChange={({ target }) => setCategory(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="StudentsEnrolled">StudentsEnrolled</Label>
          <Input
            type="text"
            value={studentsenrolled}
            placeholder=""
            onChange={({ target }) => setStudentsEnrolled(target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="Labels">labels</Label>
          <Input
            type="text"
            value={labels}
            placeholder=""
            onChange={({ target }) => setLabels(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="File">Syllabus</Label>
          <Input type="file" onChange={handleOnFileChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadCourse;
