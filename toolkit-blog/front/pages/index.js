import React from "react";
import { Provider } from "react-redux";
import Join from "../components/join";
import { store } from "../store";

const Index = () => {
  return (
    <Provider store={store}>
      <Join />
    </Provider>
  );
};

export default Index;
