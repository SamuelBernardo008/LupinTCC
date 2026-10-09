import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SobreProjeto from './pages/SobreProjeto';
import PerguntasFrequentes from './pages/PerguntasFrequentes';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<SobreProjeto />} />
        <Route path="/perguntas" element={<PerguntasFrequentes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;