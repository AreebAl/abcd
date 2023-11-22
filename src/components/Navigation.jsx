import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { TextArea } from './TextArea';
import Alert1 from './Alert1';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

import About from './About';


export default function Navigation(props) {

  let [flag,setFlag]=useState(false)
let [alert,setAlert]=useState(null);
let [mode,setMode]=useState('dark')
let showAlert=(msg,type)=>{
setAlert({
  msg:msg,
  type:type
})
setTimeout(()=>{setAlert(null)},1500)
}
let m=false;
  return (
    <Router>
    <div className={`${flag?'bg-color-dark':'bg-color-light'}`}>
      
      <Navbar bg={`${flag?'dark':'light'}`} data-bs-theme={`${flag?'dark':'light'}`}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page"to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/pricing">Pricing</Link>
        </li>
      </ul>
            <Form.Check className={`${flag?'form-check-label-light':'form-check-label-dark'} p-2`} style={{marginLeft:'600px'}}
        type="switch"
        id="custom-switch"
        label={`${flag?'Enable Light Mode':'Enable Dark Mode'}`}
        onClick={()=>{
          
          if(!flag) {
            showAlert("success","Dark Mode Enabled SuccessFully")
             
              document.title="TextUtils-DarkMode"
              var d1=setInterval(()=>{
                document.title="Install Text Utils"},1000)
              var d2=setInterval(()=>{
              document.title="Enabled DarkeMode"},2000)
              setFlag(true)    
              
          }else{  
            showAlert("warning","Light Mode Enabled SuccessFully")
           
            console.log(d1, d2) 
            document.title='Text-Utils-LightMode'; 
             setFlag(false)
          }
          
                      
        } 
        }
      />
          </Nav>
        </Container>
      </Navbar>
      <Alert1 alert={alert}/>
      
      <Routes>
        <Route path="/home" element={<TextArea val={flag}/>}/>
      </Routes>
      <Routes >
        <Route path="/About" Component={About} />
      </Routes>
    </div>
    </Router>
  )
}



