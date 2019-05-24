import React from 'react';
import { Provider } from 'react-redux';

import TestComp from "@components/TestComp";
import store from "@store/configureStore";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
         <TestComp />
      </Provider>
    );
  }
}
