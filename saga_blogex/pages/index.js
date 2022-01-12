import React, { useCallback } from "react";
import withRedux from "next-redux-wrapper";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();
  const onClickButton = useCallback(() => {
    dispatch({
      type: "BUTTON_REQUEST",
    });
  });
  return (
    <>
      <button>버튼누르기</button>
    </>
  );
};

export default Index;
