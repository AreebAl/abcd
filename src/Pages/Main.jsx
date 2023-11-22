import React from 'react'
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
  } from "react-router-dom";
  import About from '../components/About';
function Main() {
  return (
    <div>
      <Router>
        <Routes>
         <Route path='/About'Component={About}/>   
        </Routes>
      </Router>
    </div>
  )
}

export default Main;