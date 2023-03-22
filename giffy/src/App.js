import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route, useLocation } from 'wouter';

function App() {
  const [busqueda, setBusqueda] = useState('');
  const [location, setLocation] = useLocation();

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <label>
          <label for="busqueda">Busca:  </label>
          <input type="text" id="busqueda" name="busqueda" onChange={event => setBusqueda(event.target.value)} value={busqueda} />
          <button onClick={() => setLocation(`/gif/${busqueda}`)}>Buscar</button>
        </label>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/ecuador'>Gifs de Ecuador</Link>
        <Link to='/gif/chile'>Gifs de Chile</Link>
        <Link to='/gif/colombia'>Gifs de Colombia</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
