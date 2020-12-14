import React, { useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
  CardImg,
} from "reactstrap";

import DeleteIcon from "@material-ui/icons/Delete";

import { API, graphqlOperation } from "aws-amplify";
import "./CourseGallery.css";

function ProfileGallery(props) {
  return (
    <div>
      <div className=" card-list ">
        {props.profile.map((profiles, i) => (
          <div className="" key={profiles.id}>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={profiles.src}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{profiles.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {profiles.accountType}
                    </CardSubtitle>
                    <CardText>{profiles.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileGallery;
