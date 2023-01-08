import React from "react";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import SignUp from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pricing" exact component={PricingPage} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;