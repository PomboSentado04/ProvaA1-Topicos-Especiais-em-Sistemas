import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Listar from './components/pages/livro/Listar';
import Cadastrar from './components/pages/livro/Cadastrar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/livro/cadastrar">Cadastrar Livro</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Listar/>}/>
          <Route path="/pages/livro/cadastrar" element={<Cadastrar/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
