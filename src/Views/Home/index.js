import React from 'react';
import { useNavigate } from 'react-router-dom';
import Categoria from '../../assets/images/categories/categorias.png';
import './index.css';

export default function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/details');
  }

  const categories = [
    { id: 1, description: 'Categorias' },
    { id: 2, description: 'Roupas Femininas' },
    { id: 3, description: 'Roupas Masculinas' },
    { id: 4, description: 'Eletrônicos e acessórios' },
    { id: 5, description: 'Eletrodomésticos' },
    { id: 6, description: 'Essenciais para o lar' },
    { id: 7, description: 'Esporte e lazer' },
    { id: 8, description: 'Beleza e saúde' },
    { id: 9, description: 'Laptops' },
    { id: 10, description: 'Essenciais para limpeza' },
    { id: 11, description: 'Perfumaria' },
    { id: 12, description: 'Peças automotivas' },
  ];

  return (
    <section className="bw-section-categories">
      {categories.map((categoria) => {
        return (
          <div className="categoryBalls" key={categoria.id} onClick={handleNavigate}>
            <img className="balls" src={Categoria} alt={categoria.alt} />
            <h3>{categoria.description}</h3>
          </div>
        );
      })}
    </section>
  );
}
