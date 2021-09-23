import { BrowserRouter, Route} from "react-router-dom";
import React from "react";
import { Home } from "./components/Home"
import { Landing } from "./components/Landing"

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home}/>
    <Route exact path="/tarjetas" component={Landing}/>
  </BrowserRouter>
  );
}

export default App;
