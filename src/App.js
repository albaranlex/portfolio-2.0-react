import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
