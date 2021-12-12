import { Row, Col } from "antd";
import Head from "next/head";
import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import withRedux from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
// import createSagaMiddleware from "@redux-saga/core";
import reducer, { LOG_IN_SUCCESS } from "../reducer";

const Index = () => {
  return (
    <>
      <Head>
        <title>Nodebird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <br />
      <br />
      <br />
      <Row>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          <LoginForm />
        </Col>
        <Col xs={24} md={6}></Col>
      </Row>
    </>
  );
};

const configureStore = (initialState) => {
  //   const sagaMiddleware = createSagaMiddleware();

  const middlewares = []; //sagaMiddleware
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

  //   sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(Index);
