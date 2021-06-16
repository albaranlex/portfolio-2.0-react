import { Route } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/Projects">
        <Projects />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
