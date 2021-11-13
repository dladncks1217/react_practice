import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { signUpAction } from "../reducers/user";

const Joinpage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onSubmit = useCallback(
    (e) => {
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      dispatch(
        signUpAction({
          email,
          password,
          nick,
        })
      );
    },
    [password, passwordCheck]
  );

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangePassword = (e) => {
    setPasswordError(e.target.value !== password);
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item label="email" required tooltip="이메일을 입력하세요">
        <Input placeholder="input email" onChange={onChangeEmail} />
      </Form.Item>
      <Form.Item
        required
        label="nickname"
        tooltip={{
          title: "닉네임을 입력하세요",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input placeholder="input nickname" onChange={onChangeNick} />
      </Form.Item>
      <Form.Item
        required
        label="password"
        tooltip={{
          title: "비밀번호를 입력하세요",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input
          type="password"
          placeholder="input password"
          onChange={onChangePassword}
        />
      </Form.Item>
      <Form.Item
        required
        label="passwordcheck"
        tooltip={{
          title: "비밀번호를 다시 입력하세요",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input
          placeholder="input password"
          type="password"
          onChange={onChangePasswordCheck}
        />
        {passwordError && (
          <div>
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>

            <br />
          </div>
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Joinpage;
