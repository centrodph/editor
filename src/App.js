import React from "react";
import "./assets/App.css";
import { Toolbar, Header, Footer, Content } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Toolbar />
        <Content />
        <Footer />
      </header>
    </div>
  );
}

export default App;
