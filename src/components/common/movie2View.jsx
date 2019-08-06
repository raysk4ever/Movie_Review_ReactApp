import React from "react";
import Like from "./like";

const Movie2View = props => {
  return (
    <div className="row">
      {props.movies.map(movie => (
        <div key={movie._id} className="card m-2" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={`https://picsum.photos/${300}`}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <div className="row">
              <div className="col-auto">{movie.genre.name}</div>
              <div className="col-auto">{movie.dailyRentalRate}</div>
              <div className="col-auto">
                <Like
                  onClick={() => props.onLikeClick(movie)}
                  liked={movie.liked}
                />
              </div>
            </div>

            <button className="btn btn-primary m-2">View</button>
            <button
              onClick={() => props.onDeleteClick(movie)}
              className="btn btn-danger m-2"
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie2View;
