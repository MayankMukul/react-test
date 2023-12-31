import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpCase = ()=>{
        // console.log("clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.messageUpdate("Changed to UpperCase");
    }

    const handleLoCase = ()=>{
        // console.log("clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.messageUpdate("Changed to LowerCase");
    }

    const handleReset = ()=>{
        // console.log("clicked");
        let newtext = "";
        setText(newtext);
        props.messageUpdate("Cleared");
    }

    const handleChange = (event)=>{
        // console.log("changed");
        setText(event.target.value);
    }

    
  // const [btnText,setbtnText]=useState("Enable Dark Mode");
  // const [themeStyle, setthemeStyle]= useState(
  //   {
  //     backgroundColor: "white",
  //     color: "black",
  //   }
  // )
  // const toggleTheme=()=>{
  //   if(themeStyle.backgroundColor==="black"){
  //     setthemeStyle({
  //       backgroundColor:"white",
  //       color:"black"})
  //     toggleDarkMode();
  //   }else {
  //     setthemeStyle({
  //       backgroundColor:"black",
  //       color:"white",
  //      border : "10px solid black"})
  //     toggleLightMode();
  //   }

  // }

  // const toggleDarkMode = ()=>{
  //   setbtnText("Enable Dark Mode");
  // }

  // const toggleLightMode = ()=>{
  //   setbtnText("Enable Light Mode");
  // }

  return (
    // <div className='textForm' style={themeStyle}>
    <div className='textForm' style={{color: (props.mode===true)?"black":"white"}}>
      <div className="form">
        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            TextArea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={5}
            value={text}
            onChange={handleChange}
            placeholder='Enter your Text'
            style={{backgroundColor: (props.mode===false)?"rgb(62 65 68)":"white", 
            color: (props.mode===true)?"black":"white"}}
          />
          <div className="btn btn-primary my-2 mx-2" onClick={handleUpCase}>Change To UpperCase</div>
          <div className="btn btn-primary my-2 mx-2" onClick={handleLoCase}>Change To LowerCase</div>
          <div className="btn btn-primary my-2 mx-2" onClick={handleReset}>Clear</div>
          
          {/* <button className='btn btn-primary mx-3' onClick={toggleTheme}>{btnText}</button> */}
        </div>
      </div>
      <div className="summary" style={{color: (props.mode===true)?"black":"white"}}>
        <h2>This is Summary</h2>
        <p>{text.length} Character and {text.split(" ").length} Words</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter the text to preview"}</p>
      </div>
    </div>
  );
}
