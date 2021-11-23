import React, { useEffect, useState } from "react";
import withRedux from "next-redux-wrapper";
import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import reducer from "../reducers";

const IndexPage = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const onChangeText = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  useEffect(() => {
    dispatch({
      type: "EXAMPLE_ACTION",
    });
  }, []);

  return (
    <>
      <input type="text" onChange={onChangeText} />
      <button>버튼</button>
    </>
  );
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
        );
  const store = createStore(reducer, initialState, enhancer);

  return store;
})(IndexPage);
