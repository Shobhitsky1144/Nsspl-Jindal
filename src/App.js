import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Home from "./component/animation/Home";
import About from "./component/animation/About";
import Contact from "./component/animation/Contact";
import Navbar from "./component/Navbar";

const App = () => {
  let history = useHistory();
  const [historyData, setHistoryData] = useState(history);
  return (
    <>
      <Navbar history={historyData} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
};

export default App;
