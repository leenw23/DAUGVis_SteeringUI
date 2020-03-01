/*
DAUGVis Steering UI
Desription: User Sterring UI for DAUGVis
Contributers: NW Lee
*/

import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router } from "react-router-dom";

import SelectPage from "./screens/SelectPage.js"
import ResultPage from "./screens/ResultPage.js"

function App() {

  return (
    <Router>
      <main>
        <Route exact path="/" component={SelectPage} />
        <Route exact path="/result" component={ResultPage} />
      </main>
    </Router>
  );
}

export default App;
