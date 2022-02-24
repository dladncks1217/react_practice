import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const AuctionList = () => {
  const listData = [
    {
      href: "https://ant.design",
      title: `ant design part1`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    },
  ];
  //   for (let i = 0; i < 2; i++) {
  //     listData.push({
  //       href: "https://ant.design",
  //       title: `ant design part ${i}`,
  //       avatar: "https://joeschmoe.io/api/v1/random",
  //       description:
  //         "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  //       content:
  //         "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  //     });
  //   }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <>
      <List
        header={"경매 진행 목록"}
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={1}
            // actions={[
            //   <IconText
            //     icon={StarOutlined}
            //     text="156"
            //     key="list-vertical-star-o"
            //   />,
            //   <IconText
            //     icon={LikeOutlined}
            //     text="156"
            //     key="list-vertical-like-o"
            //   />,
            //   <IconText
            //     icon={MessageOutlined}
            //     text="2"
            //     key="list-vertical-message"
            //   />,
            // ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={"https://joeschmoe.io/api/v1/random"} />}
              title={<a href={"https://ant.design"}>{"ant design part1"}</a>}
              description={
                "Ant Design, a design language for background applications, is refined by Ant UED Team."
              }
            />
            {
              "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            }
          </List.Item>
        )}
      />
    </>
  );
};

export default AuctionList;
