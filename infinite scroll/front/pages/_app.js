import React from "react";
import AppLayout from "../components/AppLayout";

import "../public/css/styles.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "../store";

const App = ({ Component, ...pageProps }) => {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};
export default App;
