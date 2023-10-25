// import logo from './logo.svg';
import Alert from './Alert';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  const [mode, setmode]=useState(true);
  const [message, setmessage ]= useState(null);
  
  const togglemode = ()=>{
    if(mode === false) {
      setmode(true);
      document.body.style.background="white";
      messageUpdate("Light Mode Enabled"); 
    }
    else {
      setmode(false);
      document.body.style.background="#343a40";
      messageUpdate("Dark Mode Enabled");
    }
  }

  const messageUpdate = (msg)=>{
    setmessage(msg);
    disableMsg();
  }

  const disableMsg = ()=>{
    setTimeout(()=>{
      setmessage(null);
    },2000)
  }
  // disableMsg();
  return (
    <>
    <Router>
    <Navbar mode={mode} togglemode={togglemode}></Navbar>
      <Alert message={message}></Alert>
      <div className="container" >
        <Routes>
          <Route path="/">
              <TextForm heading="TextUtils" mode={mode} messageUpdate={messageUpdate}></TextForm>
          </Route>
          <Route path="/about">
              <About/>
          </Route>
        </Routes>
      </div>
    </Router>
      
    </>
  );
}

export default App;
