import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";
import Page from "./components/Page";
import Register from "./components/Register";
import Sign_up from "./components/Sign_up";
import About from "./components/About";
import Aim from "./components/Aim";
import Creators from "./components/Creators";
import Usage from "./components/Usage";
import Tracking from "./components/Tracking";
import Deadlines from "./components/Deadlines";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Page}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/log_in" component={Sign_up}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/aim" component={Aim}/>
      <Route exact path="/creators" component={Creators}/>
      <Route exact path="/usage" component={Usage}/>
      <Route exact path="/tracking" component={Tracking}/>
      <Route exact path="/deadlines" component={Deadlines}/>
      <Route exact path="/stats" component={Stats}/>
    </div>
  );
}

export default App;
