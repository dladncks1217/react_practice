import { Row, Col } from "antd";
import Head from "next/head";
import React from "react";
import LoginForm from "../components/LoginForm";

const Index = () => {
  return (
    <>
      <Head>
        <title>Nodebird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <br />
      <br />
      <br />
      <Row>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          <LoginForm />
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </>
  );
};

export default Index;
