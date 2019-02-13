import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.scss";
import StarContainer from "./containers/StarContainer";
import reducers from "./modules/Reducers";

import CustomInputText from "./components/CustomInputText";

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <StarContainer starNumber="5" />
        </div>
        <CustomInputText />
      </Provider>
    );
  }
}

export default App;
