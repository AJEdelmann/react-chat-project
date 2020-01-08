import React from "react";
import "../../src/App.css";
import FormContainer from "./FormContainer";
import ChatContainer from "./ChatContainer";

function App() {
  return (
    <div className="App">
      <div className="chatSection">
        <ChatContainer></ChatContainer>
        <FormContainer></FormContainer>
      </div>
      <div className="imgDiv"></div>
    </div>
  );
}

export default App;
