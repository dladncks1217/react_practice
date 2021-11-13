import React from "react";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux"; // 이 provider는 컴포넌트임.
import AppLayout from "../component/AppLayout";
import reducer from "../reducers";

const ReduxPractice = ({ Component }) => {
  return (
    <>
      <Head>
        <title>ReduxPractice</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <br />
        <Component />
      </AppLayout>
    </>
  );
};

export default withRedux((initialState) => {
  // reducer action이 dispatch될 때 state를 어떻게 정의해야할지 정해둔게 reducer였음 여기서 state와 reducer가 합쳐진게 아래 store라고 보면 됨.
  const middlewares = []; // 이부분만 계속 바뀐다고 보면 될듯.
  const enhancer = compose(
    // 액션과 리듀서 사이라 미들웨어
    applyMiddleware(...middlewares),
    typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined" // redux devtools 사이트에서 가져옴
      ? window.__REDUX_DEVTOOLS_EXTENSION__() // redux devtools 깔면 window객체에 __REDUX... 하는 함수 생김( 그거 쓰는거임 )
      : (f) => f // 기본 미들웨어에 __REDUX__DEVTOOLS~~하는거 추가로 해서 합성하겠다는 의미(그냥 외우자.)
  ); // 미들웨어들 합성 가능. 기능 추가 그런느낌이라 enhancer
  const store = createStore(reducer, initialState, enhancer);
  // 여기에 store 커스터마이징

  return store;
})(ReduxPractice);
