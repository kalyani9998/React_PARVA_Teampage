import React from "react";
import './App.css';
import "./Navbar.css";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import Footer from "./Footer";
import "./Footer.css"
import { Route, Switch } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/"

// array.map(function(value,index,arr),thisValue)----Syntax
const App = () => (
  <>
    <Navbar />
    <main>
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/" component={About} exact />
        <Route component={Error} />
      </Switch>
    </main>
    <Footer />



  </>
)
export default App;

