import React from 'react';
import Landing from './Components/Master/Landing';
import Blog from "./Components/Master/Blog";
import Dashboard from "./Components/Master/Dashboard";
import "./App.css"
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

function App() {
	return (
		<Router>
		 <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/blog">
           <Blog />
          </Route>
		  <Route exact path="/dashboard">
           <Dashboard />
          </Route>
         
        </Switch>
		</Router>
	);
}

export default App;
