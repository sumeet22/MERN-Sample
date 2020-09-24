import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

import AdminHome from "./components/AdminHome";
import CreateCompany from "./components/CreateCompany";
import Create from "./components/Create";
import Quote from "./components/Quote";
import AdminLogin from "./components/AdminLogin";
import Select from "./components/Select";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="auth-inner">
        <Switch>
          <Route exact path="/" component={Select} />
          <Route exact path="/home" component={Home} />

          <Route exact path="/adminhome" component={AdminHome} />
          <Route exact path="/customer" component={Login} />
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/createcompany" component={CreateCompany} />

          <Route exact path="/create" component={Create} />
          <Route exact path="/quote/:id" component={Quote} />

        </Switch>
      </div>
    </div>
  );
}

export default App;
