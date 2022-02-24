import React from "react";
import { Col, Menu, Row } from "antd";
import Search from "antd/lib/transfer/search";
import Link from "next/link";
import { Button, Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const TopMenu = () => {
  const dummy = {
    isLoggedIn: true,
    point: 1234,
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  return (
    <Menu theme="dark" mode="horizontal">
      <Row style={{ height: 40 }}>
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
          <Col xs={24} md={4}>
            {dummy.isLoggedIn ? (
              <>
                <Input
                  defaultValue={`${dummy.point} 포인트`}
                  readOnly
                  style={{ width: "50%", marginLeft: "20%" }}
                />
                <Button
                  style={{ float: "right", height: 20, marginBottom: -19 }}
                >
                  프로필
                </Button>
                <Button style={{ float: "right", height: 20, marginTop: -19 }}>
                  아이콘
                </Button>
              </>
            ) : (
              <Button type="primary" style={{ float: "right", marginTop: 8 }}>
                로그인
              </Button>
            )}
          </Col>
        </Menu.Item>
      </Row>
    </Menu>
  );
};

export default TopMenu;
