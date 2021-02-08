import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import 'bulma';
import { Link, Route } from 'react-router-dom';
import { getCharacters } from './api.js';
import { CharactersList } from './components/CharactersList/CharactersList';

function App() {

 const [characters, setCharacters] = useState([]);
 const [charPage, setCharPage] = useState(1)

  useEffect(() => {
    getCharacters('/character').then((gotten) => {
      console.log(gotten);
      console.log(gotten.results);
      setCharacters(gotten.results);
    })
  }, [])

  const handleCharPegination = (number) => {
    getCharacters(`/character/?page=${number}`).then((gotten) => {
      console.log(gotten);
      setCharacters(gotten.results);
    })
    setCharPage(number)
  }

  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/characters">
        Characters
        </Link>
        <Link className="navbar-item" to="/episodes">
        Episodes
        </Link>
        <Link className="navbar-item" to="/locations">
        Locations
        </Link>
        <Link className="navbar-item" to="/mywatch">
        My Watch
        </Link>
      </div>
    </nav>
  
  <section className="section">
  <div className="container">
    <div className="columns">
      <div className="column">
      <Route path="/characters">
      <h2>Characters</h2>
      <CharactersList charPage={charPage} handleCharPegination={handleCharPegination} characters={characters} />
    </Route>
    <Route path="/episodes">
      <h2>Episodes</h2>
    </Route>
    <Route path="/locations">
      <h2>Locations</h2>
    </Route>
    <Route path="/mywatch">
      <h2>My watch</h2>
    </Route>
      </div>

    </div>

  </div>
</section>
</>
  );
}

export default App;
