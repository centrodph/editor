import React, { useRef, useContext, useState } from "react";
import { EditorContext, ACTIONS, setCaretOnFocus } from "../utils";

export function Content() {
  const { editor, dispatch } = useContext(EditorContext);
  const focus = useRef(null);
  const ref = useRef(null);

  function onChange(e, key) {
    dispatch({
      type: ACTIONS.SET_WORD,
      payload: { content: e.target.textContent, key }
    });
    // focus.current.focus();
  }
  function onFocus(e, key) {
    dispatch({
      type: ACTIONS.SELECT_WORD,
      payload: key
    });
    focus.current = e.target;
    setCaretOnFocus(e.target);
  }
  return (
    <div className="content">
      <div ref={ref} className="content-textarea">
        <>
          {editor.words.map((item, key) => {
            return (
              <>
                <span
                  className={`span-editable ${item.styles.join(" ")}`}
                  tabIndex={0}
                  key={key}
                  contentEditable={editor.selected === key}
                  suppressContentEditableWarning
                  onFocus={e => onFocus(e, key)}
                  onBlur={e => onChange(e, key)}
                >
                  {item.text}
                </span>
                <span> </span>
              </>
            );
          })}
        </>
      </div>
    </div>
  );
}
