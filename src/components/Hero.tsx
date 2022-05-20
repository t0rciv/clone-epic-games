import React from "react";

import fall from '../assets/fall-guys.jpg';
import vampire from '../assets/vampire.webp';
import evil from '../assets/evil.jpeg';
import myth from '../assets/MythForce.jpg';
import space from '../assets/Space.webp';

import './Hero.scss';

const Hero = () => (
  <section className='hero'>
    <div className="central">
      <img src={fall} className='img-p' />
    </div>
    <div className="lateral">

      <div className="img-lateral">
        <img src={fall} className='img-s' />
        <p>Fall Guys</p>
      </div>   

      <div className="img-lateral">
        <img src={vampire} className='img-s' />
        <p>Vampire: The Masquerade</p>
      </div>

      <div className="img-lateral">  
        <img src={evil} className='img-s' />
        <p>Evil Dead: The Game</p>
      </div>

      <div className="img-lateral">
        <img src={myth} className='img-s' />
        <p>Salt and Sacrifice</p>
      </div>

      <div className="img-lateral">  
        <img src={space} className='img-s' />
        <p>Megapromoção 2022</p>
      </div>  
      
    </div>
  </section>
);
 
export default Hero;