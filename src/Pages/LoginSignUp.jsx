import React from "react";
import "./CSS/LoginSignUp.css"
function LoginSignUp() {
  return (
    <div className="login-sign-up">
      <div className="login-sign-up-container">
        <h1>Inregistreaza-te</h1>
        <div className="login-sign-up-fields">
          <input type="text" placeholder="Numele" />
          <input type="email" placeholder="E-mailul" />
          <input type="password" placeholder="Parola" />
        </div>
        <button>Continua</button>
        <p className="login-sign-up-login">
          Ai deja un cont? <span>Intra aici</span></p>
          <div className="login-sign-up-agree">
            <input type="checkbox" name="" id=""/>
            <p>Sunt de acord cu conditiile de utilizare si politica de confidentialitate</p>
          </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
