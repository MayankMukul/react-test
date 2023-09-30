import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text");

    const handleUpCase = ()=>{
        console.log("clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handleChange = (event)=>{
        console.log("changed");
        setText(event.target.value);

    }
  return (
    <>
      <div className="form">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={5}
            value={text}
            onChange={handleChange}
          />
          <div className="btn btn-primary my-2" onClick={handleUpCase}>Change Text</div>
        </div>
      </div>
    </>
  );
}
