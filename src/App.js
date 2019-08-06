import React, { Component } from "react";
import Nav from "./components/nav";
import { Route, Switch, Redirect } from "react-router-dom";
import Movie from "./components/movie";
import Movie2 from "./components/movie2";
import Products from "./components/products";
import Admin from "./components/admin";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import Login from "./components/login";
import Register from "./components/register";
import AddMovie from "./components/addMovie";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/movies/addMovie" component={AddMovie} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movie} />
            <Route path="/movies2" component={Movie2} />
            <Route path="/products" component={Products} />
            <Route path="/admin" component={Admin} />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
