import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducer";

const { Meta } = Card;

const UserCard = () => {
  const { isLoggingIn, me } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  });

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={me.nickname}
        description={`id: ${me.id}`}
      />
      <br />
      <Button onClick={onLogout} loading={isLoggingIn}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserCard;
