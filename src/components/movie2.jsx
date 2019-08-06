import React, { Component } from "react";
import _ from "lodash";
import Movie2View from "./common/movie2View";
import MyPagination from "./common/myPagination";
import RenderGenres from "./common/renderGenres";
import { paginate } from "./../utils/paginate";
import { getGenres } from "./../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Sorting from "./sorting";

class Movie2 extends Component {
  state = {
    movies: [],
    count: 0,
    currentPage: 1,
    pageSize: 3,
    genres: [],
    selectedGenre: "",
    currentGenre: "All Genres",
    sortColumn: {
      path: "title",
      order: "asc"
    }
  };
  header = [{ path: "title", id: 1 }, { path: "genre", id: 2 }];

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ name: "All Genres", _id: "" }, ...getGenres()]
    });
  }

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    const currentMovie = movies[index];
    let isLiked = currentMovie.liked;
    if (isLiked) currentMovie.liked = false;
    else currentMovie.liked = true;
    this.setState({ movies });
  };

  handleSort = item => {
    const sortColumn = { ...this.state.sortColumn };
    if (item.path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = item.path;
      sortColumn.order = item.order;
    }

    this.setState({ sortColumn });
  };

  handleItemClick = item => {
    this.setState({ selectedGenre: item, currentPage: 1 });
  };

  handleDelete = movie => {
    let movies = [...this.state.movies];
    movies = movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageClick = page => {
    // console.log("pageClick", page);
    this.setState({ currentPage: page });
  };

  getPageData = () => {
    const {
      movies: allMovies,
      selectedGenre,
      currentPage,
      pageSize,
      sortColumn
    } = this.state;

    const filteredMovie =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(
      filteredMovie,
      // [sortColumn.path],
      sortColumn.path,
      sortColumn.order
      // [sortColumn.order]
    );
    console.log(sortColumn);
    const movies = paginate(sorted, currentPage, pageSize);
    return { movies, totalCount: filteredMovie.length };
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies, totalCount } = this.getPageData();
    return (
      <div className="row">
        <div className="col-2">
          <RenderGenres
            items={this.state.genres}
            onItemClick={this.handleItemClick}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          {count === 0 ? (
            <p>there are no movies in the databas</p>
          ) : (
            <p>Showing {count} movies in the database</p>
          )}

          <Sorting sortItems={this.header} onSort={this.handleSort} />
          <Movie2View
            onLikeClick={this.handleLike}
            onDeleteClick={this.handleDelete}
            movies={movies}
          />
          <MyPagination
            itemSize={totalCount}
            pageSize={4}
            currentPage={this.state.currentPage}
            onPageClick={this.handlePageClick}
          />
        </div>
      </div>
    );
  }
}

export default Movie2;
