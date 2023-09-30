import React from 'react'

export default function TextForm(props) {
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
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
}
