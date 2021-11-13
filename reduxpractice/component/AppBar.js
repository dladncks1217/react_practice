import React, { useEffect } from "react";
import Link from "next/link";
import { Menu, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import user, { loginAction, logoutAction } from "../reducers/user";

const AppBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const onLogOut = () => {
    dispatch(logoutAction);
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">
          <a>홈으로</a>
        </Link>
      </Menu.Item>
      {isLoggedIn ? (
        <Menu.Item>
          <Menu.Item key="home" onClick={onLogOut}>
            <Link href="/">
              <a>로그아웃</a>
            </Link>
          </Menu.Item>
        </Menu.Item>
      ) : (
        <>
          <Menu.Item>
            <Menu.Item key="home">
              <Link href="/joinpage">
                <a>회원가입</a>
              </Link>
            </Menu.Item>
          </Menu.Item>
          <Menu.Item>
            <Menu.Item key="home">
              <Link href="/loginpage">
                <a>로그인</a>
              </Link>
            </Menu.Item>
          </Menu.Item>
        </>
      )}

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
