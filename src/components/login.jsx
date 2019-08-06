import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {}
  };

  Schema = {
    email: Joi.string().required(),
    password: Joi.string().required()
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderBtn("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
