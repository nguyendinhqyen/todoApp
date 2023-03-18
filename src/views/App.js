import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          {/* <MyComponent /> */}
          {/* <ListTodo /> */}
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/todo">
              <ListTodo />
            </Route>
            <Route exact path="/about">
              <MyComponent />
            </Route>
            <Route exact path="/user">
              <ListUser />
            </Route>
            <Route exact path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
