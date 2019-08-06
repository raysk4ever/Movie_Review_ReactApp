import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MovieTable from "./maovieTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listgroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    selectedGenre: "",
    sortColumn: {
      path: "title",
      order: "asc"
    }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  renderMessage = totalCount => {
    if (totalCount > 0) {
      return "There are currently " + totalCount + " movies in the database";
    }
  };
  handleDelete = movie => {
    let movies = [...this.state.movies];
    movies = movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
    console.table(movie._id);
  };
  handleLikeclick = movie => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    let currentmovie = movies[index];
    let isliked = currentmovie.liked;
    if (isliked) currentmovie.liked = false;
    else currentmovie.liked = true;

    this.setState({ movies });
  };
  handlePageItemClick = page => {
    this.setState({ currentPage: page });
  };
  handleGenreItemSelected = item => {
    this.setState({ selectedGenre: item, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      movies: allMovies,
      selectedGenre,
      pageSize,
      currentPage,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { currentPage, sortColumn } = this.state;

    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>;

    const { totalCount, data: movies } = this.getPageData();

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            selectedItem={this.state.currentGenre}
            selectedGenre={this.state.selectedGenre}
            items={this.state.genres}
            onGenreItemSelected={this.handleGenreItemSelected}
          />
        </div>
        <div className="col">
          <p>{this.renderMessage(totalCount)}</p>
          <MovieTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLikeclick}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            itemCount={totalCount}
            currentPage={currentPage}
            pageSize={this.state.pageSize}
            onPageItemClick={this.handlePageItemClick}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
