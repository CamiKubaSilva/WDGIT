import { BrowserRouter, Route} from "react-router-dom";
import React from "react";
import { Home } from "./components/Home"
import { Landing } from "./components/Landing";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/WDGIT/landing" component={Landing}/>
    <Route exact path="/WDGIT" component={Home}/>
  </BrowserRouter>
  );
}

export default App;
