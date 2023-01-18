/* eslint-disable no-unused-vars */
import Movies from "./pages/Movies.jsx";
import Add from "./pages/Add";
import Update from "./pages/Update.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import './style.css'

import React from "react";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />}/>
          <Route path="/add" element={<Add />}/>
          <Route path="/update/:id" element={<Update />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
