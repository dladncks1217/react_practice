import React from "react";
import Link from "next/link";
import { Col, Row } from "antd";

const AppLayout = ({ children }) => {
  return (
    <>
      <Row>
        <Col xs={24} md={1}></Col>
        <Col xs={24} md={22}>
          {children}
        </Col>
        <Col xs={24} md={1}></Col>
      </Row>
    </>
  );
};

export default AppLayout;
