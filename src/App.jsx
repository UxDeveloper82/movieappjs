// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MovieSearch from './components/MovieSearch';
import MovieDetail from './components/MovieDetail';


const App = () => {
  return (
    <Router>
    <div className="app">
      <h1>MovieSearch</h1>
      <Routes>
        <Route path="/movie" element={<MovieSearch />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  </Router>
  );
};

export default App;
