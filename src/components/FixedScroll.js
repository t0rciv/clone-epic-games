import React from 'react'

import './FixedScroll.scss'

const FixedScroll = () => (
  <header id="navigation" className="">
    <div className="ajuste">
      <div className="pesquisar">
        <input placeholder="Pesquisar" />
      </div>
      <ul className="opcoes">
        <li className="opcoes ativo">Descobrir</li>
        <li className="opcoes">Navegar</li>
        <li className="opcoes">Novidades</li>
      </ul>
    </div>
  </header>
)

export default FixedScroll
