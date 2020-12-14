import React, { useState, useEffect } from "react";
import { Storage, API, graphqlOperation } from "aws-amplify";
import { listProfiles } from "../../graphql/queries";
import UploadProfile from "./UploadProfile";
import ProfileGallery from "./ProfileGallery";
import { Col, Row } from "reactstrap";

export default function Profile(props) {
  const [profiles, setProfiles] = useState([]);
  const [picture] = useState("");
  useEffect(() => {
    getAllCoursesToState();
  }, [picture]);
  const getAllCoursesToState = async () => {
    //     console.log("inside courses oprn");
    const result = await API.graphql(graphqlOperation(listProfiles));
    let courseArray = await buildCourseArray(
      result.data.listProfiles.items
    );
    setProfiles(courseArray);
  };
  const buildCourseArray = async (listProfiles) => {
    return await getCourseList(listProfiles);
  };
  const getCourseList = async (profileList) => {
    return Promise.all(
      profileList.map(async (i) => {
        return getOneFormatedCourse(i);
      })
    );
  };

  const getOneFormatedCourse = async (singleProfile) => {
    console.log("getOneFormatedCourse 11", singleProfile);
    return {
      src: await Storage.get(singleProfile.file.key),
      id: singleProfile.id,
      name: singleProfile.name,
      accountType: singleProfile.accountType,
      description: singleProfile.description,
      key: singleProfile.file.key,
    };
  };

  return (
    <div>
      <Row>
        <Col className="col-lg-8">
          <ProfileGallery profile={profiles} />
        </Col>
        <Col className="col-lg-4">
          <UploadProfile />
        </Col>
      </Row>
    </div>
  );
}
