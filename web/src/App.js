import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import SidebarMenu from "./components/SidebarMenu";
import { Provider } from 'react-redux';
import ConfigureStore from './ConfigureStore';
import "./App.scss";

const store = ConfigureStore();

const App = () => {
  return (
    <Router>
      <div class="container">
        <Provider store={store}>
          <SidebarMenu />
          <Switch>
            <Route path="/">
              <div class="content-wrapper">
                <HomePage />
              </div>
            </Route>
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;