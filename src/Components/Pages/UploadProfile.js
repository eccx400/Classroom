import React, { useState, useEffect } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { updateProfile } from "../../graphql/mutations";
import awsExports from "../../aws-exports";
import "./UploadCourse.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function UploadProfile(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [alert, setAlert] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [profileDescription, setProfileDescription] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleOnFileChange = (e) => {
    let selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);
    console.log("handlefileschange", selectedFile);
  };

  const sendImageToDB = async (image) => {
    console.log("inside db write", image);
    try {
      await API.graphql(graphqlOperation(updateProfile, { input: image }));
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
        id: "101b98fe-4641-4b3c-8e5d-4f47114cfdc5",
        file: {
          bucket: awsExports.aws_user_files_s3_bucket,
          region: awsExports.aws_user_files_s3_bucket_region,
          key: selectedFile.name,
        },
        name: profileName,
        accountType: accountType,
        description: profileDescription
      };
      console.log("image payload", image);
      setAlert(true);
      sendImageToDB(image);
    });
  };

  return (
    <div className="jumbotron ">
      <Form onSubmit={handleFormSubmit}>
        <h1> Add User Information </h1>
        <FormGroup>
          <Label for="CourseName">Username</Label>
          <Input
            type="text"
            value={profileName}
            placeholder=""
            onChange={({ target }) => setProfileName(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="creator">Account Type</Label>
          <Input
            type="text"
            value={accountType}
            placeholder=""
            onChange={({ target }) => setAccountType(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Course Description">Description</Label>
          <Input
            type="textarea"
            value={profileDescription}
            placeholder=""
            onChange={({ target }) => setProfileDescription(target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="File">Image</Label>
          <Input type="file" onChange={handleOnFileChange} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadProfile;
