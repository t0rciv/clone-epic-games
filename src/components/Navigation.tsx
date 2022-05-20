import React from "react";
import logo from '../assets/imgLogo.png';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav>
      <div className="navbar">

        <div>
            <img className='imgLogo' src={logo} alt="Logo Epic Games" />
        </div>

        <div className="menu-logo">
          <a className="menu-logo ativo" href="#">STORE</a>
          <a className="menu-logo" href="#">PERGUNTAS FREQUENTES</a>
          <a className="menu-logo" href="#">AJUDA</a>
          <a className="menu-logo" href="#">UNREAL ENGINE</a>
        </div>

      </div>

      <div className="header-options">
        
        <button className="sign-btn"> 
          ENTRAR         
        </button>
            
        <button className="download-btn">
        DISPONÍVEL APENAS PARA PC E MAC
        </button>

      </div>
    </nav>
  );
};

export default Navigation;