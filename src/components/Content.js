import React, { useState } from "react";
import { getText } from "../utils";

export function Content() {
  const [text, setText] = useState(getText());
  function onChange(e) {
    setText(e.target.value)
  }  
  return (
    <div className="content">
      <textarea className="content-textarea" onChange={onChange}>
        {text}
      </textarea>
    </div>
  );
}
