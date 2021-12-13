import React, { useCallback, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducer";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  // const { isLoggingIn } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onFinishForm = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        id,
        password,
      },
    });
  }, [id, password]);

  const onChangeId = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinishForm}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input onChange={onChangeId} value={id} name="id" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          onChange={onChangePassword}
          value={password}
          name="password"
        />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
