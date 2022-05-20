import React from 'react'

import Navigation from './components/Navigation'
import FixedScroll from './components/FixedScroll'
import Hero from './components/Hero'
import CardList from './components/CardList'

import cards from './data/cards'

import './App.scss'

function App() {
  return (
    <div className="App">
      <Navigation />
      <FixedScroll />
      <Hero />
      <CardList cards={cards} />
    </div>
  )
}

export default App
