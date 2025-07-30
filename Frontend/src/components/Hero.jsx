import React from 'react';
import hero2 from '../assets/bg-hero.jpg';

function Hero(props) {
  return (
    <>
      <div
        className="h-[65%] bg-cover bg-no-repeat flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `linear-gradient(to right bottom, rgba(0,0,4,0.8), rgba(0,0,25,0.8)), url(${hero2})`,
        }}
      >
        <h1 className="text-5xl font-semibold">{props.title}</h1>
      </div>
    </>
  );
}

export default Hero;
