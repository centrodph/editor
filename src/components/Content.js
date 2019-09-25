import React, { useRef, useState, useContext } from "react";
import { getText, EditorContext } from "../utils";

export function Content() {
  const { editor, dispatch } = useContext(EditorContext);
  const ref = useRef(null);
  function onChange(e) {
    console.log(e, ref);
  }
  return (
    <div className="content">
      <div
        ref={ref}
        className="content-textarea"
        onInput={onChange}
        contenteditable="true"
      >
        {editor.words.map((text, index) => {
          return <span>{text} </span>;
        })}
      </div>
    </div>
  );
}
