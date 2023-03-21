import React, {useState} from 'react';
import memesData from '../memesData';

const Meme = () => {
  
  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "",
    randomImage: ""
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage () {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(preState => ({
      ...preState, 
      randomImage: url
    }))
  }

  return (
    <main>
        <div className='form'>
            <input 
              type="text" 
              placeholder='Top text' 
              className='form--input' 
            />
            <input 
              type="text" 
              placeholder='Bottom text' 
              className='form--input' 
            />
            <button 
              className='form--btn'
              onClick={getMemeImage}
            >
              Get a new meme image  🖼
            </button>
        </div>
        <img src={meme.randomImage} className="meme--image" />
    </main>
  );
};

export default Meme;