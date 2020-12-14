import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import ChatIcon from "@material-ui/icons/Chat";
import FolderIcon from "@material-ui/icons/Folder";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import Modal from "../layout/Modal";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col lg="3">
          <Card>
            <CardBody></CardBody>
            <img
              width="100%"
              src="https://tecake.com/wp-content/uploads/2020/04/money-heist-alvaro-morte-had-to-audition-these-many-times-to-bag-the-role-of-professor-in-la-casa-de-papel-001.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>FA20: CMPE-272 Sec 48 - Enterprise SW Plat</CardText>
              <Row>
                <Col lg="3">
                  <CardLink href="/dashboard">
                    <NotificationsActiveIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <BorderColorIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <ChatIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <FolderIcon />
                  </CardLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3">
          <Card>
            <CardBody></CardBody>
            <img
              width="100%"
              src="https://tecake.com/wp-content/uploads/2020/04/money-heist-alvaro-morte-had-to-audition-these-many-times-to-bag-the-role-of-professor-in-la-casa-de-papel-001.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>FA20: CMPE-272 Sec 48 - Enterprise SW Plat</CardText>
              <Row>
                <Col lg="3">
                  <CardLink href="#">
                    <NotificationsActiveIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <BorderColorIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <ChatIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <FolderIcon />
                  </CardLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>

        <Col lg="3">
          <Card>
            <CardBody></CardBody>
            <img
              width="100%"
              src="https://tecake.com/wp-content/uploads/2020/04/money-heist-alvaro-morte-had-to-audition-these-many-times-to-bag-the-role-of-professor-in-la-casa-de-papel-001.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardText>FA20: CMPE-272 Sec 48 - Enterprise SW Plat</CardText>
              <Row>
                <Col lg="3">
                  <CardLink href="#">
                    <NotificationsActiveIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <BorderColorIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <ChatIcon />
                  </CardLink>
                </Col>
                <Col lg="3">
                  <CardLink href="#">
                    <FolderIcon />
                  </CardLink>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
