import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import TopNav from "./components/TopNav/TopNav";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
