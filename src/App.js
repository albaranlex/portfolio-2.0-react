import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTS
import Navbar from "./components/Navbar";

//PAGES
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path={() => "/main" || "/anything"}>
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
