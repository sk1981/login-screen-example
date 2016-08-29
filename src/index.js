import React from "react";
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import appReducer from './redux/reducer'
import LoggedInContainer from "./LoggedInContainer";

import "../style/main.scss";

let store = createStore(appReducer);

const App = (
  <Provider store={store}>
    <LoggedInContainer/>
  </Provider>
);

render(App, document.querySelector('#target'));