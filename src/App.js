import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import Signup from "./pages/SignUp";

export const App = () => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route path="/signup" component={Signup} />
        {/* Add more routes as needed */}
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;
