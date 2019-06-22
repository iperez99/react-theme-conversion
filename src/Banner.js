import React from 'react';

function Banner(props) {
  return (
    <section id="banner">
      <div className="inner">
        <h1>704 Yard Sale</h1>
        <p>Find a yard sale with ease!</p>
      </div>
      <video autoPlay loop muted playsInline src="images/drone.mp4" />
    </section>
  );
}

export default Banner;
