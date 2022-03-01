import React, { useCallback, useState } from "react";
import withRedux from "next-redux-wrapper";
import { useDispatch } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "../reducers";
import rootSaga from "../sagas";

const Index = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickButton = useCallback(() => {
    dispatch({
      type: "BUTTON_CLICKED",
    });
  });

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "LOGIN_REQUEST",
        user: { email, password },
      });
    },
    [email, password]
  );

  return (
    <>
      <button onClick={onClickButton}>버튼누르기</button>
      <br />
      <br />
      <br />
      <form onSubmit={onFormSubmit}>
        <input type="email" name="email" onChange={onChangeEmail} />
        <input type="password" name="password" onChange={onChangePassword} />
        <input type="submit" />
      </form>
    </>
  );
};

export default withRedux((initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
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
  sagaMiddleware.run(rootSaga);
  return store;
})(Index);
