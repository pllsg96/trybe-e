import React, { Component } from "react";
import './App.css'
import LoginForm from "./components/LoginForm";

class App extends Component{
  render() {
    return (
      <main>
        <LoginForm />
      </main>
    );
  }
}

export default App;