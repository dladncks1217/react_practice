import React from "react";
import Link from "next/link";
import { Menu, Input } from "antd";

const AppBar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">
          <a>홈으로</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Menu.Item key="home">
          <Link href="/join">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu.Item>
      <Menu.Item key="search" style={{ marginRight: 10 }}>
        <Input.Search
          placeholder="검색어를 입력하세요"
          style={{ verticalAlign: "middle" }}
        />
      </Menu.Item>
    </Menu>
  );
};
export default AppBar;
