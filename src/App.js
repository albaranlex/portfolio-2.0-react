import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

//COMPONENTS
import Navbar from "./components/Navbar";

//PAGES
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  },[])
  return (
    <div className = "App"> 
    {
      loading ?
     
      <PulseLoader
 
      size={10}
      color={"white"}
      loading={loading} 
      />
      
      :
    
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
}
    </div>
  );
}

export default App;
