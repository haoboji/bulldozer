import React from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import store from "./store";
import BulldozerGame from "../features/bulldozerGame/BulldozerGame";

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BulldozerGame />
    </Provider>
  );
};

export default App;
