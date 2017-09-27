// Framework
import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import returnItemsApp from '../../ui/reducers/reducers.jsx'

export const store = createStore(returnItemsApp, {})

import {
  addItemToReturnList
} from '../../ui/actions/actions.jsx'

// Libraries
import "bootstrap/dist/css/bootstrap.css";

// Client Imports
import Routes from "../../ui/Routes.jsx";

// Actual Rendering Function
let renderApp = () =>
  render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById("render-target")
  );

// Start App
Meteor.startup(() => {
  renderApp();
});
