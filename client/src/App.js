import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import NominatedMovieList from './components/NominatedMovieList';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/nominatedMovies' component={NominatedMovieList} />
    </Router>
  );
}

export default App;
