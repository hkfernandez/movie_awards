import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import NominatedMovieList from './components/NominatedMovieList';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/nominatedMovies' component={NominatedMovieList} />
    </Router>
  );
}

export default App;
