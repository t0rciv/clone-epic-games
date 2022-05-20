import React from 'react'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import './CardList.scss'

const CardList = ({ cards }) => (
  <main>
    <h4>Destaques da MEGAPROMOÇÃO</h4>
    <div className="container">
      {cards.map(({ id, image, title, excerpt, action, detail }) => (
        <Col key={id}>
          <img src={image} />
          <h5>{title}</h5>
          <div className="detalhes">
            <p className="risco">{detail}</p>
            <p>{excerpt}</p>
          </div>
          <button>{action}</button>
        </Col>
      ))}
      ;
    </div>
  </main>
)

export default CardList
