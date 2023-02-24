// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Klasemen from './pages/Klasemen'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Pertandingan from './pages/Pertandingan';
import NotFound from './pages/Notfound';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Klasemen/>}/>
          <Route path='/pertandingan' element={<Pertandingan/>}/>
          <Route path='/dropdown' element={<Dropdown/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
