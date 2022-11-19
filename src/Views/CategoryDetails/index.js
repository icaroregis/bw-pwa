import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function CategoryDetails() {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  return (
    <div>
      <h1>Página Detalhes</h1>
      <br />
      <button onClick={handleBack}>voltar para home</button>
    </div>
  );
}
