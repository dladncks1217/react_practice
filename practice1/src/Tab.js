import React, { Component } from "react";
import "./index.css";

const TabType = {
  NAME: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.NAME]: "추천 이름",
  [TabType.HISTORY]: "검색어 기록",
};

class Tab extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => (
            <il key={tabType}>{TabLabel[tabType]}</il>
          ))}
        </ul>
      </>
    );

    return true ? tabs : "";
  }
}

export default Tab;
