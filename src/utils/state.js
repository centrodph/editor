import React from "react";
import { textToArray, getText } from "./helpers";
export const EditorContext = React.createContext(null);

export const ACTIONS = {
  SET_WORDS: "SET_WORDS",
  SET_WORD: "SET_WORD",
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
    case ACTIONS.SET_WORDS:
      return { ...state, words: action.payload };
    case ACTIONS.SET_WORD:
      const { words } = { ...state };
      const newwords = textToArray(action.payload.content);
      words[action.payload.key].text = action.payload.content;
      return { ...state, words };
    case ACTIONS.SELECT_WORD:
      return { ...state, selected: action.payload };
    case ACTIONS.TOGGLE_STYLE:
      const { payload } = action;
      const { styles } = state.words[state.selected];
      if (styles.indexOf(payload) > -1) {
        state.words[state.selected].styles = styles.filter(
          style => style !== payload
        );
      } else state.words[state.selected].styles.push(payload);

      return { ...state, words: [...state.words] };
    default:
      throw new Error();
  }
}
