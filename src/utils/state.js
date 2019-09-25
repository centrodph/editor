import React from "react";
import { textToArray, getText } from "./helpers";
export const EditorContext = React.createContext(null);

export const ACTIONS = {
  SELECT_WORD: "SELECT_WORD",
  TOGGLE_STYLE: "TOGGLE_STYLE"
};

export const initialState = {
  words: textToArray(getText()),
  styles: {},
  selected: null
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SELECT_WORD:
      return { ...state, selected: action.payload };
    case ACTIONS.TOGGLE_STYLE:
      const { payload } = action;
      const { styles } = { ...state };
      if (!styles[payload.type]) styles[payload.type] = {};
      if (styles[payload.type] && styles[payload.type][payload.index])
        delete styles[payload.type][payload.index];
      else styles[payload.type][payload.index] = true;
      return { ...state, styles: { ...state.styles } };
    default:
      throw new Error();
  }
}
