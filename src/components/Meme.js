import React, {useState} from 'react';
import memesData from '../memesData';

const Meme = () => {
  
  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
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

  function handleChange(event){
    const {name, value} = event.target
    setMeme(preState => ({
      ...preState,
      [name]: value
    }))
  }

  return (
    <main>
        <div className='form'>
            <input 
              type="text" 
              placeholder='Top text' 
              className='form--input'
              name="topText"
              value={meme.topText} 
              onChange={handleChange}
            />
            <input 
              type="text" 
              placeholder='Bottom text' 
              className='form--input'
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}  
            />
            <button 
              className='form--btn'
              onClick={getMemeImage}
            >
              Get a new meme image  🖼
            </button>
        </div>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </main>
  );
};

export default Meme;