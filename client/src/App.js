import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="top">
      <Link to= "/login"> Login</Link>
      <Link to="/protected">BubblePage</Link>
      </div>
      <div className="App">
     
        <Route exact path="/login" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute exact path="/protected" component={BubblePage}>

        </PrivateRoute>
      </div>
    </Router>
  );
}

export default App;
