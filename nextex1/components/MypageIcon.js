import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const MyPageIcon = () => {
  const Icon = () => {
    return <image src="https://avatars.githubusercontent.com/u/45068522?v=4" />;
  };
  return (
    <>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={callback}
        width={{}}
        expandIcon={Icon}
      >
        <Panel extra={Icon} key="1">
          <p>마이페이지</p>
          <p>포인트충전</p>
          <p>거래 목록</p>
          <p>로그아웃</p>
        </Panel>
      </Collapse>
    </>
  );
};

export default MyPageIcon;
