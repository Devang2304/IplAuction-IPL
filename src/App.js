import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Search from './Components/Search';
import Calculator from './Components/Calculator';
import Leaderboard from './Components/Leaderboard';
import OtherTeams from './Components/OtherTeams';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
    {
      window.location.pathname==="/login"?
      <Login />:
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard/>}/>
          <Route exact path="/search" element={<Search/>} />
          <Route exact path='/calculator' element={<Calculator/>}/>
          <Route exact path='/leaderboard' element={<Leaderboard/>}/>
          <Route exact path='/otherteams/:name' element={<OtherTeams />}/>
        </Routes>
    </BrowserRouter>
    }
    </div>
  );
}

export default App;
