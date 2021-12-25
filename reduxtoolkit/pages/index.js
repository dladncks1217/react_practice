import { Button } from "antd";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import withRedux from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { useDispatch } from "react-redux";

import reducer, { ADD_NUBER_REQUEST } from "../reducer";
import rootSaga from "../sagas";

const Index = () => {
  const dispatch = useDispatch();

  const setNumberChangeRedux = useCallback(() => {
    console.log("redux");
    dispatch({
      type: ADD_NUBER_REQUEST,
    });
  }, []);

  //
  return (
    <>
      <Head>
        <title>Toolkit Example</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <Button onClick={setNumberChangeRedux}>aasdfadssdf</Button>
    </>
  );
};

const configureStore = (initialState) => {
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
};

export default withRedux(configureStore)(Index);
