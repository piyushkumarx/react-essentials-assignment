import React from "react";
import "./Moviecard.css";

function Moviecard({ movie, handlefav, isfav }) {
  return (
    <div className="movie-card">
      <div className="left-postion">
        <div className="movie-basic-info">
          <span className="movie-name">{movie.title}</span>
          <span className="basic-info">{movie.year}</span>
          <span className="basic-info">{movie.genre}</span>
        </div>
        <div className="rating">
          <span className="imdb-rating">
            <i
              className="fa-solid fa-star fa-sm"
              style={{ color: "#e4be37" }}
            ></i>
            <span>{movie.rating}</span>
          </span>
          <span className="genre">{movie.maintag}</span>
          <ul>
            {movie.tags.map((tag)=>{
              return <li>{tag}</li>
            })}
          </ul>
        </div>
      </div>

      <div className="fav" onClick={()=>{handlefav(movie)}} style={{backgroundColor : isfav? "#ef4444" : ""}}>
        <i className="lni lni-heart" style={{color : isfav? "#ffffff": ""}}></i>
        <span style={{color : isfav? "#ffffff" : ""}}>{isfav? "Favorited" : "Favorite"}</span>
      </div>
    </div>
  );
}

export default Moviecard;

