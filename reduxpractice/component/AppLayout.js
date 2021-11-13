import { Col, Row } from "antd";
import AppBar from "./AppBar";
import SideMenu from "./SideMenu";

const AppLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Row>
        <Col xs={24} md={6}>
          <SideMenu />
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </>
  );
};
export default AppLayout;
