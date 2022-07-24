import React, { Component } from 'react';

class EmailInput extends Component {
  render() {
    return (
      <label>
        E-mail
        <br />

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
        />
     </label> 
    );
  }
}

export default EmailInput;