import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setmode]=useState(true);
  
  const togglemode = ()=>{
    if(mode === false) {
      setmode(true);
      document.body.style.background="white";
    }
    else {
      setmode(false);
      document.body.style.background="#343a40";
    }
  }
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode}></Navbar>
      <div className="container" >
        <TextForm heading="TextUtils" mode={mode}></TextForm>
      </div>
    </>
  );
}

export default App;
