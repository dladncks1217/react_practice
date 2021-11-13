import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const Joinpage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => dispatch(loginAction);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Form layout="vertical" onFinish={onSubmit}>
      <Form.Item label="email" required tooltip="이메일을 입력하세요">
        <Input placeholder="input email" onChange={onChangeEmail} />
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
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Joinpage;
