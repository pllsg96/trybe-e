import React, { Component } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

//Aula 11.2 parada em 21:00 

class LoginForm extends Component{

  state = {
    email: '',
    password: '',
    buttonDisabled:false,
  }

  render() {

    return (
      <section>
        <form>
          <h2>Login</h2>
          <EmailInput/>
          <PasswordInput />
          
          <button disabled> Fazer login jovem</button>
        </form>
      </section>
    );
  }
}

export default LoginForm;