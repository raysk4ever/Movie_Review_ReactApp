import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <div className="container">
        {/* <Link to="/movies/addMovie" className="btn btn-primary m-2">
          Add Movie
        </Link> */}
        <Table
          columns={this.columns}
          data={movies}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </div>
    );
  }
}

export default MoviesTable;
