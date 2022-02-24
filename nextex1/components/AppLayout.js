import React from "react";
import { Col, Row } from "antd";
import MyPageIcon from "./MypageIcon";

const AppLayout = ({ children }) => {
  return (
    <>
      <Row>
        <Col xs={24} md={2}></Col>
        <Col xs={24} md={20}>
          {children}
        </Col>
        <Col xs={24} md={2}>
          <MyPageIcon />
        </Col>
      </Row>
    </>
  );
};

export default AppLayout;
