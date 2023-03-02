import React from 'react';
import trollFace from '..//images/troll-face.png'

const Navbar = () => {
  return (
    <header className='navbar'>
        <img src={trollFace} />
        <h2>Meme Generator</h2>
    </header>
  );
};

export default Navbar;