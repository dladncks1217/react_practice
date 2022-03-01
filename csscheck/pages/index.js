import React, { useCallback } from "react";

const Index = () => {
  const onClickButton = () => {
    console.log("버튼이눌림");
  };
  return (
    <>
      <div id="div"></div>
      {/* <button id="btn" onClick={onClickButton}>
        나는야버튼
      </button> */}
      {/* <div>나는 div</div> */}
    </>
  );
};

export default Index;
