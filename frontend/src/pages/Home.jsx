import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LupinLogoVetor from '../assets/LupinLogoVetor.svg';
import ElementoSuperiorEsquerdo from '../assets/ElementoSuperiorEsquerdo.svg';
import ElementoSuperiorDireito from '../assets/ElementoSuperiorDireito.svg';
import ElementoInferiorEsquerdo from '../assets/ElementoInferiorEsquerdo.svg';
import ElementoInferiorDireito from '../assets/ElementoInferiorDireito.svg';
import './Home.css';

export default function Home() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/login');
  //   }, 8000);
  //
  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <div className="home-container">
      {/* Elementos Orgânicos nos Cantos */}
      <img src={ElementoSuperiorEsquerdo} alt="" className="ElementosOrganicos" id="SuperiorEsquerdo" />
      <img src={ElementoSuperiorDireito} alt="" className="ElementosOrganicos" id="SuperiorDireito" />
      <img src={ElementoInferiorEsquerdo} alt="" className="ElementosOrganicos" id="InferiorEsquerdo" />
      <img src={ElementoInferiorDireito} alt="" className="ElementosOrganicos" id="InferiorDireito" />

      {/* Conteúdo Central */}
      <main className="hero-content">
        <img src={LupinLogoVetor} alt="Logo Lupin" id="logologin" />

        <div className="role-buttons-container">
          <p id="doador">doador</p>
          <p id="adotante">adotante</p>
        </div>
      </main>

      {/* Rodapé */}
      <nav>
        <Link to="/sobre" className="link-projeto">Sobre o projeto</Link>
        <Link to="/perguntas" className="link-faq">Perguntas Frequentes</Link>
      </nav>
    </div>
  );
}