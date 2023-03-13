import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";

const Meme = () => {
  const [memeData, setMemeData] = useState([]);
  const [meme, setMeme] = useState({
    text1: "",
    text2: "",
    memeImg: "",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then(({ data }) => setMemeData(data.memes));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme({
      ...meme,
      [name]: value,
    });
  };

  const getMeme = () => {
    const randomNum = Math.floor(Math.random() * memeData.length);
    const randomMeme = memeData[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      memeImg: randomMeme,
    }));
  };

  return (
    <section className="memeSection">
      <div className="inputs-box">
        <input
          type="text"
          name="text1"
          placeholder="Ingresa texto arriba"
          value={meme.text1}
          onChange={handleChange}
        />
        <input
          type="text"
          name="text2"
          placeholder="Ingresa texto abajo"
          value={meme.text2}
          onChange={handleChange}
        />
      </div>
      <button onClick={getMeme}>Genera meme</button>
      <MemeCard text1={meme.text1} memeImg={meme.memeImg} text2={meme.text2} />
    </section>
  );
};

export default Meme;
