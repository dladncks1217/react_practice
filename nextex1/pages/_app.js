import { Col, Menu, Row } from "antd";
import Search from "antd/lib/transfer/search";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import AppLayout from "../components/AppLayout";
import { AudioOutlined } from "@ant-design/icons";

const App = ({ Components }) => {
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  return (
    <>
      <Head>
        <title>example</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <Menu theme="dark" mode="horizontal">
        <Row>
          <Menu.Item key="gohome">
            <Col xs={24} md={4}>
              <Link href="/">
                <a style={{ color: "white" }}>되팔렘</a>
              </Link>
            </Col>
            <Col xs={24} md={16}>
              <Search
                placeholder="검색"
                style={{ width: 50 }}
                size="large"
                suffix={suffix}
                enterButton="조회"
              />
            </Col>
            <Col xs={24} md={4}></Col>
          </Menu.Item>
        </Row>
      </Menu>

      <AppLayout />
    </>
  );
};

export default App;
