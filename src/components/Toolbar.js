import React from "react";

export function Toolbar() {
  return (
    <div className="toolbar">
      <button className="format-action" type="button">
        <b>B</b>
      </button>
      <button className="format-action" type="button">
        <i>I</i>
      </button>
      <button className="format-action" type="button">
        <u>U</u>
      </button>
    </div>
  );
}
