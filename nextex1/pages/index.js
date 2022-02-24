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

      <AuctionList />
    </>
  );
};

export default Index;
