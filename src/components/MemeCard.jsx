import React from "react";

const MemeCard = ({ text1, text2, memeImg }) => {
  return (
    <div className="memeCard">
      <div className="memeTextTop">
        <h6>{text1}</h6>
      </div>
      <div className="memeImg">
        {memeImg ? <img src={memeImg} alt="meme" /> : null}
      </div>
      <div className="memeTextBottom">
        <h6>{text2}</h6>
      </div>
    </div>
  );
};

export default MemeCard;
