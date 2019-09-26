import React, { useContext } from "react";
import { EditorContext, ACTIONS } from "../utils";

export function Toolbar() {
  const { dispatch } = useContext(EditorContext);
  function onToggle(payload) {
    dispatch({
      type: ACTIONS.TOGGLE_STYLE,
      payload
    });
  }
  return (
    <div className="toolbar">
      <button
        className="format-action"
        type="button"
        onClick={() => onToggle("bold")}
      >
        <b>B</b>
      </button>
      <button
        className="format-action"
        type="button"
        onClick={() => onToggle("italic")}
      >
        <i>I</i>
      </button>
      <button
        className="format-action"
        type="button"
        onClick={() => onToggle("underline")}
      >
        <u>U</u>
      </button>
    </div>
  );
}
