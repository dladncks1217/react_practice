import { List } from "antd";
import React from "react";
import AutionCard from "../components/AuctionCard";
import AuctionList from "../components/AutionList";

const Index = () => {
  return (
    <>
      <br />
      <List header="경매 예정 목록">
        <AutionCard />
        <AutionCard />
        <AutionCard />
        <AutionCard />
        <AutionCard />
      </List>
      <List header="경매 진행 목록">
        <AuctionList />
      </List>
    </>
  );
};

export default Index;
