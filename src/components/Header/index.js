import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import Logo from '../../assets/images/icons/logo.png';
import './index.css';

export default function Header() {
  const navigate = useNavigate();

  function handleNavigate(page) {
    if (page === 'home') {
      navigate('/');
    }
    if (page === 'loginUser') {
      navigate('/loginuser');
    }
    if (page === 'minicart') {
      navigate('/minicart');
    }
  }

  return (
    <div className="bw-container-master">
      <section className="bw-container">
        <div className="bw-container-child">
          <AiOutlineMenu className="bw-icon" />

          <div>
            <img className="bw-image" src={Logo} alt="Logo do aplicativo" onClick={() => handleNavigate('home')} />
          </div>
        </div>

        <div className="bw-container-cartAndLogin">
          <AiOutlineUser className="bw-icon" onClick={() => handleNavigate('loginUser')} />
          <BsFillCartFill className="bw-icon" onClick={() => handleNavigate('minicart')} />
        </div>
      </section>

      <section className="bw-container">
        <input className="bw-input" type="text" placeholder="tudo por 1 real e frete gratis fone sem fio" />
      </section>
    </div>
  );
}
