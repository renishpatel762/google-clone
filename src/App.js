import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Router>

      {/* <h1>hello google 🚩</h1> */}
      {/* Home (the one with the search on) */}

      {/* Search page (The result page) */}
      {/* <Home /> */}

    </div>
  );
}

export default App;
