import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class AddMovie extends Form {
  state = {
    data: {
      name: "",
      genre: "",
      dailyRentalRate: "",
      rating: ""
    },
    errors: {}
  };

  Schema = {
    name: Joi.string().required(),
    // genre: Joi.string().required(),
    dailyRentalRate: Joi.number().required(),
    rating: Joi.number().required()
  };
  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <from onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Movie Title")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate", "number")}
          {this.renderInput("rating", "Rating", "number")}
          {this.renderBtn("Add")}
        </from>
      </div>
    );
  }
}
export default AddMovie;
