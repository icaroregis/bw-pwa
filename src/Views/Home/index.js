import React from 'react';
import { useNavigate } from 'react-router-dom';
import Teste from '../../assets/images/categories/beleza-e-saude.jpg';
import './index.css';

export default function PageOne() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/page-two');
  }

  return (
    <div>
      <h1>Página Um</h1>
      <br />
      <img src={Teste} alt="" />
      <button onClick={handleNavigate}>ir para proxima página</button>
    </div>
  );
}
