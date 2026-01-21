import { useState } from "react";
import "./App.css";
import Moviecard from "./component/Moviecard";

function App() {
  const [favmovies, setFavmovies] = useState([]);

  const [userinput, setInput] = useState("");

  function reset() {
    setInput("");
    setFavmovies([]);
  }

  const movies = [
    // A
    {
      id: 1,
      title: "Avatar",
      year: 2009,
      genre: "Sci-Fi",
      rating: 7.8,
      maintag: "Adventure",
      tags: ["Aliens", "Space", "Future"],
      isFavorite: false,
    },
    {
      id: 2,
      title: "Avengers",
      year: 2012,
      genre: "Action",
      rating: 8.0,
      maintag: "Action",
      tags: ["Marvel", "Superhero", "Team"],
      isFavorite: false,
    },
    {
      id: 3,
      title: "Arrival",
      year: 2016,
      genre: "Sci-Fi",
      rating: 7.9,
      maintag: "Drama",
      tags: ["Aliens", "Time", "Language"],
      isFavorite: false,
    },
    // B
    {
      id: 4,
      title: "Batman Begins",
      year: 2005,
      genre: "Action",
      rating: 8.2,
      maintag: "Action",
      tags: ["DC", "Hero", "Origin"],
      isFavorite: false,
    },
    {
      id: 5,
      title: "Black Panther",
      year: 2018,
      genre: "Action",
      rating: 7.3,
      maintag: "Action",
      tags: ["Marvel", "King", "Wakanda"],
      isFavorite: false,
    },
    {
      id: 6,
      title: "Braveheart",
      year: 1995,
      genre: "Drama",
      rating: 8.3,
      maintag: "History",
      tags: ["War", "Freedom", "Scotland"],
      isFavorite: false,
    },

    // C
    {
      id: 7,
      title: "Casino Royale",
      year: 2006,
      genre: "Action",
      rating: 8.0,
      maintag: "Spy",
      tags: ["Bond", "Thriller", "Espionage"],
      isFavorite: false,
    },
    {
      id: 8,
      title: "Coco",
      year: 2017,
      genre: "Animation",
      rating: 8.4,
      maintag: "Family",
      tags: ["Music", "Emotion", "Afterlife"],
      isFavorite: false,
    },
    {
      id: 9,
      title: "Cars",
      year: 2006,
      genre: "Animation",
      rating: 7.1,
      maintag: "Kids",
      tags: ["Racing", "Fun", "Friendship"],
      isFavorite: false,
    },

    // D
    {
      id: 10,
      title: "Dune",
      year: 2021,
      genre: "Sci-Fi",
      rating: 8.1,
      maintag: "Adventure",
      tags: ["Desert", "Future", "Politics"],
      isFavorite: false,
    },
    {
      id: 11,
      title: "The Dark Knight",
      year: 2008,
      genre: "Action",
      rating: 9.0,
      maintag: "Action",
      tags: ["Batman", "Joker", "Crime"],
      isFavorite: false,
    },
    {
      id: 12,
      title: "Doctor Strange",
      year: 2016,
      genre: "Fantasy",
      rating: 7.5,
      maintag: "Magic",
      tags: ["Marvel", "Time", "Multiverse"],
      isFavorite: false,
    },

    // E
    {
      id: 13,
      title: "Endgame",
      year: 2019,
      genre: "Action",
      rating: 8.4,
      maintag: "Action",
      tags: ["Marvel", "Finale", "Time"],
      isFavorite: false,
    },
    {
      id: 14,
      title: "Elysium",
      year: 2013,
      genre: "Sci-Fi",
      rating: 6.6,
      maintag: "Future",
      tags: ["Space", "Technology", "Society"],
      isFavorite: false,
    },
    {
      id: 15,
      title: "Everest",
      year: 2015,
      genre: "Adventure",
      rating: 7.1,
      maintag: "Survival",
      tags: ["Mountain", "Disaster", "TrueStory"],
      isFavorite: false,
    },

    // F
    {
      id: 16,
      title: "Fight Club",
      year: 1999,
      genre: "Drama",
      rating: 8.8,
      maintag: "Psychology",
      tags: ["Mind", "Dark", "Identity"],
      isFavorite: false,
    },
    {
      id: 17,
      title: "Frozen",
      year: 2013,
      genre: "Animation",
      rating: 7.4,
      maintag: "Family",
      tags: ["Snow", "Music", "Sisters"],
      isFavorite: false,
    },
    {
      id: 18,
      title: "Ford v Ferrari",
      year: 2019,
      genre: "Drama",
      rating: 8.1,
      maintag: "Racing",
      tags: ["Cars", "Competition", "TrueStory"],
      isFavorite: false,
    },

    // G
    {
      id: 19,
      title: "Gladiator",
      year: 2000,
      genre: "Action",
      rating: 8.5,
      maintag: "War",
      tags: ["Rome", "Revenge", "Empire"],
      isFavorite: false,
    },
    {
      id: 20,
      title: "Gravity",
      year: 2013,
      genre: "Sci-Fi",
      rating: 7.7,
      maintag: "Survival",
      tags: ["Space", "Isolation", "Disaster"],
      isFavorite: false,
    },
    {
      id: 21,
      title: "The Godfather",
      year: 1972,
      genre: "Crime",
      rating: 9.2,
      maintag: "Mafia",
      tags: ["Family", "Power", "Crime"],
      isFavorite: false,
    },

    // H
    {
      id: 22,
      title: "Harry Potter",
      year: 2001,
      genre: "Fantasy",
      rating: 7.6,
      maintag: "Magic",
      tags: ["Wizard", "School", "Adventure"],
      isFavorite: false,
    },
    {
      id: 23,
      title: "Hulk",
      year: 2008,
      genre: "Action",
      rating: 6.6,
      maintag: "Superhero",
      tags: ["Marvel", "Rage", "Science"],
      isFavorite: false,
    },
    {
      id: 24,
      title: "Her",
      year: 2013,
      genre: "Romance",
      rating: 8.0,
      maintag: "Emotion",
      tags: ["AI", "Love", "Future"],
      isFavorite: false,
    },

    // I
    {
      id: 25,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      rating: 8.6,
      maintag: "Adventure",
      tags: ["Space", "Time", "Emotion"],
      isFavorite: true,
    },
    {
      id: 26,
      title: "Inception",
      year: 2010,
      genre: "Sci-Fi",
      rating: 8.8,
      maintag: "Action",
      tags: ["Dream", "Mind", "Heist"],
      isFavorite: false,
    },
    {
      id: 27,
      title: "Iron Man",
      year: 2008,
      genre: "Action",
      rating: 7.9,
      maintag: "Tech",
      tags: ["Marvel", "Hero", "Suit"],
      isFavorite: false,
    },

    // J
    {
      id: 28,
      title: "Joker",
      year: 2019,
      genre: "Drama",
      rating: 8.4,
      maintag: "Psychology",
      tags: ["Dark", "Villain", "Mental"],
      isFavorite: false,
    },
    {
      id: 29,
      title: "Jaws",
      year: 1975,
      genre: "Thriller",
      rating: 8.1,
      maintag: "Survival",
      tags: ["Shark", "Ocean", "Fear"],
      isFavorite: false,
    },
    {
      id: 30,
      title: "John Wick",
      year: 2014,
      genre: "Action",
      rating: 7.4,
      maintag: "Revenge",
      tags: ["Assassin", "Gun", "Crime"],
      isFavorite: false,
    },

    // Extra (31–55)
    {
      id: 31,
      title: "Matrix",
      year: 1999,
      genre: "Sci-Fi",
      rating: 8.7,
      maintag: "Action",
      tags: ["Simulation", "AI", "Reality"],
      isFavorite: false,
    },
    {
      id: 32,
      title: "Titanic",
      year: 1997,
      genre: "Romance",
      rating: 7.9,
      maintag: "Drama",
      tags: ["Love", "Disaster", "Ship"],
      isFavorite: false,
    },
    {
      id: 33,
      title: "Shutter Island",
      year: 2010,
      genre: "Thriller",
      rating: 8.2,
      maintag: "Mystery",
      tags: ["Mind", "Twist", "Psychology"],
      isFavorite: false,
    },
    {
      id: 34,
      title: "Mad Max: Fury Road",
      year: 2015,
      genre: "Action",
      rating: 8.1,
      maintag: "Chase",
      tags: ["Desert", "Survival", "Cars"],
      isFavorite: false,
    },
    {
      id: 35,
      title: "The Prestige",
      year: 2006,
      genre: "Drama",
      rating: 8.5,
      maintag: "Mystery",
      tags: ["Magic", "Rivalry", "Twist"],
      isFavorite: false,
    },
    {
      id: 36,
      title: "Whiplash",
      year: 2014,
      genre: "Drama",
      rating: 8.5,
      maintag: "Music",
      tags: ["Drums", "Motivation", "Obsession"],
      isFavorite: false,
    },
    {
      id: 37,
      title: "Parasite",
      year: 2019,
      genre: "Thriller",
      rating: 8.6,
      maintag: "Social",
      tags: ["Class", "Twist", "Dark"],
      isFavorite: false,
    },
    {
      id: 38,
      title: "La La Land",
      year: 2016,
      genre: "Romance",
      rating: 8.0,
      maintag: "Music",
      tags: ["Love", "Dreams", "Dance"],
      isFavorite: false,
    },
    {
      id: 39,
      title: "Up",
      year: 2009,
      genre: "Animation",
      rating: 8.2,
      maintag: "Adventure",
      tags: ["Emotion", "Journey", "Friendship"],
      isFavorite: false,
    },
    {
      id: 40,
      title: "Toy Story",
      year: 1995,
      genre: "Animation",
      rating: 8.3,
      maintag: "Family",
      tags: ["Toys", "Friendship", "Kids"],
      isFavorite: false,
    },

    {
      id: 41,
      title: "Skyfall",
      year: 2012,
      genre: "Action",
      rating: 7.8,
      maintag: "Spy",
      tags: ["Bond", "MI6", "Thriller"],
      isFavorite: false,
    },
    {
      id: 42,
      title: "The Wolf of Wall Street",
      year: 2013,
      genre: "Drama",
      rating: 8.2,
      maintag: "Biography",
      tags: ["Money", "Crime", "Business"],
      isFavorite: false,
    },
    {
      id: 43,
      title: "Se7en",
      year: 1995,
      genre: "Thriller",
      rating: 8.6,
      maintag: "Crime",
      tags: ["Detective", "Dark", "Mystery"],
      isFavorite: false,
    },
    {
      id: 44,
      title: "Alien",
      year: 1979,
      genre: "Sci-Fi",
      rating: 8.5,
      maintag: "Horror",
      tags: ["Space", "Survival", "Monster"],
      isFavorite: false,
    },
    {
      id: 45,
      title: "Blade Runner 2049",
      year: 2017,
      genre: "Sci-Fi",
      rating: 8.0,
      maintag: "Future",
      tags: ["AI", "Cyberpunk", "Identity"],
      isFavorite: false,
    },

    {
      id: 46,
      title: "Rocky",
      year: 1976,
      genre: "Drama",
      rating: 8.1,
      maintag: "Sports",
      tags: ["Boxing", "Motivation", "Underdog"],
      isFavorite: false,
    },
    {
      id: 47,
      title: "Logan",
      year: 2017,
      genre: "Action",
      rating: 8.1,
      maintag: "Drama",
      tags: ["Marvel", "Dark", "Hero"],
      isFavorite: false,
    },
    {
      id: 48,
      title: "No Country for Old Men",
      year: 2007,
      genre: "Crime",
      rating: 8.2,
      maintag: "Thriller",
      tags: ["Violence", "Fate", "Chase"],
      isFavorite: false,
    },
    {
      id: 49,
      title: "The Social Network",
      year: 2010,
      genre: "Drama",
      rating: 7.7,
      maintag: "Biography",
      tags: ["Facebook", "Tech", "Business"],
      isFavorite: false,
    },
    {
      id: 50,
      title: "Life of Pi",
      year: 2012,
      genre: "Adventure",
      rating: 7.9,
      maintag: "Survival",
      tags: ["Ocean", "Faith", "Journey"],
      isFavorite: false,
    },

    {
      id: 51,
      title: "The Revenant",
      year: 2015,
      genre: "Adventure",
      rating: 8.0,
      maintag: "Survival",
      tags: ["Nature", "Revenge", "Wild"],
      isFavorite: false,
    },
    {
      id: 52,
      title: "A Quiet Place",
      year: 2018,
      genre: "Horror",
      rating: 7.5,
      maintag: "Survival",
      tags: ["Silence", "Monster", "Family"],
      isFavorite: false,
    },
    {
      id: 53,
      title: "Moonlight",
      year: 2016,
      genre: "Drama",
      rating: 7.4,
      maintag: "Emotion",
      tags: ["Identity", "Life", "Growth"],
      isFavorite: false,
    },
    {
      id: 54,
      title: "The Batman",
      year: 2022,
      genre: "Action",
      rating: 7.9,
      maintag: "Detective",
      tags: ["DC", "Dark", "Crime"],
      isFavorite: false,
    },
    {
      id: 55,
      title: "Spider-Man: No Way Home",
      year: 2021,
      genre: "Action",
      rating: 8.3,
      maintag: "Superhero",
      tags: ["Marvel", "Multiverse", "Nostalgia"],
      isFavorite: false,
    },
    {
      id: 56,
      title: "Star Wars: A New Hope",
      year: 1977,
      genre: "Sci-Fi",
      rating: 8.6,
      maintag: "Space Opera",
      tags: ["Rebels", "Force", "Galaxy"],
      isFavorite: false,
    },

    {
      id: 57,
      title: "The Star",
      year: 2017,
      genre: "Animation",
      rating: 6.1,
      maintag: "Family",
      tags: ["Journey", "Friends", "Adventure"],
      isFavorite: false,
    },

    {
      id: 58,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      rating: 8.6,
      maintag: "Adventure",
      tags: ["Space", "Time", "Survival"],
      isFavorite: false,
    },
  ];

  function favMovie(movie) {
    setFavmovies((prev) => {
      const exists = prev.find((m) => m.id === movie.id);

      if (exists) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  }

  const filteredMovies = movies.filter((movie) => {
    let lowercase = userinput.toLowerCase();

    return movie.title.toLowerCase().includes(lowercase);
  });

  return (
    <>
      <div className="movie-box">
        <h1>Movie Explorer</h1>
        <p className="bio">Start typing to search movies</p>

        <div className="full-search-box">
          <div className="search-box">
            <i className="lni lni-search-1" style={{ fontSize: "24px" }}></i>
            <input
              type="text"
              className="input-box"
              placeholder='Search movies (e.g. "Interstellar", "Star")'
              value={userinput}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />

            <i
              className="lni lni-xmark"
              style={{ fontSize: "24px" }}
              onClick={() => {
                setInput("");
              }}
            ></i>
          </div>

          <div className="reset-button" onClick={reset}>
            <i
              class="lni lni-refresh-circle-1-clockwise"
              style={{ color: "white" }}
            ></i>
            <span>Reset</span>
          </div>
        </div>

        <h3>
          {userinput === ""
            ? "All Movies"
            : `${filteredMovies.length} results for "${userinput}"`}
        </h3>

        <div className="movie-component">
          <div className="matching-movies">
            <h4>Matching Movies</h4>
            {filteredMovies.length === 0 ? (
              <p className="no-movie">No movies found</p>
            ) : (
              filteredMovies.map((movie) => (
                <Moviecard
                  key={movie.id}
                  movie={movie}
                  handlefav={favMovie}
                  isfav={favmovies.some((m) => m.id === movie.id)}
                  title={movie.title}
                  year={movie.year}
                  genre={movie.genre}
                  rating={movie.rating}
                  maintag={movie.maintag}
                  tags={movie.tags}
                />
              ))
            )}
          </div>

          <div className="fav-movies">
            <h4>Favorite Movies</h4>
            {favmovies.length > 0 ? (
              <div
                className="fav-movie-list"
                style={{
                  display: "flex",
                  overflowX: "auto",
                  gap: "10px",
                  paddingBottom: "10px",
                }}
              >
                {favmovies.map((movie) => (
                  <div className="fav-movie-card" key={movie.id}>
                    <i
                      className="fa-solid fa-heart"
                      style={{ color: "#ff0000", cursor: "pointer" }}
                      onClick={() => favMovie(movie)}
                    ></i>
                    <h6>
                      {movie.title} ({movie.year})
                    </h6>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-movie">You haven't added any favorites yet.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
