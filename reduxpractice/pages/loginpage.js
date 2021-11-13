import React, { useEffect, useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Joinpage = () => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="email" required tooltip="이메일을 입력하세요">
        <Input placeholder="input email" />
      </Form.Item>

      <Form.Item
        required
        label="password"
        tooltip={{
          title: "비밀번호를 입력하세요",
          icon: <InfoCircleOutlined />,
        }}
      >
        <Input type="password" placeholder="input password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default Joinpage;
