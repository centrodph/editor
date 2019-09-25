import React, { useReducer } from "react";
import "./assets/App.css";
import { Toolbar, Header, Footer, Content } from "./components";
import { EditorContext, initialState, reducer } from "./utils";

function App() {
  const [editor, dispatch] = useReducer(reducer, initialState);

  return (
    <EditorContext.Provider value={{ editor, dispatch }}>
      <div className="App">
        <header className="App-header">
          <Header />
          <Toolbar />
          <Content />
          <Footer />
        </header>
      </div>
    </EditorContext.Provider>
  );
}

export default App;
