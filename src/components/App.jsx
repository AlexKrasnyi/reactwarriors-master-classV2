import React from "react";
import { moviesData } from "../moviesData";
<<<<<<< Codesandbox
import MovieItems from "./MovieItems";

function MovieItem(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.rating}</p>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <MovieItem title="Title new" rating={9.8} />
//     </div>
//   );
function delMovie(movie) {
  const updateMovies = this.state.movies.filter(item => {
    return item.id !== movie.id;
  });
  console.log(updateMovies);
  this.setState({ movies: updateMovies });
}
=======

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: moviesData
    };
  }
  render() {
    console.log(this);
    return (
      <div>
        {this.state.movies.map(function(movie) {
          return <p>{movie.title}</p>;
        })}
      </div>
    );
  }
}
// let title = "Hello ReactWarriors!";
// function App() {
//   console.log(moviesData);
//   return <div>{title}</div>;
// }
>>>>>>> GitHub

<<<<<<< Codesandbox
class App extends React.Component {
  constructor() {
=======
export default App;

>>>>>>> GitHub
    super();
    this.state = {
      movies: moviesData
    };
  }
  render() {
    return (
      <div>
        {this.state.movies.map(movie => {
          return (
            <MovieItems key={movie.id} movie={movie} delMovie={this.delMovie} />
          );
        })}
      </div>
    );
  }
}
// let title = "Hello ReactWarriors!";
// function App() {
//   console.log(moviesData);
//   return <div>{title}</div>;
// }

export default App;
