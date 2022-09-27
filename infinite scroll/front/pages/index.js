import { Divider, List } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/getPostData";

const Index = () => {
  const { data, count, isLoading, finished } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();

  const onScroll = () => {
    // console.log(
    //   Math.floor(window.scrollY), // 스크롤 현재위치
    //   document.documentElement.clientHeight, // 클라이언트 기본 스크롤 위치인듯
    //   document.documentElement.scrollHeight // 총 스크롤 높이
    // );
    if (
      Math.floor(window.scrollY) + document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    ) {
      if (!finished) {
        dispatch(getPosts({ start: count }));
      }
    }
  };

  useEffect(() => {
    dispatch(getPosts({ start: count }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [data, count, isLoading, finished]);

  return (
    <>
      <Divider orientation="left">Large Size</Divider>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="list">{item.content}</List.Item>
        )}
      />
    </>
  );
};
export default Index;
