import React from "react";
import { Provider } from "react-redux";
import Counter from "../components/counter";

import { store } from "../store";

const Index = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default Index;
