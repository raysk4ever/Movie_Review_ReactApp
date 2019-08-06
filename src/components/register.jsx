import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  Schema = {
    name: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        {this.renderInput("name", "Name")}
        {this.renderInput("email", "Email", "email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderBtn("Register")}
      </div>
    );
  }
}

export default Register;
